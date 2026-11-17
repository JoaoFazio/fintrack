import { useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  parseStoredValue: (item: unknown) => T | null,
) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        const actualValue = JSON.parse(stored);
        const validatedList = parseStoredValue(actualValue);
        if (validatedList !== null) {
          return validatedList;
        } else return initialValue;
      } catch {
        return initialValue;
      }
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
