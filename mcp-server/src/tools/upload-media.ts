import * as fs from "node:fs";
import * as path from "node:path";
import * as crypto from "node:crypto";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "../config.js";

export interface UploadMediaResult {
  publicUrl: string;
  fileName: string;
  mimeType: string;
  sizeBytes: number;
}

const ALLOWED_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".bmp",
  ".mp4",
  ".webm",
  ".mov",
]);

const MIME_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".bmp": "image/bmp",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".mov": "video/quicktime",
};

const MAX_SIZE_BYTES = 20 * 1024 * 1024; // 20MB

export async function uploadMedia(
  filePath: string,
): Promise<UploadMediaResult> {
  // Validate file exists
  let stat: fs.Stats;
  try {
    stat = fs.statSync(filePath);
  } catch {
    throw new Error(`File not found: ${filePath}`);
  }

  // Validate extension
  const ext = path.extname(filePath).toLowerCase();
  if (!ALLOWED_EXTENSIONS.has(ext)) {
    throw new Error(
      `Unsupported file type "${ext}". Allowed: ${[...ALLOWED_EXTENSIONS].join(", ")}`,
    );
  }

  // Validate size
  if (stat.size > MAX_SIZE_BYTES) {
    throw new Error(
      `File too large (${(stat.size / 1024 / 1024).toFixed(1)}MB). Maximum is 20MB.`,
    );
  }

  // Generate unique filename and determine MIME type
  const fileName = `${crypto.randomUUID()}${ext}`;
  const mimeType = MIME_TYPES[ext]!;

  // Read file
  const buffer = fs.readFileSync(filePath);

  // Upload to Supabase Storage
  const uploadUrl = `${SUPABASE_URL}/storage/v1/object/user-media/${fileName}`;
  const resp = await fetch(uploadUrl, {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": mimeType,
    },
    body: buffer,
  });

  if (!resp.ok) {
    let message = `Upload failed: ${resp.status}`;
    try {
      const err = await resp.json();
      if (err.error || err.message) message = err.error || err.message;
    } catch {
      /* ignored */
    }
    throw new Error(message);
  }

  const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/user-media/${fileName}`;

  return {
    publicUrl,
    fileName,
    mimeType,
    sizeBytes: stat.size,
  };
}
