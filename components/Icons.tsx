type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...base} d="M7.2 3.5 4.8 4.6c-1 .5-1.5 1.6-1.2 2.7 1.8 6.2 6.7 11.1 12.9 12.9 1.1.3 2.2-.2 2.7-1.2l1.1-2.4-4.5-2-1.4 2c-3.1-1.4-5.6-3.9-7-7l2-1.4-2.2-4.7Z" />
    </svg>
  );
}

export function MessageIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...base} d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-5.5 4v-4.8A2.5 2.5 0 0 1 4 13.7V5.5Z" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      <path {...base} d="M4 10h12m-5-5 5 5-5 5" />
    </svg>
  );
}

export function CheckIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      <path {...base} d="m4 10 4 4 8-9" />
    </svg>
  );
}

export function SparkleIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...base} d="M12 2c.5 5.4 3.3 8.2 8 8-4.7-.2-7.5 2.6-8 8-.5-5.4-3.3-8.2-8-8 4.7.2 7.5-2.6 8-8Zm7 14c.2 2.7 1.5 4 4 4-2.5 0-3.8 1.3-4 4-.2-2.7-1.5-4-4-4 2.5 0 3.8-1.3 4-4Z" />
    </svg>
  );
}

export function MapPinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...base} d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle {...base} cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ShieldIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...base} d="M12 3 5 6v5c0 4.6 2.8 8.3 7 10 4.2-1.7 7-5.4 7-10V6l-7-3Z" />
      <path {...base} d="m9 12 2 2 4-5" />
    </svg>
  );
}

export function GaugeIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...base} d="M4.9 19a9 9 0 1 1 14.2 0" />
      <path {...base} d="m12 13 4-4" />
      <path {...base} d="M7 19h10" />
    </svg>
  );
}

export function QuoteIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...base} d="M7 18H4V9h6v5a4 4 0 0 1-4 4Zm10 0h-3V9h6v5a4 4 0 0 1-4 4Z" />
    </svg>
  );
}

export function UsersIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle {...base} cx="9" cy="8" r="3" />
      <path {...base} d="M3.5 19v-1.5A4.5 4.5 0 0 1 8 13h2a4.5 4.5 0 0 1 4.5 4.5V19" />
      <path {...base} d="M15 5.4a3 3 0 0 1 0 5.2M17 13a4.5 4.5 0 0 1 3.5 4.4V19" />
    </svg>
  );
}

export function MenuIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...base} d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...base} d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}
