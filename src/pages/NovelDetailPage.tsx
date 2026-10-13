import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import { useChapter } from "../hooks/useChapter";
import { useNovelDetail } from "../hooks/useNovels";
import { useNovelChaptersList } from "../hooks/useNovelChapterList";

const NovelDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { novel, loading: loadingNovel } = useNovelDetail(id);

  const detectedChapters = useNovelChaptersList(novel?.id); // load novels chapters

  const chapterList: number[] = detectedChapters;

  const [activeChapterId, setActiveChapterId] = useState<string | undefined>(
    undefined,
  );
  const {
    chapter,
    loading: loadingChapter,
    error: chapterError,
  } = useChapter(activeChapterId);

  if (loadingNovel) {
    return (
      <div className="text-center py-12 text-[#FCF1D0]/60">
        Memuat info novel...
      </div>
    );
  }

  if (!novel) {
    return (
      <div className="text-center py-12">
        <p className="text-[#FCF1D0]/60">Novel tidak ditemukan.</p>
        <Link
          to="/"
          className="text-xs text-[#FCF1D0] underline mt-2 inline-block"
        >
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link
        to="/"
        className="inline-flex items-center text-sm text-[#FCF1D0]/70 hover:text-[#FCF1D0] gap-1"
      >
        ← Kembali ke Daftar Novel
      </Link>

      {/* Info Novel */}
      <div className="bg-[#0D1C42] border border-[#22396F] rounded-2xl p-6 md:p-8 space-y-6">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#FCF1D0]/60 uppercase mb-2">
            <span>{novel.genre}</span>
            <span>•</span>
            <span>Tema: {novel.theme}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#FCF1D0]">
            {novel.title}
          </h1>
        </div>

        <p className="text-[#FCF1D0]/80 leading-relaxed">{novel.synopsis}</p>

        {novel.authorNote && (
          <div className="p-4 bg-[#010736] border-l-4 border-[#FCF1D0] rounded-r-xl text-xs text-[#FCF1D0]/70 italic">
            <span className="font-semibold not-italic block mb-1 text-[#FCF1D0]">
              Catatan Penulis:
            </span>
            "{novel.authorNote}"
          </div>
        )}

        {/* Chapter list */}
        <div className="border-t border-[#22396F] pt-6">
          <h2 className="text-lg font-semibold mb-4 text-[#FCF1D0]">
            Pilih Bab ({chapterList.length} Bab)
          </h2>

          {chapterList.length > 0 ? (
            <div className="flex flex-wrap gap-2.5">
              {chapterList.map((chapterNum) => {
                const chapterId = `${novel.id}_${chapterNum}`;
                const isActive = activeChapterId === chapterId;

                return (
                  <button
                    key={chapterId}
                    onClick={() => setActiveChapterId(chapterId)}
                    className={`px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                      isActive
                        ? "bg-[#FCF1D0] text-[#010736] font-semibold border-[#FCF1D0]"
                        : "bg-[#010736] border-[#22396F] text-[#FCF1D0] hover:border-[#FCF1D0]/50"
                    }`}
                  >
                    Bab {chapterNum}
                  </button>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-[#FCF1D0]/50 italic">
              Belum ada bab yang tersedia.
            </p>
          )}
        </div>
      </div>

      {/* Reading area */}
      {loadingChapter && (
        <div className="p-8 bg-[#0D1C42] border border-[#22396F] rounded-2xl text-center text-[#FCF1D0]/60">
          Memuat bab...
        </div>
      )}

      {chapterError && (
        <div className="p-6 bg-[#0D1C42] border border-red-500/50 text-red-400 rounded-2xl text-center text-sm">
          {chapterError}
        </div>
      )}

      {chapter && !loadingChapter && (
        <article className="bg-[#0D1C42] border border-[#22396F] rounded-2xl p-6 md:p-10 space-y-6">
          <div className="border-b border-[#22396F] pb-4">
            <span className="text-xs font-semibold text-[#FCF1D0]/50 uppercase">
              Bab {chapter.chapter}
            </span>
            <h2 className="text-2xl font-bold text-[#FCF1D0] mt-1">
              {chapter.title}
            </h2>
            {chapter.authorNote && (
              <div className="p-4 bg-[#010736] mt-1 border-l-4 border-[#FCF1D0] rounded-r-xl text-xs text-[#FCF1D0]/70 italic">
                <span className="font-semibold not-italic block mb-1 text-[#FCF1D0]">
                  Catatan Penulis Untuk Bab Terkait:
                </span>
                "{chapter.authorNote}"
              </div>
            )}
          </div>

          <div className="space-y-4 text-[#FCF1D0]/90 text-base md:text-lg leading-relaxed">
            {chapter.content.map((paragraph, index) => (
              <p key={index} className="text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      )}
    </div>
  );
};

export default NovelDetailPage;
