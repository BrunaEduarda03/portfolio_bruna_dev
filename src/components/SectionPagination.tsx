import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem } from "./ui/pagination";
import { useLanguage } from "../i18n/LanguageContext";

export const SECTION_PAGE_SIZE = 3;

interface SectionPaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  controlsId: string;
  label: string;
}

export default function SectionPagination({ page, totalPages, onChange, controlsId, label }: SectionPaginationProps) {
  const { t } = useLanguage();
  if (totalPages <= 1) return null;

  const changePage = (next: number) => {
    if (next === page || next < 1 || next > totalPages) return;
    onChange(next);
    const grid = document.getElementById(controlsId);
    if (grid && grid.getBoundingClientRect().top < 0) {
      grid.scrollIntoView({ block: "start", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
  };
  const buttonClass = "w-10 h-10 rounded-lg border flex items-center justify-center text-xs font-mono transition-colors disabled:opacity-30 disabled:cursor-not-allowed";
  const inactiveClass = "border-surface-800 text-ink-400 hover:text-gold-400 hover:border-amber-500/30";

  return (
    <div className="mt-10">
      <Pagination aria-label={`${t("pagination.navigation")} — ${label}`}>
        <PaginationContent className="flex-wrap justify-center gap-2">
          <PaginationItem><button type="button" className={`${buttonClass} ${inactiveClass}`} aria-label={t("pagination.previous")} aria-controls={controlsId} disabled={page === 1} onClick={() => changePage(page - 1)}><ChevronLeft size={16} /></button></PaginationItem>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(number => (
            <PaginationItem key={number}><button type="button" className={`${buttonClass} ${number === page ? "border-amber-500/40 bg-amber-500/10 text-gold-400" : inactiveClass}`} aria-label={`${t("pagination.page")} ${number}`} aria-controls={controlsId} aria-current={number === page ? "page" : undefined} onClick={() => changePage(number)}>{number}</button></PaginationItem>
          ))}
          <PaginationItem><button type="button" className={`${buttonClass} ${inactiveClass}`} aria-label={t("pagination.next")} aria-controls={controlsId} disabled={page === totalPages} onClick={() => changePage(page + 1)}><ChevronRight size={16} /></button></PaginationItem>
        </PaginationContent>
      </Pagination>
      <p className="mt-3 text-center text-xs font-mono text-ink-500" role="status" aria-live="polite" aria-atomic="true">{t("pagination.page")} {page} {t("pagination.of")} {totalPages}</p>
    </div>
  );
}
