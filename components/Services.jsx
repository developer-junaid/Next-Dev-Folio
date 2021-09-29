import React from "react";

import { Card } from "./Card";

// Icons
import frontendImage from "../assets/images/frontend.svg";
import backendImage from "../assets/images/web-programming-white.svg";
import fullstackImage from "../assets/images/fullstack.svg";
import excelImage from "../assets/images/excel.svg";

export const Services = () => {
  return (
    <div className="w-full bg-gray-50">
      <h1 className="text-black font-medium text-center text-3xl mb-24">
        Services
      </h1>

      <div className="w-full h-auto">
        <Card
          title="Frontend Development"
          tags={[
            "ReactJs",
            "Typescript",
            "NextJs",
            "Gatsby",
            "HTML",
            "CSS",
            "Sass",
          ]}
          iconSrc={frontendImage}
        />
        <Card
          title="Backend Developement"
          tags={[
            "Node",
            "Serverless functions",
            "Express",
            "GraphQl",
            "MongoDB",
            "FaunaDB",
            "Firebase",
            "Stripe payments",
          ]}
          iconSrc={backendImage}
        />
        <Card
          title="FullStack Development"
          tags={["MERN Stack", "JAM Stack", "Serverless"]}
          iconSrc={fullstackImage}
        />
      </div>
    </div>
  );
};
