"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useGlobalContext } from "@/components/context";
import { AiFillDelete, AiOutlineShareAlt } from "react-icons/ai";

const PaletteCard = () => {
  const { savedPalette, setSavedPalette } = useGlobalContext();
  const removeSavedColorPalette = (index) => {
    const savedColors = [...savedPalette];
    savedColors.splice(index, 1);
    setSavedPalette(savedColors);
    localStorage.setItem("paletteColors", JSON.stringify(savedColors));
    toast.success("Palette Deleted!");
  };
  const shareLink = (palette) => {
    if (navigator.share) {
      const message = "Check out this awesome color palette!";
      navigator
        .share({
          title: message,
          url: window.location.origin + "/palette/" + palette,
        })
        .then(() => toast.success("Share this awesome color palette!"))
        .catch((error) => toast.error("Something went wrong!"));
    }
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {savedPalette.length === 0 && (
        <p className="mt-20 text-center text-xl">No Saved Palette Found!</p>
      )}
      <div className="grid grid-cols-12 gap-5 p-10">
        {savedPalette.map((palette, index) => {
          const colors = palette.split("-");
          return (
            <div
              className="xs:col-span-12 col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3 2xl:col-span-2"
              key={index}
            >
              <div className="max-w-sm overflow-hidden rounded-lg shadow-lg">
                <Link href={`/palette/${palette}`}>
                  <div className="flex">
                    {colors.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className="h-[200px] w-20"
                        style={{ backgroundColor: `#${color}` }}
                      ></div>
                    ))}
                  </div>
                </Link>
                <div className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold">Palette {index + 1}</p>
                    <div className="flex gap-2">
                      <AiFillDelete
                        title="Delete"
                        className="cursor-pointer text-xl text-red-600 transition duration-150 hover:scale-110"
                        onClick={() => removeSavedColorPalette(index)}
                      />
                      <AiOutlineShareAlt
                        title="Share"
                        className="cursor-pointer text-xl transition duration-150 hover:scale-110"
                        onClick={() => shareLink(palette)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(PaletteCard), { ssr: false });
