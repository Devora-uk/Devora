import type { Metadata } from "next"

/** Prevents the layout title template from duplicating "| Devora" in document titles. */
export function resolveTitle(title: string): Metadata["title"] {
  if (title.includes("| Devora")) {
    return { absolute: title }
  }
  return title
}
