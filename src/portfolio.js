/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Manish Chandra",
  title: "Hi all, I'm Manish Chandra",
  subTitle: emoji(
    "Data Science graduate skilled in integrating digital marketing, web development, and email automation to create responsive, data-driven digital solutions focused on user experience."
  ),
  resumeLink:
    "https://drive.google.com/file/d/10Vo9DRDQ7PrM2hlpZdooO3oNWkC4M2dX/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};
// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/manishgatlao/",
  gmail: "manishchandra543@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Driving results as a program coordinator in web marketing, specializing in building and optimizing websites and campaigns for maximum digital impact.",
  skills: [
    emoji(
      "⚡ Build and optimize websites using HTML, CSS, JavaScript, and CMS platforms like WordPress and Drupal with a strong focus on UX, accessibility, and SEO."
    ),
    emoji("⚡ Automate multi-step email journeys using Salesforce Marketing Cloud, Journey Builder, and dynamic segmentation with data extensions."),
    emoji(
      "⚡ Design and manage digital assets from responsive email templates and campaign landing pages to banners and event signage."
    ),
    emoji(
      "⚡ Analyze and improve digital performance with tools like Google Analytics (GA4), enhancing load speed, engagement, and user experience."
    ),
    emoji(
      "⚡ Collaborate across teams to deliver pixel-perfect campaigns and maintain scalable frameworks for email, web, and marketing systems."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "WordPress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "Salesforce",
      fontAwesomeClassname: "fab fa-salesforce"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of the Cumberlands",
      logo: require("./assets/images/cumber_logo.png"),
      subHeader: "Master of Science in Data Science",
      duration: "January 2023 - May 2024",
      desc: "Worked on multiple data science projects involving machine learning, data analysis, and visualization, alongside coursework in Software Engineering, Web Security, and Operating Systems ...",
      descBullets: [
        "Developed and deployed machine learning models for real-world datasets, including projects on predictive analytics and classification.",
        "Built interactive data visualizations and dashboards to communicate insights and support data-driven decision making."
      ]
    },
    {
      schoolName: "SR Engineering College",
      logo: require("./assets/images/sr_logo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "September 2017 - April 2021",
      desc: "Took courses about Software Engineering, Web Designing, Operating Systems, ...",
      descBullets: [
        "Compleeted a course on Data Structures and Algorithms, semantically analyzing the time and space complexity of algorithms and implementing them in Java.",
        "Completed a course on Web Technologies, gaining hands-on experience in creating a web application using HTML, CSS, JavaScript, and Servlets.",]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "73%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Email Marketing Analyst",
      company: "Delphic Software Solutions",
      companylogo: require("./assets/images/delphic_logo.png"),
      date: "Feb 2023 - Present",
      desc: "At Delphic Software Solutions, I designed and maintained responsive web pages using HTML, CSS, and JavaScript—ensuring both ADA compliance and strong user experience. I built and launched dynamic, mobile-optimized emails in Salesforce Marketing Cloud and Mailchimp, customizing layouts and integrating data extensions for targeted delivery. I created multi-step journeys using Journey Builder to drive lifecycle engagement and led audits to improve SEO, page speed, and mobile responsiveness. I also developed campaign landing pages, tracked performance using GA4, and collaborated with design teams on banners, graphics, and signage. Additionally, I managed digital asset libraries, templates, and internal documentation to streamline content operations."
    },
    {
      role: "Marketing Web Assistant",
      company: "Rockline Solutions Pvt Ltd",
      companylogo: require("./assets/images/rockline_logo.png"),
      date: "June 2020 - August 2022",
      desc: "At Rockline Solutions, I managed WordPress content and regularly updated program landing pages, focusing on SEO optimization for academic campaigns. I enhanced user interaction by incorporating dynamic page sections and content toggles using JavaScript and CSS. I played a key role in email QA and testing for monthly newsletters and donor communications through Mailchimp. Beyond digital work, I designed print-ready posters, internal signage, and branded visuals for campus events. I also supported project coordination by tracking deadlines, managing stakeholder feedback, and handling revisions. Additionally, I provided CMS training and created clear technical documentation to guide staff on updates and asset management.",
      // descBullets: [
      //   "",
      //   ""
      // ]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Achievements, certifications, award letters, and some cool stuff I have done so far, with more to come.",

  achievementsCards: [
    {
      title: "AWS Certified Data Engineer - Associate",
      subtitle:
        "The AWS Certified Data Engineer – Associate certification validates expertise in designing, building, and managing data pipelines and analytics solutions on AWS, ensuring secure, scalable, and efficient data workflows.",
      image: require("./assets/images/aws_logo.png"),
      imageAlt: "AWS Certified Data Engineer - Associate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/0be94450-ddc5-4eb8-8eba-db1e41169eb4/public_url"
        },
        {
          name: "Award Letter",
          url: "https://www.credly.com/badges/0be94450-ddc5-4eb8-8eba-db1e41169eb4/public_url"
        }
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    // {
    //   title: "Spring and Hibernate",
    //   subtitle:
    //     "Gained immense knowledge on Spring and Hibernate frameworks, and developed web applications using Spring Boot, Spring MVC, Spring Security, and Hibernate.",
    //   image: require("./assets/images/spring_cert.png"),
    //   imageAlt: "Spring Boot Certificate Logo",
    //   footerLink: [
    //     {
    //       name: "Spring Boot Certification",
    //       url: "https://udemy-certificate.s3.amazonaws.com/image/UC-0fd093cd-f6b4-4860-bbad-94097df8df01.jpg"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss about a role or just want to say hi? My Inbox is open for all.",
  number: "+1-9376545397",
  email_address: "manishchandra543@gmail.com"
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  // bigProjects,
  achievementSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  isHireable,
  resumeSection
};
