import { Check, Copy } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Button } from "@/components/ui/button";

export function CopyEmailButton({ email }: { email: string }) {
  const { status, copy } = useCopyToClipboard();
  return (
    <div className="copy-email">
      <Button className="copy-button" onClick={() => void copy(email)}>
        {status === "copied" ? <Check size={16} /> : <Copy size={16} />} Copy email
      </Button>
      <span role="status">
        {status === "copied"
          ? "Email copied"
          : status === "error"
            ? "Could not copy. Select the email address manually."
            : ""}
      </span>
    </div>
  );
}
