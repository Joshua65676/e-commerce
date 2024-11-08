"use client";
import React, { useState } from "react";
import { ThumbnailImgs } from "@/constants";
import Image from "next/image";

const Images: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(
    ThumbnailImgs[0].productImg
  );
  return (
    <main className="">
      <div className="flex flex-col gap-5">
        <div className="-mt-5">
          <Image
            src={selectedImage}
            alt="Selected"
            className="rounded-xl"
          />
        </div>
        {/* Thumbnails */}
        <div className="flex flex-row gap-5">
          {ThumbnailImgs.map(({ id, thumbnailImg, productImg }) => (
            <button key={id} onClick={() => setSelectedImage(productImg)}>
              <div className="relative">
                <Image
                  src={thumbnailImg}
                  alt={`Thumbnail ${id}`}
                  className={`rounded-xl transition-all ${
                    selectedImage === productImg
                      ? "border-Orange border-2 opacity-60 bg-white transition-opacity inset-0"
                      : "border-transparent"
                  }`}
                />
                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-60 rounded-lg transition-opacity duration-300"></div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Images;
