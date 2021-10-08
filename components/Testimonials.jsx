import React from "react";

import { Card } from "./Card";

// Icons
import frontendImage from "../assets/images/frontend.svg";
import backendImage from "../assets/images/web-programming-white.svg";
import fullstackImage from "../assets/images/fullstack.svg";
import excelImage from "../assets/images/excel.svg";
import { Heading } from "./Heading";

export const Testimonials = () => {
  return (
    <div className="section">
      <Heading text="Testimonials" />
      <div className="w-full h-auto">
        <Card
          title="FullStack Development"
          tags={["MERN Stack", "JAM Stack", "Serverless"]}
          iconSrc={fullstackImage}
        />
      </div>
    </div>
  );
};
