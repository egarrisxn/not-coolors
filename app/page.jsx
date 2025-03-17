import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Not Coolors.",
  description: "An insanely fast color palette generator to spark creativity.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex">
        <section className="mx-auto mt-20 flex w-full max-w-lg flex-col items-center justify-center gap-4 px-6 text-center md:mt-16 md:max-w-2xl lg:max-w-3xl">
          <Image
            src="/hero.png"
            width={384}
            height={384}
            alt="Not Coolors logo"
            className="size-64 sm:size-72 md:size-80"
            priority
          />
          <h1 className="px-2 pt-8 text-3xl font-extrabold sm:text-4xl md:pt-4 md:text-5xl">
            Insanely Fast <span className="text-pink-400">Color</span> Palette
            Generator
          </h1>
          <p className="px-8 text-base text-gray-500 sm:text-lg md:text-xl">
            Instantly craft stunning color palettes or explore endless creative
            inspirations.
          </p>
          <Link href="/generate">
            <button className="mt-4 rounded-3xl border border-gray-600 bg-gray-700 px-6 py-2 text-lg font-semibold uppercase text-white shadow-lg transition duration-150 hover:scale-105 hover:bg-black sm:text-xl md:px-10 md:py-3">
              Generate Now
            </button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
