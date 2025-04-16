import Link from "next/link";
import PageLink from "./_components/interactive/page-link";
import Divider from "./_components/display/divider";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 items-center">
      <div className="flex flex-col gap-2 items-start w-full">
        <h1 className="text-4xl font-extrabold text-base-muted">
          Animations on the web
        </h1>
        <Link
          href="https://animations.dev/learn/css-animations/transforms"
          className="text-yellow-600 underline italic"
          target="_blank"
        >
          animations.dev
        </Link>
      </div>
      <div className="flex flex-col gap-2 items-start w-full">
        <h2 className="text-lg font-light text-base-muted">CSS Animations</h2>
        <Divider />
        <PageLink href="/toast-stacking">Toast Stacking</PageLink>
        <PageLink href="/simple-transform">Simple Transform</PageLink>
        <PageLink href="/card-hover">Card Hover</PageLink>
        <PageLink href="/download-arrow">Download Arrow</PageLink>
      </div>
    </main>
  );
}
