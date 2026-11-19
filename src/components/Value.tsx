import { isPending, type Text } from "@/content/site";

// Renders a content value, or a visible marker when the fact is not sourced yet.
export function Value({ value }: { value: Text }) {
  if (isPending(value)) {
    return (
      <span className="pending" title="Information manquante — à fournir avant mise en ligne">
        [À compléter : {value.pending}]
      </span>
    );
  }
  return <>{value}</>;
}
