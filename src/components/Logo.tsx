export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        aria-hidden="true"
        className="size-9 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="18.5" stroke="var(--brass)" strokeWidth="1.5" />
        <path
          d="M12 27.5 26.5 13M26.5 13l2.5-2.5M12 27.5l-2 2"
          stroke="var(--brass)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="14.5" cy="25" r="3" stroke="var(--cream)" strokeWidth="1.4" />
        <circle cx="25.5" cy="25" r="3" stroke="var(--cream)" strokeWidth="1.4" />
        <path d="M13.5 13 27 26.5" stroke="var(--cream)" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <span className="font-serif text-xl font-semibold tracking-tight flex items-baseline gap-2">
        <span>Mercer</span>
        <span className="text-brass text-[10px] font-body uppercase tracking-[0.3em]">Barbers</span>
      </span>
    </span>
  );
}
