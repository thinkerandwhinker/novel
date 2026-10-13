export type NovelStatus = "Tamat" | "On-Going";
export type FilterType = "Semua" | NovelStatus;

export interface Novel {
  id: string;
  title: string;
  genre: string;
  theme: string;
  status: NovelStatus;
  startYear: number;
  endYear: number | null;
  synopsis: string;
  authorNote?: string;
  coverUrl?: string;
}

export interface Chapter {
  id: string;
  novel_id: string;
  chapter: number;
  title: string;
  authorNote?: string;
  content: string[];
}
