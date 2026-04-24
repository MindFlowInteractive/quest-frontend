import { useCallback, useEffect, useRef, useState } from "react";

export type PreparedViewStatus = "loading" | "ready" | "empty" | "error";

type UsePreparedViewOptions<T> = {
  delayMs?: number;
  deps?: ReadonlyArray<unknown>;
  isEmpty?: (data: T) => boolean;
  load: () => Promise<T> | T;
};

type UsePreparedViewResult<T> = {
  data: T | null;
  errorMessage: string | null;
  retry: () => void;
  status: PreparedViewStatus;
};

export function usePreparedView<T>({
  delayMs = 450,
  deps = [],
  isEmpty,
  load,
}: UsePreparedViewOptions<T>): UsePreparedViewResult<T> {
  const [status, setStatus] = useState<PreparedViewStatus>("loading");
  const [data, setData] = useState<T | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);
  const loadRef = useRef(load);
  const isEmptyRef = useRef(isEmpty);

  useEffect(() => {
    loadRef.current = load;
  }, [load]);

  useEffect(() => {
    isEmptyRef.current = isEmpty;
  }, [isEmpty]);

  useEffect(() => {
    let cancelled = false;

    const prepare = async () => {
      setStatus("loading");
      setErrorMessage(null);

      try {
        await new Promise((resolve) => window.setTimeout(resolve, delayMs));
        const nextData = await loadRef.current();

        if (cancelled) {
          return;
        }

        setData(nextData);
        setStatus(isEmptyRef.current?.(nextData) ? "empty" : "ready");
      } catch (error) {
        if (cancelled) {
          return;
        }

        const message =
          error instanceof Error
            ? error.message
            : "Something went wrong while preparing this screen.";

        setData(null);
        setErrorMessage(message);
        setStatus("error");
      }
    };

    void prepare();

    return () => {
      cancelled = true;
    };
  }, [attempt, delayMs, ...deps]);

  const retry = useCallback(() => {
    setAttempt((value) => value + 1);
  }, []);

  return { data, errorMessage, retry, status };
}
