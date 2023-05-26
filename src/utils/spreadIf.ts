export function spreadIf<T extends [...any]>(
  predicate: any,
  ...value: T
): T | [] {
  return predicate ? value : [];
}
