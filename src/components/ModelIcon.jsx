const iconPaths = {
  orbit: (
    <>
      <circle cx="32" cy="32" r="7" />
      <ellipse cx="32" cy="32" rx="23" ry="10" />
      <ellipse cx="32" cy="32" rx="10" ry="23" transform="rotate(38 32 32)" />
    </>
  ),
  signal: (
    <>
      <path d="M16 44V34" />
      <path d="M27 44V26" />
      <path d="M38 44V20" />
      <path d="M49 44V12" />
      <path d="M15 18c9-8 25-9 34-1" />
    </>
  ),
  radar: (
    <>
      <circle cx="32" cy="32" r="20" />
      <circle cx="32" cy="32" r="10" />
      <path d="M32 32l17-11" />
      <path d="M32 12v7" />
      <path d="M32 45v7" />
      <path d="M12 32h7" />
      <path d="M45 32h7" />
    </>
  ),
  layers: (
    <>
      <path d="M32 10l22 12-22 12L10 22 32 10z" />
      <path d="M54 32L32 44 10 32" />
      <path d="M54 42L32 54 10 42" />
    </>
  ),
  spark: (
    <>
      <path d="M33 8l5 17 17 7-17 7-5 17-7-17-17-7 17-7 7-17z" />
      <path d="M48 8v10" />
      <path d="M43 13h10" />
    </>
  ),
  prism: (
    <>
      <path d="M32 8l21 13v22L32 56 11 43V21L32 8z" />
      <path d="M32 8v48" />
      <path d="M11 21l21 12 21-12" />
      <path d="M11 43l21-10 21 10" />
    </>
  ),
  check: (
    <>
      <path d="M18 33l8 8 20-22" />
      <circle cx="32" cy="32" r="24" />
    </>
  ),
  limit: (
    <>
      <path d="M32 10l24 42H8L32 10z" />
      <path d="M32 25v12" />
      <path d="M32 44h.01" />
    </>
  ),
  target: (
    <>
      <circle cx="32" cy="32" r="22" />
      <circle cx="32" cy="32" r="11" />
      <circle cx="32" cy="32" r="3" />
    </>
  ),
  diamond: (
    <>
      <path d="M32 8l22 24-22 24L10 32 32 8z" />
      <path d="M22 32h20" />
      <path d="M32 18v28" />
    </>
  ),
}

function ModelIcon({ name = 'diamond', className = '' }) {
  return (
    <svg
      className={`model-icon ${className}`}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        {iconPaths[name] || iconPaths.diamond}
      </g>
    </svg>
  )
}

export default ModelIcon
