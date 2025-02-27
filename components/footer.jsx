import { FiGithub } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";

const Footer = () => {
  let copyright = String.fromCodePoint(0x000a9);
  return (
    <div className="absolute bottom-0 w-full">
      <div className="flex items-center justify-between bg-[#00a0fb] px-8 py-5 sm:px-20">
        <p className="text-xs text-white lg:text-sm">
          {copyright} {new Date().getFullYear()} Not Coolors By{" "}
          <a href="https://egxo.dev" target="_blank">
            <span className="cursor-pointer font-bold">Ethan G.</span>
          </a>
        </p>
        <div className="flex items-center justify-center gap-5 text-lg font-semibold">
          <a
            href="https://github.com/egarrisxn"
            target={"_blank"}
            rel="noreferrer"
            className="delay-50 transition-transform hover:scale-110"
          >
            <FiGithub className="text-white" />
          </a>
          <a
            href="https://egxo.dev"
            target={"_blank"}
            rel="noreferrer"
            className="delay-50 transition-transform hover:scale-110"
          >
            <CgWebsite className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
