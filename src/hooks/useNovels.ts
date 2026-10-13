import { useState, useEffect } from "react";
import { type Novel } from "../types/novel";
import novelsData from "../data/novels.json";

/**
 *
 * @returns novel list
 */
export const useNovels = () => {
  const [novels, setNovels] = useState<Novel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setNovels(novelsData as Novel[]);
    setLoading(false);
  }, []);

  return { novels, loading };
};

export const useNovelDetail = (novelId?: string) => {
  const [novel, setNovel] = useState<Novel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!novelId) {
      setLoading(false);
      return;
    }

    const found =
      (novelsData as Novel[]).find((item) => item.id === novelId) || null;
    setNovel(found);
    setLoading(false);
  }, [novelId]);

  return { novel, loading };
};
