import { booking } from "@/content/site";

// Outbound link by default (docs/wkg-conversion.md §4.1): works everywhere, no iframe.
export function BookingLink({ variant = "primary" }: { variant?: "primary" | "secondary" }) {
  if (!booking.url) {
    return (
      <span className={`button button--${variant} button--disabled pending`}>
        [À compléter : lien de réservation — NEXT_PUBLIC_BOOKING_URL]
      </span>
    );
  }
  return (
    <a className={`button button--${variant}`} href={booking.url} rel="noopener">
      {booking.label} →
    </a>
  );
}
