import { SiTailwindcss, SiGithub, SiReact, SiNextdotjs, SiTestinglibrary,SiRedis,SiMysql } from "react-icons/si";
import {BiLogoAws,BiLogoMongodb,BiLogoNodejs} from "react-icons/bi"
import {DiSass} from "react-icons/di"
import {GiArtificialHive} from "react-icons/gi"
export const cardContent = [
  {
    id: 0,
    title: "gamers gaming",
    description:
      "web application that combines e-commerce, Youtube, and social networking. ",
    imageUrl: "/1.png",
    href:"https://gamers-gaming.vercel.app",
    skills: [
      {
        icon: <SiNextdotjs size="40" />
      },
      {
        icon: <BiLogoAws size="40" />
      },
      {
        icon: <SiRedis size="40" />
      },
      {
        icon: <SiMysql size="40" />
      },
    ]
  },
  {
    id: 1,
    title: "Microsoft key market",
    description:
      "an E-commerce selling digital code of windows",
    imageUrl: "/2.png",
    href:"https://www.microsoftkeymarket.com/",
    skills: [
      {
        icon: <SiNextdotjs size="40" />
      },
      {
        icon: <BiLogoMongodb size="40" />
      },
      
    ]
  },
  {
    id: 2,
    title: "Airbnb_like",
    href:"https://adib-bnb.vercel.app/",
    github:"https://github.com/adibo2/Adib_bnb",
    description:
      "This is a description, sjdnfsdf idfs sdhfbsdf jds fjsd gf sjdgns",
    imageUrl: "/3.png",
    skills: [
      {
        icon: <SiReact size="40" />
      },
      {
        icon: <SiTailwindcss size="40" />
      },
      {
        icon: <BiLogoNodejs size="40" />
      },
    ]
  },
  {
    id: 3,
    title: "Houses",
    description:
      "Practicing html css",
    imageUrl: "4.png",
    href:"https://react-houses.vercel.app/",
    github:"https://github.com/adibo2/react_houses",
    skills: [
      {
        icon: <SiReact size="40" />
      },
      {
        icon: <DiSass size="40" />
      },
      
    ]
  },
  {
    id: 4,
    title: "Food_deliver",
    description:
      "use voice assistant to have food",
    imageUrl: "/5.png",
    href:"https://reactfoodapp-3dff8.web.app/",
    github:"https://github.com/adibo2/react_foodapp",
    skills: [
      {
        icon: <SiReact size="40" />
      },
      {
        icon: <DiSass size="40" />
      },
      {
        icon: <GiArtificialHive size="40" />
      },
    ]
  },
];
