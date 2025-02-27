"use client";
import React, { useState, useEffect, Fragment } from "react";
import Navbar from "@/components/navbar";
import toast, { Toaster } from "react-hot-toast";
import { FiCopy, FiLock, FiUnlock, FiShare2 } from "react-icons/fi";
import { useGlobalContext } from "@/components/context";

const Page = ({ params }) => {
  const unwrappedParams = React.use(params);
  const colorslug = unwrappedParams.colorslug;
  const colorSlugArray = colorslug.split("-");
  const [colors, setcolors] = useState(colorSlugArray);
  const [lockedIndices, setLockedIndices] = useState([]);
  const { windowSize, savedPalette, setSavedPalette } = useGlobalContext();
  const width = windowSize.width;

  const generateRandomColorString = () => {
    let s = "";
    for (let i = 0; i < 5; i++) {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      s += randomColor + "-";
    }
    s = s.substring(0, s.length - 1);
    return s;
  };

  const generateOnButton = () => {
    toast.dismiss();
    if (lockedIndices.length == 5) return;
    const newcolors = generateRandomColorString().split("-");
    if (lockedIndices.length > 0) {
      lockedIndices.forEach((index) => {
        newcolors[index] = colors[index];
      });
    }
    setcolors(newcolors);
    history.pushState(
      {},
      null,
      window.location.href.split("/")[0] + "/palette/" + newcolors.join("-"),
    );
  };

  useEffect(() => {
    const generateOnSpace = function (ev) {
      const code = ev.keyCode;
      if (code === 32) {
        ev.preventDefault();
        toast.dismiss();
        if (lockedIndices.length == 5) return;
        const newcolors = generateRandomColorString().split("-");
        if (lockedIndices.length > 0) {
          lockedIndices.forEach((index) => {
            newcolors[index] = colors[index];
          });
        }
        setcolors(newcolors);
        history.pushState(
          {},
          null,
          window.location.href.split("/")[0] +
            "/palette/" +
            newcolors.join("-"),
        );
      }
    };

    document.addEventListener("keydown", generateOnSpace);
    document.title = "Not Coolors Palette";
    setSavedPalette(savedPalette);
    return () => {
      document.removeEventListener("keydown", generateOnSpace);
    };
  }, [colors, setSavedPalette, savedPalette, lockedIndices]);

  const shareLink = () => {
    if (navigator.share) {
      const message = "Check out this awesome color palette!";
      navigator
        .share({
          title: message,
          url: window.location.href,
        })
        .then(() => toast.success("Share this awesome color palette!"))
        .catch((error) => toast.error("Something went wrong!"));
    }
  };

  const saveColorPalette = () => {
    const paletteColorsString = colors.join("-");

    if (typeof window !== "undefined") {
      const existingPalette = localStorage.getItem("paletteColors");
      if (existingPalette) {
        const palette = JSON.parse(existingPalette);
        if (!palette.includes(paletteColorsString)) {
          const newColorPalette = [...palette, paletteColorsString];
          localStorage.setItem(
            "paletteColors",
            JSON.stringify(newColorPalette),
          );
          setSavedPalette(newColorPalette);
          toast.success("Palette Saved!");
        } else {
          toast.error("Palette Already Exist!");
        }
      } else {
        const newColorPalette = [paletteColorsString];
        localStorage.setItem("paletteColors", JSON.stringify(newColorPalette));
        setSavedPalette(newColorPalette);
        toast.success("Palette Saved!");
      }
    }
  };

  const lockColorPalette = (index) => {
    const newLockedIndices = [...lockedIndices, index];
    setLockedIndices(newLockedIndices);
    const colorLockedColorName = colors[index];
    toast.success(`Locked #${colorLockedColorName}`);
  };

  const unLockColorPalette = (index) => {
    const updatedLockedIndices = [...lockedIndices];
    const indexOf = updatedLockedIndices.indexOf(index);
    updatedLockedIndices.splice(indexOf, 1);
    setLockedIndices(updatedLockedIndices);
    const colorUnlocked = colors[index];
    toast.success(`Unlocked #${colorUnlocked}`);
  };

  const isTooDark = (hexcolor) => {
    const rgb = parseInt(hexcolor, 16);
    var r = (rgb >> 16) & 0xff;
    var g = (rgb >> 8) & 0xff;
    var b = (rgb >> 0) & 0xff;
    const luma = (r + g + b) / 3;
    return luma < 128 ? "text-white" : "text-black";
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar generateOnButton={generateOnButton} />
      <div className="h-[calc(100vh-72px)] w-full">
        <div className={`grid h-full md:grid-flow-col`}>
          {colors.map((colorHex, index) => (
            <Fragment key={index}>
              <div className="group relative">
                <div
                  className="h-full w-full transition delay-150 ease-in-out"
                  style={{ backgroundColor: `#${colorHex}` }}
                ></div>
                <div className="absolute bottom-40 w-full opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex flex-col items-center gap-6">
                    <FiCopy
                      className={`${isTooDark(
                        colorHex,
                      )} delay-50 cursor-pointer text-2xl transition ease-in-out hover:scale-110 active:scale-90`}
                      onClick={() => {
                        navigator.clipboard
                          .writeText(`#${colorHex}`)
                          .then(toast.success(`#${colorHex} Copied!`));
                      }}
                    />
                    <FiShare2
                      className={`${isTooDark(
                        colorHex,
                      )} cursor-pointer text-2xl hover:scale-110`}
                      onClick={() => shareLink()}
                    />
                    {lockedIndices.includes(index) ? (
                      <FiLock
                        className="cursor-pointer text-2xl text-[#00F] hover:scale-110"
                        onClick={() => unLockColorPalette(index)}
                      />
                    ) : (
                      <FiUnlock
                        className={`${isTooDark(
                          colorHex,
                        )} cursor-pointer text-2xl hover:scale-110`}
                        onClick={() => lockColorPalette(index)}
                      />
                    )}
                  </div>
                </div>
                <div className="absolute bottom-20 left-0 right-0">
                  <p
                    className={`text-center text-2xl font-medium uppercase ${isTooDark(
                      colorHex,
                    )}`}
                  >
                    #{colorHex}
                  </p>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
