"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";

const Navbar = ({ generateOnButton }) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-center justify-between px-10 py-3 shadow-lg sm:flex-row sm:px-20">
      <Link href="/">
        <Image
          src="/notcoolors.svg"
          width={100}
          height={30}
          className="h-auto"
          alt="not not coolors logo"
        />
      </Link>
      <div className="flex items-center justify-center text-lg font-semibold">
        <Link href="/saved-palette">
          <p
            className={`${
              pathname == "/saved-palette" ? "border-b-2" : "hover:border-b-2"
            } cursor-pointer border-[#0165fe]`}
            onClick={() => toast.dismiss()}
          >
            My Palette
          </p>
        </Link>
        <div className="mx-3 h-12 w-[1px] bg-[#ECECEC]"></div>
        {pathname.includes("/palette/") ? (
          <button
            onClick={() => generateOnButton()}
            className={`${
              pathname.includes("/palette/") ? "border-b-2" : "hover:border-b-2"
            } cursor-pointer border-[#0165fe]`}
          >
            Generate!
          </button>
        ) : (
          <Link href={"/generate"}>
            <p
              className={`${
                pathname.includes("/palette/")
                  ? "border-b-2"
                  : "hover:border-b-2"
              } cursor-pointer border-[#0165fe]`}
            >
              Generate!
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
