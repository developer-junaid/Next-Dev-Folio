import React from "react";

export const Heading = ({ text }) => {
  return (
    <h1 className="text-black border-l-4 pl-4 border-primary-900 mx-12 font-medium text-left text-4xl mb-24">
      {text}
    </h1>
  );
};
