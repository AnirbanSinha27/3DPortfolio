import {
    mobile,
    sih,
    backend,
    creator,
    web,
    research,
    coding,
    javascript,
    typescript,
    html,
    css,
    java,
    python,
    cpp,
    mui,
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
    amity,
  } from "../assets";
  
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
      title: "Web Development",
      icon: web,
    },
    {
      title: "React Js Development",
      icon: mobile,
    },
    {
      title: "Frontend Development",
      icon: backend,
    },
    {
      title: "Datastructures and Algorithms",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "MUI",
      icon: mui,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: cpp,
    },
  ];
  
  const experiences = [
    {
      title: "IT Club Member",
      company_name: "Amity University, Kolkata",
      icon: amity,
      iconBg: "#383E56",
      date: "Aug 2023 - Feb 2024",
      points: [
        "Conducted sessions on latest technologies, coding practices, and industry trends to enhance students' technical knowledge.",
        "Facilitated events to encourage problem-solving, teamwork, and innovation among peers.",       "Coordinated guest lectures and networking events with professionals to bridge the gap between academia and industry.",
        "Established study groups and mentorship programs to foster a collaborative learning environment within the university.",
      ],
    },
    {
      title: "SIH'23 Team Leader",
      company_name: "Team Aasmaan, Amity University",
      icon: sih,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Dec 2023",
      points: [
        "Guided my team to secure second place in our university's internal hackathon.",
        "Organized and delegated tasks effectively to ensure timely and efficient project completion.",
        "Fostered a collaborative environment, encouraging innovative problem-solving and idea-sharing.",
        "Articulated our project’s concept, development process, and impact clearly and convincingly to the judging panel.",
      ],
    },
    {
      title: "Research Paper Work",
      company_name: "IoT solutions for smart home",
      icon: research,
      iconBg: "#E6DEDD",
      date: "Nov 2023 - Mar 2024",
      points: [
        "Worked with the head of the department on a research paper focused on IoT solutions for smart homes.",
        "Analyzed existing studies and technologies to inform and support our research findings.",
        "Proposed and tested new IoT applications aimed at enhancing the functionality and efficiency of smart homes.",
        "Contributed to writing and editing the paper, which will be published in the prestigious Springer book series.",
      ],
    },
    {
      title: "Coding competitions, Hackathons",
      company_name: "TechTrix'24, Srijan'24",
      icon: coding,
      iconBg: "#E6DEDD",
      date: "Feb 2024 - Mar-24",
      points: [
        "Competed in coding tests and hackathons, including Techtrix 2024 at RCCIIT and Srijan 2024 at Jadavpur University.",
        "Demonstrated proficiency in problem-solving and coding under time constraints in both individual and team events.",
        " Worked effectively in teams, contributing to brainstorming sessions and joint problem-solving efforts.",
        "Earned recognition and accolades for outstanding performance and innovative solutions in various competitions.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };