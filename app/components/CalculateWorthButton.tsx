import { Button } from "@/components/ui/button";

interface CalculateWorthButton {
  handleScrollToBottom: () => void;
}

export default function CalculateWorthButton({
  handleScrollToBottom,
}: CalculateWorthButton) {
  return (
    <Button
      onClick={handleScrollToBottom}
      className="mt-6 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    >
      Calculate Your Worth
    </Button>
  );
}
