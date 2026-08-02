export default function PulseDivider({ className = "" }) {
  return (
    <div className={`pulse-divider ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 400 40"
        preserveAspectRatio="none"
        className="h-10 w-full"
      >
        <path
          d="M0 20 H140 L155 20 L165 4 L178 36 L188 20 L200 20 L210 10 L218 20 H400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="pulse-path text-amber-500"
        />
      </svg>
    </div>
  );
}
