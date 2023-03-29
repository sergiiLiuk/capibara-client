import { createContext, useContext } from "react";

const SolutionTitleContext = createContext<string | null>(null);

export const SolutionTitleProvider = SolutionTitleContext.Provider;

export function useSolutionTitle(options: { noDefault: true }): string | null;
export function useSolutionTitle(options?: { noDefault?: false }): string;
export function useSolutionTitle({
  noDefault = false,
}: { noDefault?: boolean } = {}) {
  return useContext(SolutionTitleContext) ?? (noDefault ? null : "Frigg");
}
