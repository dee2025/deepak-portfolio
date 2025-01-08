import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Deepak Singh",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Crafting digital experiences with code, creativity, and a passion for seamless design. Full-stack magic, I love building things and helping people. Very active on LinkedIn.",
  summary:
    "I'm a passionate full-stack developer with a strong foundation in building dynamic and responsive web applications. With expertise in Next.js, PHP, MySQL and modern frontend technologies like HTML, CSS, and JavaScript, I craft seamless digital experiences. I specialize in creating scalable, high-performance websites that blend functionality with aesthetic design. Whether it's backend logic or frontend elegance, I strive to deliver robust and user-centric solutions. Explore my portfolio to see how I can bring your ideas to life!",
  avatarUrl: "/dman.jpg",
  skills: [
    "Next.js",
    "Javascript",
    "Node.js",
    "Php",
    "MySQL",
    "JQuery",
    "Bootstrap",
    "TaiwindCSS",
    "Responsive Design",
    "problem solving",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kapeedsingh2001@gmail.com",
    tel: "+91 8112260346",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dee2025",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/deepak-singh-579462203/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@D-code.",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Phoenix Advanced Softwares Pvt. Ltd.",
      href: "https://atomic.finance",
      badges: [],
      location: "Jaipur, Sitapura",
      title: "Full-Stack Developer",
      logoUrl: "/phx.jpeg",
      start: "Mar 2023",
      end: "Current",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Aladinn Digital Solutions",
      badges: [],
      href: "https://shopify.com",
      location: "Jaipur, Civil Lines",
      title: "Nextjs Intern",
      logoUrl: "/alds.jpeg",
      start: "Nov 2022",
      end: "Mar 2023",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  education: [
    {
      school: "Arya Institute of Engineering and Technology",
      href: "https://www.aryainstitutejpr.com/",
      degree: "B.Tech in Computer Science",
      logoUrl: "/aiet.jpeg",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "CarNdrive",
      href: "https://www.carndrive.com/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Carndrive is a comprehensive car details website, fully managed by me on both the frontend and backend, including an admin panel. It is made for duabi and india.",
      technologies: [
        "Next.js",
        "Javascript",
        "MySQL",
        "TailwindCSS",
        "Redux",
        "Php",
        "JQuery",
        "Bootstrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://carndrive.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/carndrive.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "V3Cars",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "V3Cars is a PHP-based website offering detailed car specifications, prices, features, reviews, and comparisons, with recommendations on the best variants. Managed through an intuitive admin dashboard.",
      technologies: [
        "Php",
        "MySQL",
        "Html",
        "Css",
        "Bootstrap",
        "Jquery",
        "Javascript",
      ],
      links: [
        {
          type: "Website",
          href: "https://v3cars.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/v3cars.png",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
  hackathons: [
    // {
    //   title: "Hack Western 5",
    //   dates: "November 23rd - 25th, 2018",
    //   location: "London, Ontario",
    //   description:
    //     "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
    // {
    //   title: "Hack The North",
    //   dates: "September 14th - 16th, 2018",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mobile application which delivers university campus wide events in real time to all students.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
  ],
} as const;
