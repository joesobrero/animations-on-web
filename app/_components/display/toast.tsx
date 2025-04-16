import { cn } from "@/lib/utils";
import { ProfileImage } from "./profileImage";

type ToastProps = {
  title: string;
  description: string;
  variant: "success" | "error" | "warning" | "info";
  className?: string;
  style?: React.CSSProperties;
};

export const Toast = ({ title, description, className, style }: ToastProps) => {
  return (
    <div
      className={cn(
        "w-sm h-full border border-base-200 bg-base-100 rounded-lg p-4 flex items-center gap-2 flex-row",
        "shadow-md",
        className,
        style
      )}
      style={{ gridArea: "1 / 1", ...style }}
    >
      <ProfileImage />
      <div className="flex flex-col gap-0.5 items-start justify-start">
        <h2 className="text-lg font-bold leading-none">{title}</h2>
        <p className="text-sm text-base-muted leading-none">{description}</p>
      </div>
    </div>
  );
};
