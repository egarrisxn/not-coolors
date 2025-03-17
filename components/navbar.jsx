"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";

export default function Navbar({ generateOnButton }) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-center justify-between gap-4 px-6 py-5 shadow-lg sm:flex-row sm:gap-0 xl:px-8 xl:py-6">
      <Link href="/">
        <Image
          src="/notcoolors.svg"
          width={100}
          height={40}
          className="h-auto rounded-3xl border px-2 py-1.5 shadow-lg"
          alt="not coolors logo"
        />
      </Link>
      <div className="flex items-center justify-center text-sm font-semibold sm:text-base">
        {pathname.includes("/palette/") ? (
          <button
            onClick={() => generateOnButton()}
            className={`${
              pathname.includes("/palette/") ? "border-b-2" : "hover:border-b-2"
            } cursor-pointer border-[#49e4e4] uppercase`}
          >
            Generate
          </button>
        ) : (
          <Link href={"/generate"}>
            <p
              className={`${
                pathname.includes("/palette/")
                  ? "border-b-2"
                  : "hover:border-b-2"
              } cursor-pointer border-[#49e4e4] uppercase`}
            >
              Generate
            </p>
          </Link>
        )}
        <div className="mx-4 h-6 w-[1px] bg-[#49e4e4] sm:h-8"></div>
        <Link href="/saved-palette">
          <p
            className={`${
              pathname == "/saved-palette" ? "border-b-2" : "hover:border-b-2"
            } cursor-pointer border-[#49e4e4] uppercase`}
            onClick={() => toast.dismiss()}
          >
            Saved
          </p>
        </Link>
      </div>
    </div>
  );
}
