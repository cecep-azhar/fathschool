import { ImageGooglePlay } from "@/data/images";
import Image from "next/image";
import Link from "next/link";

export const ButtonGooglePlay: React.FC<{ href: string } & React.HtmlHTMLAttributes<HTMLDivElement>> = ({ href }) => {
  return (
    <span>
      <Link href={href}>
        <Image
          src={ImageGooglePlay}
          blurDataURL={ImageGooglePlay.blurDataURL}
          className="h-11 rounded-xl"
          alt="Image"
          width={200}
          height={400}
          loading="lazy"
        />
      </Link>
    </span>
  );
};
