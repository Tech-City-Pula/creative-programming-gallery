"use client";
import Image from "next/image";

const IMAGE_COUNT = 26;
export const ImageGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
      {Array.from({ length: IMAGE_COUNT }).map((_, i) => (
        <div className="relative w-full aspect-square " key={i}>
          <Image fill src={`/gallery/${i + 1}.png`} alt="Gallery image" />
        </div>
      ))}
    </div>
  );
};
