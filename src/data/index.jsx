import { SiDiscord, SiMongodb, SiNextdotjs, SiAliexpress, SiAdobephotoshop, SiCanva, SiAdobeillustrator, SiInstagram } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'
import { CiLinkedin } from 'react-icons/ci'
import {
   FaHtml5, FaCss3Alt, FaBootstrap,
  FaNodeJs, FaPhp, FaPython, FaFigma, FaJava
} from 'react-icons/fa'
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandReact, TbBrandVue, TbBrandMysql, TbBrandReactNative } from "react-icons/tb";
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import {
  profile2, profile3, profile4, profile5,
  amazon, facebook, google,
  linkedin, microsoft, netflix, paypal, samsung,
  skype, whatsapp,
} from '../assets/images'


export const menus = [
  { name: "Home" },
  { name: "About" },
  { name: "Education" },
  { name: "Skills" },
  { name: "Projects" },
  { name: "Clients" },
  { name: "Contact" },
];


export const partners = [
  {
    name: "Amazon",
    logo: amazon,
  },
  {
    name: "Facebook",
    logo: facebook,
  },
  {
    name: "Google",
    logo: google,
  },
  {
    name: "LinkedIn",
    logo: linkedin,
  },
  {
    name: "Microsoft",
    logo: microsoft,
  },
  {
    name: "Netflix",
    logo: netflix,
  },
  {
    name: "PayPal",
    logo: paypal,
  },
  {
    name: "Samsung",
    logo: samsung,
  },
  {
    name: "Skipe",
    logo: skype,
  },
  {
    name: "Whatsapp",
    logo: whatsapp,
  },
]


export const education = [
  {
    schoolName: "Rwanda Coding Academy",
    dateRange: "2023 - 2024",
    certification: "DevOps",
    description: "The best coding and programming school in Rwanda. ",
  },
  {
    schoolName: "Rwanda Coding Academy",
    dateRange: "2023 - 2024",
    certification: "Mobile Development",
    description: "The best coding and programming school in Rwanda.",
  },
  {
    schoolName: "Rwanda Coding Academy",
    dateRange: "2023 - 2024",
    certification: "Web Development",
    description: "The best coding and programming school in Rwanda.",
  },
  {
    schoolName: "Rwanda Coding Academy",
    dateRange: "2023 - 2024",
    certification: "Graphic Design",
    description: "The best coding and programming school in Rwanda.",
  },

]

export const skills = [
  {
    category: "UI/UX",
    data: [
      { skill: "Figma", progress: 90, icon: <FaFigma /> },
      { skill: "Photoshop", progress: 80, icon: <SiAdobephotoshop /> },
      { skill: "Canva", progress: 75, icon: <SiCanva /> },
      { skill: "Illustrator", progress: 80, icon: <SiAdobeillustrator /> },

    ]
  },
  {
    category: "Frontend Development",
    data: [
      { skill: "HTML", progress: 90, icon: <FaHtml5 /> },
      { skill: "CSS", progress: 90, icon: <FaCss3Alt /> },
      { skill: "JavaScript", progress: 90, icon: <RiJavascriptFill /> },
      { skill: "Tailwind", progress: 90, icon: <RiTailwindCssFill /> },
      { skill: "Bootstrap", progress: 90, icon: <FaBootstrap /> },
      { skill: "React", progress: 85, icon: <TbBrandReact /> },
      { skill: "Next Js", progress: 85, icon: <SiNextdotjs /> },
      { skill: "Vue", progress: 60, icon: <TbBrandVue /> },
      { skill: "React Native", progress: 50, icon: <TbBrandReactNative /> },

    ]
  },
  {
    category: "Backend Development",
    data: [
      { skill: "Node JS", progress: 90, icon: <FaNodeJs /> },
      { skill: "Express JS", progress: 90, icon: <SiAliexpress /> },
      { skill: "MongoDB", progress: 90, icon: <SiMongodb /> },
      { skill: "PHP", progress: 86, icon: <FaPhp /> },
      { skill: "Python", progress: 75, icon: <FaPython /> },
      { skill: "MySQL", progress: 90, icon: <TbBrandMysql /> },
      { skill: "Java", progress: 50, icon: <FaJava /> },

    ]
  },
]


