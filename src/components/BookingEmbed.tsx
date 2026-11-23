"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useRef, useState } from "react";

const NAMESPACE = "first-call";
const BRAND = "#0b3a6e"; // --blueprint; never the MOTIS palette

// Inline Cal.com booker. Comfort, not the mechanism (docs/wkg-conversion.md §4.1):
// the outbound link stays visible next to it, because iframes break with some
// blockers and browsers. Loaded only when the section nears the viewport, so a
// visitor who never scrolls here sends nothing to Cal.com.
export function BookingEmbed({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const calLink = new URL(url).pathname.replace(/^\//, "");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: { light: { "cal-brand": BRAND }, dark: { "cal-brand": BRAND } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [visible]);

  return (
    <div ref={ref} className="booking-embed">
      {visible ? (
        <Cal
          namespace={NAMESPACE}
          calLink={calLink}
          config={{ layout: "month_view" }}
          style={{ width: "100%", height: "100%", overflow: "auto" }}
        />
      ) : (
        <p className="booking-embed__placeholder">Chargement du calendrier…</p>
      )}
    </div>
  );
}
