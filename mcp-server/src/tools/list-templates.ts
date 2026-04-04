import { SUPABASE_URL, SUPABASE_ANON_KEY } from "../config.js";

export interface TemplateVariable {
  name: string;
  type: string;
  required: boolean;
  default: unknown;
  description?: string;
}

export interface VariableSchemaField {
  type: string;
  label?: string;
  required?: boolean;
  default?: unknown;
  description?: string;
}

export interface Template {
  id: string;
  label: string;
  category: string;
  description: string;
  tags: string[];
  position: string[];
  types: string[];
  variableSchema?: Record<string, VariableSchemaField>;
  variables?: TemplateVariable[];
  minDuration: number;
  preferredDuration: number;
  usesGlobalTextEffect: boolean;
  usesGlobalBackgroundEffect: boolean;
}

export async function listTemplates(category?: string): Promise<Template[]> {
  const url = new URL(`${SUPABASE_URL}/functions/v1/list-templates`);
  if (category) url.searchParams.set("category", category);

  const res = await fetch(url.toString(), {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch templates: ${res.status}`);
  }

  const raw = (await res.json()) as Template[];

  // Normalize: edge function returns variableSchema (object), convert to variables array
  // Keep default values (helps AI understand complex formats like transaction strings)
  // Strip only verbose descriptions to save tokens
  return raw.map((t) => {
    let variables: TemplateVariable[];

    if (t.variableSchema && typeof t.variableSchema === "object") {
      // New format: variableSchema is Record<string, VariableSchemaField>
      variables = Object.entries(t.variableSchema).map(([name, field]) => ({
        name,
        type: field.type || "string",
        required: field.required ?? false,
        ...(field.default != null && field.default !== "" ? { default: field.default } : {}),
      })) as TemplateVariable[];
    } else if (Array.isArray(t.variables)) {
      // Legacy format: variables is already an array
      variables = t.variables.map(({ name, type, required, default: def }) => ({
        name,
        type,
        required,
        ...(def != null && def !== "" ? { default: def } : {}),
      })) as TemplateVariable[];
    } else {
      variables = [];
    }

    return {
      id: t.id,
      label: t.label,
      category: t.category,
      description: t.description,
      tags: t.tags,
      position: t.position,
      types: t.types,
      variables,
      minDuration: t.minDuration,
      preferredDuration: t.preferredDuration,
      usesGlobalTextEffect: t.usesGlobalTextEffect,
      usesGlobalBackgroundEffect: t.usesGlobalBackgroundEffect,
    };
  });
}