export const projects = [
  {
    name: 'Restaurent website',
    description: `the best restaurant website you can ever visit on the internet.`,
    image: "/rest.png",
    url: '',
  },

  {
    name: 'lex website',
    description: `Grow your business. Experience real-time communication like never before.`,
    image: "/lex.png",
    url: '',
  },

  {
    name: 'Gemini Clone',
    description: `A gemini clone that uses google apis`,
    image: "https://i.gadgets360cdn.com/large/gemini_ai_google_1701928139717.jpg",
    url: '',
  },
  {
    name: 'company visitors management',
    description: `Revolutionize visitors management. Integrated with Php,javascript and css.`,
    image: "https://infostride.com/wp-content/uploads/2023/10/cost-to-create-a-marketlace-website.png?w=1024",
    url: 'https://github.com/leandre000/company_visitor_management',
  },
];


export const clients = [
  {
    image: profile2,
    name: ' Chance Regine',
    review: ` It was an absolute delight collaborating with Leandre. His exemplary professionalism and unwavering dedication led to remarkable outcomes that went beyond my expectations. I enthusiastically endorse his services.`
  },
  {
    image: profile3,
    name: 'Asimwe Landry',
    review: `Let me introduce this mans work, this professional  is a very talented one working with his is the best choice you can ever make.`
  },
  {
    image: profile4,
    name: 'Keza Kase',
    review: ` It was truly delightful to collaborate with Leandre. His unwavering professionalism and dedication yielded exceptional results that surpassed all my expectations. I wholeheartedly endorse his services and look forward to future collaborations.
    `
  },
  {
    image: profile5,
    name: 'Mpazimaka Miguel',
    review: ` 
    It was a pleasure collaborating with Leandre. His professionalism and dedication yielded exceptional results, surpassing all my expectations. I wholeheartedly endorse his services and look forward to future collaborations.`
  }

];


export const socialHandles = [
  {
    name: "Discord",
    icon: <SiDiscord />,
    link: "https://discord.com/users/leandre_000",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/leandre000",
  },
  {
    name: "LinkedIn",
    icon: <CiLinkedin />,
    link: "https://www.linkedin.com/in/shema-leandre-117317318/",
  },
  {
    name: "Instagram",
    icon: <SiInstagram />,
    link: "https://www.instagram.com/_leandre10_/",
  },
];


export const contactInfo = [
  {
    name: "Email",
    icon: <MdOutlineAlternateEmail />,
    value: "iamshemaleandre@gmail.com",
  },
  {
    name: "Phone",
    icon: <IoCallOutline />,
    value: "+250793373953",
  },
  {
    name: "Address",
    icon: <IoLocationOutline />,
    value: "Kigali, Rwanda",
  },
]

export const footer = [
  {
    group: "Hot Links",
    routes: [
      { name: "Home" },
      { name: "About" },
      { name: "Education" },
      { name: "Skills" },
      { name: "Projects" },
      { name: "Clients" },
      { name: "Contact" },
    ]
  },
  {
    group: "Others",
    routes: [
      { name: "Privacy Policy" },
      { name: "Terms and Conditions" },
      { name: "Cookie Policy" },
    ]
  },
  {
    group: "Contacts",
    routes: [
      {
        name: "iamshemaleandre@gmail.com",
        icon: <MdOutlineAlternateEmail />,
      },
      {
        name: "+250793373953",
        icon: <IoCallOutline />,
      },
      {
        name: "Kigali, Rwanda",
        icon: <IoLocationOutline />,
      },
    ]
  },
]