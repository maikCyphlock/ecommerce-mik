import React from "react";

export const CtaGallery = () => {
  return (
    <div className="grid grid-rows-3 grid-cols-2 gap-4 h-2/5">
      <div className="bg-white rounded-xl overflow-hidden border border-solid border-[#00000033] row-span-2 ">
        <img
          className="object-cover w-full h-full"
          alt="Image"
          src="https://cdn.shopify.com/s/files/1/0850/7195/4218/files/90_1011662-1A00540_1B000_20_Medusa95FlutedMidiDress-Clothing-Versace-online-store_2_3.jpg?v=1703715427"
        />
      </div>
      <div className="bg-white rounded-xl overflow-hidden border border-solid border-[#00000033] row-span-3">
        <img
          className="object-cover w-full h-full"
          alt="Image"
          src="https://cdn.shopify.com/s/files/1/0850/7195/4218/files/90_1011662-1A00540_1B000_18_Medusa95FlutedMidiDress-Clothing-Versace-online-store_2_3.jpg?v=1703715426"
        />
      </div>
      <div className=" bg-white rounded-xl overflow-hidden border border-solid border-[#00000033] ">
        <img
          className="object-cover w-full h-full"
          alt="Image"
          src="https://cdn.shopify.com/s/files/1/0850/7195/4218/files/90_1011662-1A00540_1B000_16_Medusa95FlutedMidiDress-Clothing-Versace-online-store_2_3.jpg?v=1703715426"
        />
      </div>
    </div>
  );
};
