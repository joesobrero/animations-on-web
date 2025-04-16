import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen p-16">
      <main className="flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-2 items-start w-full">
          <h1 className="text-4xl font-bold">Animations on the web</h1>
          <Link href="https://animations.dev/learn/css-animations/transforms">
            animations.dev
          </Link>
        </div>
        <div className="flex flex-col gap-2 items-start w-full">
          <PageLink href="/toast-stacking">Toast Stacking</PageLink>
        </div>
      </main>
    </div>
  );
}

const PageLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className={cn("text-lg font-medium", "hover:opacity-60")}
      style={{ transition: "all 0.3s ease" }}
    >
      {children}
    </Link>
  );
};
