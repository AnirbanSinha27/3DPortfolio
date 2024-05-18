import {
    mvm,
    prag,
    meenaxi,
    soumya,
    suvodip,
    mobile,
    live,
    sih,
    backend,
    creator,
    web,
    research,
    coding,
    javascript,
    dishnary,
    html,
    css,
    java,
    python,
    cpp,
    mui,
    reactjs,
    wewatch,
    tailwind,
    portfolio,
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

  const educations=[
    {
      title:"CBSE X Board Examination",
      school_name:"Pragjyotish Sr. Sec. School, Guwahati",
      icon:prag,
      date:"May 2020",
      percentage:"97.0%",
      stream:"Science",
      link:"https://www.pragjyotishschool.in/",
    },
    {
      title:"CBSE XII Board Examination",
      school_name:"Maharishi Vidya Mandir, Guwahati",
      icon:mvm,
      stream:"Science",
      date:"June 2022",
      percentage:"95.4%",
      link:"https://mvmguwahati-4.org/",
    },
    {
      title:"Bachelor's of Computer Applications",
      school_name:"Amity University, Kolkata",
      icon:amity,
      date:"Sept 2022",
      percentage:"CGPA - 9.50",
      stream:"IT",
      link:"https://www.amity.edu/kolkata/",
    }
  ]
  
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
        "Anirban led the team in a great manner, a good team player.",
      name: "Suvodip Banjerjee",
      designation: "SIH member",
      company: "Team Aasmaan",
      image: suvodip,
    },
    {
      testimonial:
        "Anirban's projects are very eye catchy and creative, will definitely work hard for his clients.",
      name: "Meenaxi Sharma",
      designation: "Peer",
      company: "Amity University",
      image: meenaxi,
    },
    {
      testimonial:
        "Anirban is very hardworking and manages his time efficiently.",
      name: "Soumyadip Maity",
      designation: "Peer",
      company: "Amity University",
      image: soumya,
    },
  ];
  
  const projects = [
    {
      name: "WeWatch",
      description:
        "A YouTube clone web app with seamless dark/light mode switching, prioritizing user experience.",
      tags: [
        {
          name: "reactJs",
          color: "blue-text-gradient",
        },
        {
          name: "mui",
          color: "green-text-gradient",
        },
        {
          name: "rapidApi",
          color: "pink-text-gradient",
        },
      ],
      image: wewatch,
      icon:live,
      source_code_link: "https://github.com/AnirbanSinha27/WeWatchApp",
      live_link:"https://weewatchh.netlify.app",
    },
    {
      name: "3D Portfolio",
      description:
        "Web-based personal 3D portfolio with work experiences, testimonials and facility to directly send emails",
      tags: [
        {
          name: "reactJs",
          color: "blue-text-gradient",
        },
        {
          name: "threeJs",
          color: "green-text-gradient",
        },
        {
          name: "tailwindCss",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      icon:live,
      source_code_link: "https://github.com/AnirbanSinha27/3DPortfolio",
      live_link: "https://anirbansinha.netlify.app",
    },
    {
      name: "DishNary",
      description:
        "Group project of a native mobile app facilitating dish searches, displaying recipes and much more.",
      tags: [
        {
          name: "reactNative",
          color: "blue-text-gradient",
        },
        {
          name: "appwrite",
          color: "green-text-gradient",
        },
        {
          name: "tailwindCss",
          color: "pink-text-gradient",
        },
      ],
      image: dishnary,
      icon:live,
      source_code_link: "https://github.com/AnirbanSinha27/recepie",
      live_link:"#",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects,educations };