import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="We build custom, high-performance websites and web applications to enhance your online presence. Our solutions are designed for optimal user experience and functionality."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="System development"
        subTitle="We create custom software solutions to optimize and automate your business operations. Our services include system design, development, and integration to meet your unique needs."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Graphic Design"
        subTitle="**Graphic Design**

We craft visually compelling designs that communicate your brand’s message effectively. Our services include logo creation, marketing materials, and digital graphics to elevate your visual identity."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="Architect"
        subTitle="We design innovative and functional spaces tailored to your needs, from residential to commercial projects. Our services encompass architectural planning, design, and project management.."
      /> 
       <ServicesCard
      icons={<FaAppStoreIos />}
      title="System installation"
      subTitle="We provide seamless setup and configuration of software and hardware systems to ensure optimal performance. Our services include installation, integration, and system testing for a smooth operational experience."
    />

    <ServicesCard
      icons={<FaAppStoreIos />}
      title="Hardware Installation & maintainance"
      subTitle="We offer expert installation and ongoing support for hardware systems to ensure reliable performance. Our services include setup, troubleshooting, and regular maintenance to keep your equipment running smoothly."
    />
    </div>
  );
};

export default MyServices;
