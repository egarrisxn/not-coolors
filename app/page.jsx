import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Not Coolors.",
  description: "You know....Not Coolors.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="md:flex">
        <div className="mt-10 flex w-full flex-col items-center justify-center px-10 sm:mt-10 sm:px-10 md:mt-32 md:w-1/2 lg:mt-32 lg:px-40 xl:mt-0">
          <p className="alfa text-center text-3xl font-bold lg:text-5xl">
            Lightning-Fast Color Palette Generator!
          </p>
          <p className="my-10 text-center text-lg font-semibold text-[#464858] lg:text-2xl">
            Craft your ideal palette or draw inspiration from a myriad of
            exquisite color schemes.
          </p>
          <div>
            <Link href={`/generate`}>
              <p className=".hover:shadow-lg cursor-pointer rounded-xl bg-[#0165fe] px-20 py-3 text-center text-xl font-semibold text-white transition duration-150 hover:scale-105">
                Generate!
              </p>
            </Link>
          </div>
        </div>
        <div className="mt-32 hidden w-1/2 justify-center p-24 sm:px-10 md:flex xl:mt-0 xl:p-32">
          <Image
            className="m-0"
            src="/nc.png"
            width={400}
            height={400}
            alt="not coolors logo"
            priority
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
