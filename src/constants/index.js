import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  google,
  amazon,
  user,
  MR,
  face,
  fraud,
  logo2,
  sk,
  tf,
  dev,

} from "../assets";
import Flutter from "../assets/Flutter.webp";
import firebase1 from "../assets/firebase1.webp";
import sl from "../assets/sl.webp";
import spring from "../assets/spring.webp";
import cpp from "../assets/cpp.webp";
import yamaha from "../assets/yamaha.webp";
import cipher from "../assets/cipher.webp";
import app1 from "../assets/app1.png";
import app2 from "../assets/app2.png";
import app3 from "../assets/app3.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mobile Application Developer",
    icon: web,
  },
  {
    title: "Sotware Engineer",
    icon: mobile,
  },
  {
    title: "Flutter Developer",
    icon: backend,
  },
  {
    title: "Application Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Flutter",
    icon: Flutter,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Firebase",
    icon: firebase1,
  },
  {
    name: "sql",
    icon: sl,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name:"python",
    icon: logo2,
  },
  // {
  //   name: "sklearn",
  //   icon: sk,
  // },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "Yamaha Motor Solutions India Private Limited | Faridabad, Haryana",
    icon: yamaha,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Developed and customized Salesforce Lightning components (LWC and Aura) to enhance usability and streamline insurance policy management workflows.",
      "Built and maintained Apex classes, triggers, and batch processes to automate lead tracking, claim validation, and policy renewal operations.",
      "Integrated Salesforce with third-party REST APIs to synchronize policy, customer, and telematics data across internal and external systems.",
     "Designed custom objects, validation rules, and flows to ensure data integrity, reduce manual errors, and improve operational efficiency.",
    ],
  },
  {
    title: "Full Stack Mobile Application Developer",
    company_name: "CipherSchools | Zirakpur, Punjab",
    icon: cipher,
    iconBg: "#E6DEDD",
    date: "April 2023 - Jan 2024",
    points: [
"Spearheaded the entire mobile development lifecycle of the CipherSchools app using Flutter, from UI/UX design to feature implementation and Play Store and App Store deployment.",
"Built a full-featured learning platform including user onboarding, course browsing, enrollment, video playback, progress tracking, quizzes, and certificates.",
"Designed a modular architecture with reusable widgets and clean separation of concerns using BLoC for state management.",
"Conducted rigorous manual and device testing across Android/iOS platforms to ensure high performance, smooth navigation, and minimal crash rates.",
    ],
  },
  // {
  //   title: "Mobile Application Developer",
  //   company_name: "Telematics Project",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "June 2024 - Dec 2024",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Parul consistently delivered high-quality Salesforce solutions with exceptional attention to detail. His ability to quickly grasp complex business logic and implement scalable features made him a valuable asset to our team.",
    name: "Pratik Routray",
    designation: "Associate Software Engineer",
    company: "Yamaha Motor Solutions India Pvt. Ltd.",
    image: user,
  },
  {
    testimonial:
      "Working with Parul on the Krishi Kutumb app was an outstanding experience. His dedication, technical expertise in Flutter, and commitment to delivering a seamless user experience were truly impressive. He played a pivotal role in out team.",
    name: "Mohan Palliwal",
    designation: "Manager",
    company: "Krishi Kutumb",
    image: user,
  },
  {
    testimonial:
      "Parul’s work ethic stood out, characterized by focus, diligence, and an inquisitive approach. Actively engaged in his responsibilities, he played a pivotal role in contributing to the mobile application development efficiency of Cipher Schools.",
    name: "Anurag Mishra",
    designation: "Founder",
    company: "Cipher Schools",
    image: user,
  },
];


const projects = [
  {
    name: "Telematics Project",
    description:
      "Developed a Flutter-based mobile application that integrates with a Salesforce-based Policy Management System, enabling real-time policy tracking, user authentication, and insurance operations",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    
    ],
    image: app3,
    source_code_link: "https://github.com/parulgupta27",
  },
  {
    name: "CipherSchools App",
    description:
      "Spearheaded the entire mobile development lifecycle of the CipherSchools app using Flutter, from UI/UX design to feature implementation and Play Store and App Store deployment.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "BLoC",
        color: "pink-text-gradient",
      },
    

    ],
    image:app1,
    source_code_link: "https://github.com/parulgupta27",
  },
  {
    name: "Krishi Kutumb",
    description:
      "Built Krishi Kutumb, a cross-platform Flutter application aimed at supporting farmers through expert consultations, weather updates, and a collaborative agri-community network.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
     
    ],
    image: app2,
    source_code_link: "https://github.com/parulgupta27",
  },
];

export { services, technologies, experiences, testimonials, projects , dev};
