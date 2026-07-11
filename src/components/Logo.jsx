export default function Logo({ size = 36, variant = 'default' }) {
  const isLight = variant === 'light'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="vb-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6A4FD1" />
          <stop offset="1" stopColor="#2FB6E8" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill={isLight ? '#ffffff' : 'url(#vb-gradient)'} />
      <path
        d="M11 21.5l6 6 13-15"
        stroke={isLight ? 'url(#vb-gradient)' : '#fff'}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
