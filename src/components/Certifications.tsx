import React, { useState, useMemo } from "react";
import { certifications, type Certification } from "../data/mock";
import { useLanguage } from "../i18n/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  BookOpen,
  Calendar,
  CheckCheck,
  ChevronLeft,
  ChevronRight,
  Clock,
  Copy,
  Download,
  ExternalLink,
  GraduationCap,
  X,
} from "lucide-react";
import { trackEvent } from "../lib/analytics";

// ─── constants ───────────────────────────────────────────────────────────────

const PAGE_SIZE = 6;

// ─── helpers ────────────────────────────────────────────────────────────────

function parseDurationMinutes(duration: string): number {
  const h = parseInt(duration.match(/(\d+)h/)?.[1] ?? "0", 10);
  const m = parseInt(duration.match(/(\d+)m/)?.[1] ?? "0", 10);
  return h * 60 + m;
}

function formatTotalHours(minutes: number): string {
  return `${Math.floor(minutes / 60)}h+`;
}

function getCertTypeLabel(type: string, t: (key: string) => any): string {
  if (type === "Curso") return t("certifications.typeCourse");
  if (type === "Diploma") return t("certifications.typeDiploma");
  return type;
}

// ─── CertFilter ──────────────────────────────────────────────────────────────

interface CertFilterProps {
  institutions: string[];
  active: string;
  onChange: (v: string) => void;
}

