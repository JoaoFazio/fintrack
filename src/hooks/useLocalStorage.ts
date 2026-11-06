import { useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  isValid: (item: unknown) => item is T,
) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        const actualValue = JSON.parse(stored);
        if (isValid(actualValue)) {
          return actualValue;
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
