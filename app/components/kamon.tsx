type KamonProps = {
  size?: number;
  className?: string;
};

export default function Kamon({
  size = 48,
  className = "",
}: KamonProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="60"
        cy="60"
        r="54"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      {[0, 72, 144, 216, 288].map((angle) => (
        <path
          key={angle}
          d="M60 55 C37 44 38 22 52 20
             L60 27 L68 20 C82 22 83 44 60 55Z"
          transform={`rotate(${angle} 60 60)`}
          fill="currentColor"
        />
      ))}

      <circle
        cx="60"
        cy="60"
        r="3"
        fill="currentColor"
      />
    </svg>
  );
}