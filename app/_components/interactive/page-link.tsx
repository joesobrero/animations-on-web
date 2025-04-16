import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "../../../styles/page-link.css";

export default function PageLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="text-sm font-medium page-link -ml-4">
      <FontAwesomeIcon icon={faMinus} className="w-4 h-4 page-link-icon" />
      {children}
    </Link>
  );
}
