import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="2021-2024"
          title="Web Developer"
          subTitle="Facebook Inc."
          des="We’ve developed a wide range of websites and web applications, from e-commerce platforms to corporate sites, using modern technologies to ensure responsive design and robust functionality."
        />
         <ResumeCard
          badge="2021-2024"
          title="System Developer"
          subTitle="Facebook Inc."
          des="We’ve developed a wide range of system, from e-commerce platforms to corporate system, using modern technologies to ensure responsive design and robust functionality."
        />
        <ResumeCard
          badge="2022 - 2042"
          title="Architect"
          subTitle="Google Inc."
          des="Our architectural experience spans residential and commercial projects, focusing on innovative design and functionality to create spaces that meet client needs and enhance user experience."
        />
        <ResumeCard
          badge="2021 - 2024"
          title="Graphic Desgining"
          subTitle="ReactBD.com."
          des="We’ve created impactful visual identities for brands, including logos, marketing materials, and digital graphics, helping businesses communicate effectively and stand out in their markets."
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2012 - 2014"
          title="Stefano Moshi Memorial University Collage"
          subTitle="Tanzania"
          des="is a premier institution in Tanzania offering specialized programs in business, technology, and more. They prepare students for successful careers with practical, industry-focused education and training."
        />
       
       
      </div>
    </div>
  );
};

export default Education;
