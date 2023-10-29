import {
    Backend_skill,
    Frontend_skill,
    Full_stack,
    Other_skill,
    Skill_data,
  } from "./../../constants";
  import React from "react";
  import SkillDataProvider from "./SkillDataProvider";
  import SkillText from "./SkillText";
import { Avatar } from "./Avatar";
  
  const Skills = () => {
    return (
      <section
        id="skills"
        className="flex h-full    flex-col  items-center justify-center gap-3 relative overflow-hidden  "
        // style={{ transform: "scale(0.9)" }}
      >
          <Avatar />

        <SkillText />
  
        <div className="flex  flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Skill_data.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
  
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Frontend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Full_stack.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>  
        <div className="w-screen h-screen absolute">
          <div className="w-screen h-screen z-[-10] opacity-30 absolute flex items-center justify-center ">
            <video
              className="w-screen h-screen"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  