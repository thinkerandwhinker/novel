import { useMemo } from "react";

// take all chapters
const chapterFiles = import.meta.glob("../data/chapters/*.json");

/**
 *
 * @param novelId
 * @returns list of chapter number
 *
 * Take all matches chapter id on directory by novel id
 */
export const useNovelChaptersList = (novelId?: string): number[] => {
  return useMemo(() => {
    if (!novelId) return [];

    // '../data/chapters/<novel_id>_'
    const prefix = `../data/chapters/${novelId}_`;
    const numbers: number[] = [];

    Object.keys(chapterFiles).forEach((filePath) => {
      if (filePath.startsWith(prefix) && filePath.endsWith(".json")) {
        // extract chapter number from chapter files "cute_icebox_1.json" -> 1
        const fileName = filePath.replace(prefix, "").replace(".json", "");
        const num = parseInt(fileName, 10);
        if (!isNaN(num)) {
          numbers.push(num);
        }
      }
    });

    // sort asc
    return numbers.sort((a, b) => a - b);
  }, [novelId]);
};
