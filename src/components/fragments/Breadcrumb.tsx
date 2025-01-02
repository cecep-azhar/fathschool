"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export const Breadcrumb: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment);

  const cleanSegment = (segment: string) =>
    decodeURIComponent(segment).replace(/%20|[^a-zA-Z0-9]/g, " ");

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">

        <li className="breadcrumb-item">
          <Link href="/">Beranda</Link>
        </li>

        {/* Generate breadcrumbs */}
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1; 
          const path = `/${segments.slice(0, index + 1).join("/")}`;

          return (
            <li key={index} className={`breadcrumb-item ${isLast ? "active" : ""}`} aria-current={isLast ? "page" : undefined}>
              {isLast || segment.toLowerCase() === "detail" ? cleanSegment(segment).charAt(0).toUpperCase() + cleanSegment(segment).slice(1) : (
                <Link href={path}>
                  {cleanSegment(segment).charAt(0).toUpperCase() + cleanSegment(segment).slice(1)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
