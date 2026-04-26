import type { ReactNode } from "react";
import type { PreparedViewStatus } from "../../hooks/usePreparedView";

type SurfaceStateProps = {
  actionLabel?: string;
  description: string;
  onAction?: () => void;
  status: Exclude<PreparedViewStatus, "ready">;
  title: string;
};

const accentStyles: Record<SurfaceStateProps["status"], string> = {
  empty: "border-[#2B5D58] bg-[#102120]",
  error: "border-[#6F3428] bg-[#261613]",
  loading: "border-[#3A3C3E] bg-[#141516]",
};

const labelStyles: Record<SurfaceStateProps["status"], string> = {
  empty: "text-[#8EE8CF]",
  error: "text-[#FFB29F]",
  loading: "text-[#CFFDED]",
};

function LoadingOrnament() {
  return (
    <div className="space-y-3" aria-hidden="true">
      <div className="h-3 w-24 rounded-full bg-white/10" />
      <div className="h-3 w-full rounded-full bg-white/8" />
      <div className="h-3 w-4/5 rounded-full bg-white/8" />
      <div className="h-3 w-2/3 rounded-full bg-white/8" />
    </div>
  );
}

function StatusOrb({ status }: { status: SurfaceStateProps["status"] }) {
  return (
    <div
      className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${accentStyles[status]}`}
      aria-hidden="true"
    >
      {status === "loading" ? (
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-[#F9BC07]" />
      ) : (
        <span className={`text-2xl font-semibold ${labelStyles[status]}`}>
          {status === "empty" ? "0" : "!"}
        </span>
      )}
    </div>
  );
}

export function SurfaceState({
  actionLabel,
  description,
  onAction,
  status,
  title,
}: SurfaceStateProps) {
  return (
    <div
      className="rounded-3xl border border-[#323336] bg-[#141516] p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.25)]"
      role={status === "error" ? "alert" : "status"}
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-4">
          <StatusOrb status={status} />
          <div className="space-y-2">
            <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${labelStyles[status]}`}>
              {status}
            </p>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="max-w-xl text-sm leading-6 text-[#A1A1AA]">
              {description}
            </p>
          </div>
        </div>

        {onAction && actionLabel ? (
          <button
            type="button"
            onClick={onAction}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#F9BC07] px-5 text-sm font-medium text-[#F9BC07] transition hover:bg-[#F9BC07] hover:text-[#141516]"
          >
            {actionLabel}
          </button>
        ) : null}
      </div>

      {status === "loading" ? (
        <div className="mt-6 rounded-2xl border border-white/5 bg-black/10 p-5">
          <LoadingOrnament />
        </div>
      ) : null}
    </div>
  );
}

type SurfaceSectionProps = {
  children: ReactNode;
  className?: string;
  fallback: ReactNode;
  status: PreparedViewStatus;
};

export function SurfaceSection({
  children,
  className = "",
  fallback,
  status,
}: SurfaceSectionProps) {
  if (status !== "ready") {
    return <>{fallback}</>;
  }

  return <div className={className}>{children}</div>;
}
