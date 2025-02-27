import Navbar from "@/components/navbar";
import PaletteCard from "@/components/palette-card";

export const metadata = {
  title: "Saved Palette.",
  description: "You know....Not Coolors...Not Saving Palettes.",
};

const savedPalettePage = () => {
  return (
    <>
      <Navbar />
      <PaletteCard />
    </>
  );
};

export default savedPalettePage;
