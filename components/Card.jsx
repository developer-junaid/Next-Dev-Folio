import React from "react";

// Next
import Image from "next/image";

export const Card = ({ tags, title, subtitle, iconSrc }) => {
  return (
    <div className="max-w-sm mx-auto my-12 pt-16 pb-4 border-b-2 border-primary-500 text-center relative bg-white rounded shadow-lg">
      <div className="w-20 h-20 p-5 inset-x-36 text-center flex items-center justify-center -inset-y-8 z-10 rounded-3xl absolute border bg-primary-500">
        <Image className="w-full object-cover" src={iconSrc} alt={title} />
      </div>
      <div className="px-6 py-4">
        <div className="font-normal text-xl mb-2">{title}</div>
        {subtitle && <p className="text-gray-700 text-base">{subtitle}</p>}
      </div>
      <div className="px-6 pt-0 pb-2">
        {tags?.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 tracking-widest rounded-full px-3 py-1 text-xs font-normal text-gray-700 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
