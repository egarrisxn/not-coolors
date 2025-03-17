import { FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="absolute bottom-0 w-full">
      <div className="flex items-center justify-between bg-[#49e4e4] px-6 py-5 sm:px-10 xl:py-6">
        <p className="text-xs text-white xl:text-sm">
          Not Coolors By{" "}
          <a href="https://egxo.dev" target="_blank">
            <span className="cursor-pointer pl-0.5 font-bold text-gray-700 hover:text-black">
              Ethan G.
            </span>
          </a>
        </p>
        <a
          href="https://github.com/egarrisxn"
          target={"_blank"}
          rel="noreferrer"
          className="delay-50 group transition-transform group-hover:scale-110"
        >
          <FiGithub className="text-lg text-gray-700 group-hover:text-black xl:text-xl" />
        </a>
      </div>
    </div>
  );
}
