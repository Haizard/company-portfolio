import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="singidatrainingcenter.com"
            category="Website"
            image={workImgThree}
          />
          <ProjectsCard
            title="https://makoro-safari-pineaple-builders.netlify.app"
            category="website"
            image={workImgOne}
          />
          <ProjectsCard
            title="https://misapeblogger.netlify.app"
            category="website"
            image={workImgTwo}
          />
          <ProjectsCard
            title="https://first-tech-solution.netlify.app/"
            category="Website"
            image={workImgFive}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="https://ecommerce-derivering-3.onrender.com/"
            category="E-commerce"
            image={workImgFour}
          />
          <ProjectsCard
            title="Grapic Design"
            category="Design"
            image={workImgSix}
          />
          <ProjectsCard
            title="Ideas & Blog"
            category="Website"
            image={workImgEight}
          />
          <ProjectsCard
            title="ZOSS Logo"
            category="Logo"
            image={workImgSeven}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
