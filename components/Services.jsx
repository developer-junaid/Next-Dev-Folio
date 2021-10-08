import React from "react";

import { Card } from "./Card";

// Icons
import frontendImage from "../assets/images/frontend.svg";
import backendImage from "../assets/images/web-programming.svg";
import fullstackImage from "../assets/images/fullstack.svg";
import excelImage from "../assets/images/excel.svg";
import { Heading } from "./Heading";

export const Services = () => {
  return (
    <div className="section">
      <Heading text="Services" />
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
