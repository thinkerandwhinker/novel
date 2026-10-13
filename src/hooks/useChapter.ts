import { useState, useEffect } from "react";
import { type Chapter } from "../types/novel";

/**
 *
 * @param chapterId
 * @returns matches novel chapter json files by chapter id
 */
export const useChapter = (chapterId?: string) => {
  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!chapterId) {
      setChapter(null);
      return;
    }

    let isMounted = true;
    setLoading(true);
    setError(null);

    // do dynamic import
    import(`../data/chapters/${chapterId}.json`)
      .then((module) => {
        if (isMounted) {
          setChapter(module.default as Chapter);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.error(`Gagal memuat bab: ${chapterId}`, err);
          setError("Bab tidak ditemukan atau gagal dimuat.");
          setChapter(null);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [chapterId]);

  return { chapter, loading, error };
};