const CertFilter: React.FC<CertFilterProps> = ({
  institutions,
  active,
  onChange,
}) => {
  const { t } = useLanguage();
  const options = ["All", ...institutions];

  return (
    <div className="flex items-center gap-2 flex-wrap mb-8">
      {options.map((opt) => {
        const isActive = active === opt;
        return (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`relative px-4 py-1.5 rounded-lg text-xs font-mono tracking-wide transition-all duration-200 ${
              isActive
                ? "text-amber-400 border border-amber-500/40 bg-amber-500/10"
                : "text-zinc-500 border border-zinc-800 hover:text-zinc-300 hover:border-zinc-700"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-lg bg-amber-500/5"
                transition={{ type: "spring", damping: 28, stiffness: 320 }}
              />
            )}
            <span className="relative">
              {opt === "All" ? t("certifications.all") : opt}
            </span>
          </button>
        );
      })}
    </div>
  );
};

// ─── CertPagination ──────────────────────────────────────────────────────────

interface CertPaginationProps {
  page: number;
  totalPages: number;
  onChange: (p: number) => void;
}

const CertPagination: React.FC<CertPaginationProps> = ({
  page,
  totalPages,
  onChange,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-3 mt-10">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-amber-400 hover:border-amber-500/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          onClick={() => onChange(n)}
          className={`w-9 h-9 rounded-lg border text-xs font-mono transition-all duration-200 ${
            n === page
              ? "border-amber-500/40 bg-amber-500/10 text-amber-400"
              : "border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700"
          }`}
        >
          {n}
        </button>
      ))}

      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-amber-400 hover:border-amber-500/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

// ─── CertCard ───────────────────────────────────────────────────────────────

interface CertCardProps {
  cert: Certification;
  index: number;
  onClick: (c: Certification) => void;
}

const CertCard: React.FC<CertCardProps> = ({ cert, index, onClick }) => {
  const { t } = useLanguage();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(cert)}
      className="group relative cursor-pointer rounded-2xl border border-zinc-800/80 bg-zinc-900/20 overflow-hidden hover:border-amber-500/20 hover:bg-amber-500/[0.02] transition-all duration-500 flex flex-col"
    >
      {/* Thumbnail */}
      <div
        className="relative overflow-hidden bg-zinc-950"
        style={{ aspectRatio: "16/9" }}
      >
        <img
          src={cert.previewImage}
          alt={cert.title}
          loading="lazy"
          className="w-full h-full object-cover opacity-70 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
        <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md bg-amber-800/30 border border-amber-500/40 text-amber-500 backdrop-blur-md">
          {getCertTypeLabel(cert.type, t)}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500/60" />
          <span className="font-mono text-xs text-amber-400/80 tracking-wide">
            {cert.institution}
          </span>
        </div>

        <h3 className="text-sm font-semibold text-zinc-300 group-hover:text-zinc-100 transition-colors duration-300 leading-snug mb-auto line-clamp-2">
          {cert.title}
        </h3>

        <div className="flex items-center gap-4 mt-4 text-xs text-zinc-600">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3" />
            {cert.date}
          </span>
          {cert.duration && (
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              {cert.duration}
            </span>
          )}
        </div>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-amber-500/5 via-transparent to-amber-500/5 pointer-events-none"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ─── CertStats ──────────────────────────────────────────────────────────────

interface CertStatsProps {
  total: number;
  totalMinutes: number;
  institutions: number;
}

const CertStats: React.FC<CertStatsProps> = ({
  total,
  totalMinutes,
  institutions,
}) => {
  const { t } = useLanguage();

  const stats = [
    {
      value: `${total}`,
      label: t("certifications.statsCourses"),
      icon: BookOpen,
    },
    {
      value: formatTotalHours(totalMinutes),
      label: t("certifications.statsHours"),
      icon: Clock,
    },
    {
      value: `${institutions}`,
      label: t("certifications.statsInstitutions"),
      icon: GraduationCap,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-3 gap-4 mt-14"
    >
      {stats.map(({ value, label, icon: Icon }) => (
        <div
          key={label}
          className="flex flex-col items-center justify-center gap-1.5 p-5 rounded-2xl border border-zinc-800/80 bg-zinc-900/20 hover:border-amber-500/15 transition-all duration-300"
        >
          <Icon className="w-4 h-4 text-amber-500/50 mb-0.5" />
          <span className="text-2xl md:text-3xl font-bold font-mono text-amber-400">
            {value}
          </span>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider text-center">
            {label}
          </span>
        </div>
      ))}
    </motion.div>
  );
};

// ─── CertModal ──────────────────────────────────────────────────────────────

interface CertModalProps {
  cert: Certification;
  onClose: () => void;
}

const CertModal: React.FC<CertModalProps> = ({ cert, onClose }) => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    await navigator.clipboard.writeText(cert.link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      <motion.div
        className="relative w-full max-w-2xl bg-[#0f0f0f] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/70"
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 24 }}
        transition={{ type: "spring", damping: 28, stiffness: 320 }}
      >
        <button
          onClick={onClose}
          aria-label={t("certifications.close")}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-amber-400 hover:border-amber-500/30 transition-all duration-200"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative bg-zinc-950 flex items-center justify-center min-h-[220px]">
          <img
            src={cert.previewImage}
            alt={cert.title}
            className="w-full object-contain max-h-72"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="p-6 pt-5">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/25 text-amber-400">
              {getCertTypeLabel(cert.type, t)}
            </span>
            <div className="flex items-center gap-1.5">
              <Award className="w-3 h-3 text-amber-500/60" />
              <span className="text-xs font-mono text-amber-400/70">
                {cert.institution}
              </span>
            </div>
          </div>

          <h3 className="text-base font-bold text-zinc-100 leading-snug mb-3">
            {cert.title}
          </h3>

          <div className="flex items-center gap-5 text-xs text-zinc-500 mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {cert.date}
            </span>
            {cert.duration && (
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {cert.duration}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={copyLink}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-amber-400 hover:border-amber-500/30 transition-all duration-200"
            >
              {copied ? (
                <CheckCheck className="w-3.5 h-3.5 text-green-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              {copied
                ? t("certifications.copied")
                : t("certifications.copyLink")}
            </button>

            {cert.downloadLink && (
              <a
                href={cert.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("certificate_download", { title: cert.title })}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-amber-400 hover:border-amber-500/30 transition-all duration-200"
              >
                <Download className="w-3.5 h-3.5" />
                {t("certifications.download")}
              </a>
            )}

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("certificate_external_view", { title: cert.title })}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 hover:bg-amber-500/20 transition-all duration-200 ml-auto"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              {t("certifications.view")}
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── Certifications (section) ────────────────────────────────────────────────

const Certifications: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Certification | null>(null);

  const institutions = useMemo(
    () => [...new Set(certifications.map((c) => c.institution))],
    [],
  );

  const filtered = useMemo(
    () =>
      filter === "All"
        ? certifications
        : certifications.filter((c) => c.institution === filter),
    [filter],
  );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleFilter = (value: string) => {
    setFilter(value);
    setPage(1);
  };

  const stats = useMemo(() => {
    const totalMinutes = certifications.reduce(
      (acc, c) => acc + (c.duration ? parseDurationMinutes(c.duration) : 0),
      0,
    );
    return {
      total: certifications.length,
      totalMinutes,
      institutions: institutions.length,
    };
  }, [institutions]);

  return (
    <section
      id="certifications"
      className="relative py-24 md:py-32 bg-[#0a0a0a]"
    >
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/[0.02] rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-amber-500 font-mono text-sm">
              {t("certifications.sectionNum")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
              {t("certifications.title")}
            </h2>
            <div className="flex-1 min-w-[2rem] h-[1px] bg-zinc-800 ml-4" />
          </div>
          <p className="text-zinc-500 text-sm max-w-lg">
            {t("certifications.subtitle")}
          </p>
        </motion.div>

        {/* Filter */}
        <CertFilter
          institutions={institutions}
          active={filter}
          onChange={handleFilter}
        />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="wait">
            {paginated.map((cert, i) => (
              <CertCard
                key={cert.id}
                cert={cert}
                index={i}
                onClick={(c) => {
                  trackEvent("certificate_view", { title: c.title });
                  setSelected(c);
                }}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <CertPagination
          page={page}
          totalPages={totalPages}
          onChange={setPage}
        />

        {/* Stats */}
        <CertStats {...stats} />
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <CertModal cert={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
