import { booking } from "@/content/site";

// "embed": scrolls to the inline booker on this page (#reserver).
// "external": outbound link to Cal.com — the fallback that works everywhere,
// kept visible next to the embed (docs/wkg-conversion.md §4.1).
export function BookingLink({
  variant = "primary",
  target = "embed",
}: {
  variant?: "primary" | "secondary" | "text";
  target?: "embed" | "external";
}) {
  if (!booking.url) {
    return (
      <span className="button button--primary button--disabled pending">
        [À compléter : lien de réservation — NEXT_PUBLIC_BOOKING_URL]
      </span>
    );
  }
  if (target === "external") {
    return (
      <a className={`button button--${variant}`} href={booking.url} rel="noopener">
        {booking.fallbackLabel} ↗
      </a>
    );
  }
  return (
    <a className={`button button--${variant}`} href="#reserver">
      {booking.label} ↓
    </a>
  );
}
