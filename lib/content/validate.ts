import { z } from "zod";

/**
 * Validate a list of raw rows. A bad row fails with its position and
 * the exact fields, so you can fix the source (file or sheet) fast.
 */
export function parseRows<T extends z.ZodType>(schema: T, rows: unknown[], label: string): z.infer<T>[] {
  return rows.map((row, i) => {
    const result = schema.safeParse(row);
    if (!result.success) {
      throw new Error(`Bad ${label} at row ${i + 1}:\n${z.prettifyError(result.error)}`);
    }
    return result.data;
  });
}

export function parseOne<T extends z.ZodType>(schema: T, value: unknown, label: string): z.infer<T> {
  const result = schema.safeParse(value);
  if (!result.success) {
    throw new Error(`Bad ${label}:\n${z.prettifyError(result.error)}`);
  }
  return result.data;
}
