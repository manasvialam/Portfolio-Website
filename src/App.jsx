import React, { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Award,
  Briefcase,
  Layers,
  GraduationCap,
  Sparkles,
  Zap,
} from "lucide-react";

const App = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState({});


  const allSkills = [
    // Programming Languages
    { name: "Python", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C++", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "R", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
    { name: "SQL", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "JavaScript", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },

    // Frontend & Web
    { name: "Angular", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "React", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "HTML", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Flask", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "FastAPI", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },

    // Machine Learning & Data Science
    { name: "Numpy", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "Pandas", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "TensorFlow", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "Keras", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
    { name: "Sklearn", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "OpenCV", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "Matplotlib", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
    { name: "Seaborn", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/seaborn/seaborn-original.svg" },
    { name: "NLTK", logoUrl: "https://placehold.co/40x40/4096c4/FFFFFF?text=NLTK" },
    { name: "Langchain", logoUrl: "https://placehold.co/40x40/36AB3D/FFFFFF?text=LC" },

    // Databases & Big Data
    { name: "PostgreSQL", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "ChromaDB", logoUrl: "https://placehold.co/40x40/3E8652/FFFFFF?text=CDB" },
    { name: "Hadoop", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg" },
    { name: "Tableau", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg" },

    // DevOps & MLOps
    { name: "Docker", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
    { name: "Git", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Bitbucket", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
    { name: "DVC", logoUrl: "https://placehold.co/40x40/017373/FFFFFF?text=DVC" },
    { name: "MLFlow", logoUrl: "https://placehold.co/40x40/1B98E0/FFFFFF?text=MLF" },
    { name: "Insomnia", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/insomnia/insomnia-original.svg" },
  ];
  
  const education = [
    {
      degree: "Ph.D. in Computer Science",
      institution: "State University of Technology",
      year: "2020 - 2024",
      details: "Specialized in AI Ethics and Large Language Models.",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      degree: "M.S. in Software Engineering",
      institution: "Metropolitan Institute of Science",
      year: "2018 - 2020",
      details: "Thesis on scalable database architecture.",
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ];

  const projects = [
    {
      title: "Predictive Modeling Platform",
      description: "Developed a platform using Python and Flask to deploy various machine learning models with real-time feedback.",
      tags: ["Python", "Flask", "ML", "Deployment"],
      link: "#",
    },
    {
      title: "Decentralized Voting System",
      description: "Implemented a secure, blockchain-based voting system prototype using Solidity and React.",
      tags: ["Blockchain", "Solidity", "React", "Security"],
      link: "#",
    },
  ];

  const achievements = [
    "Recipient of the National Research Fellowship (2024).",
    "Led a team of 5 engineers to successfully launch a major product feature.",
    "Mentored junior researchers on effective data visualization techniques.",
    "Published 4 papers in top-tier conferences.",
  ];

  const certifications = [
    { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2023" },
    { name: "TensorFlow Developer Certificate", issuer: "Google", year: "2022" },
  ];

  const publications = [
    {
      title: "Automated, Deep Learning-Enabled Immunoassay Microfluidic Cartridge for Viral Pathogen Detection",
      authors: "Joseph Michael Hardie, Sungwan Kim, Zehua Yin, et al.",
      venue: "Advanced Materials Technologies",
      year: "2025",
      description:
        "We present VISTA, a low-cost, electricity-free microfluidic cartridge paired with a deep learning-enabled smartphone app for automated ELISA diagnostics. Powered by an adversarial neural network...",
      tags: ["AI", "Microfluidics", "Diagnostics"],
      link: "#",
      imageUrl: "https://placehold.co/200x100/D3E0FB/1E40AF?text=AI+Cartridge", 
    },
    {
      title: "Lorem Ipsum Research Study on AI",
      authors: "John Doe, Jane Smith, et al.",
      venue: "Journal of Advanced AI Research",
      year: "2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam, consectetur adipiscing elit.",
      tags: ["AI", "Research", "Deep Learning"],
      link: "#",
      imageUrl: "https://placehold.co/200x100/D3E0FB/1E40AF?text=AI+Research",
    },
  ];

  const experiences = [
    {
      title: "Lorem Ipsum Specialist",
      organization: "Dolor Sit Amet Institute",
      year: "2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <Award className="w-5 h-5" />,
      logoUrl: "https://placehold.co/30x30/FFFFFF/1D4ED8?text=DI",
    },
    {
      title: "Consectetur Adipiscing Intern",
      organization: "Elit Research Center",
      year: "2023",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      icon: <Briefcase className="w-5 h-5" />,
      logoUrl: "https://placehold.co/30x30/FFFFFF/1D4ED8?text=RC",
    },
  ];


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;

          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [id]: true }));
          }

          if (entry.intersectionRatio > 0.3) {
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50% 0px" }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const NavLink = ({ href, children }) => {
    const sectionId = href.substring(1);
    const isActive = activeSection === sectionId;
    return (
      <a
        href={href}
        className={`text-xs font-medium transition-all duration-200 
          ${
            isActive
              ? "text-blue-700 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-300"
          }
          py-1 whitespace-nowrap
        `}
        onClick={() => setActiveSection(sectionId)}
      >
        {children}
      </a>
    );
  };

  const getSectionClass = (id) =>
    `py-20 px-4 transition-all duration-1000 ease-out 
    ${
      isVisible[id] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`;
    
    // Helper component for content cards
    const Card = ({ title, children, className = "" }) => (
      <div className={`bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-xl border border-blue-100 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 ${className}`}>
        {title && <h3 className="text-lg font-bold text-gray-800 mb-3">{title}</h3>}
        {children}
      </div>
    );

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-blue-50 via-sky-50 to-white">
      {/* Navigation Bar - FIXED: Hidden on mobile, visible on md: and above */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-md hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-xl font-extrabold text-gray-800 tracking-tight md:mb-0">
            Manasvi Alam
          </h1>
          <div className="flex gap-4 overflow-x-auto py-1 md:py-0 justify-center items-center">
            <NavLink href="#hero">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#publications">Publications</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#achievements">Achievements</NavLink>
            <NavLink href="#certifications">Certifications</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {/* Adjusted pt-28 to pt-16 since the nav bar is now hidden on mobile */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 pt-16 md:pt-16"
      >
        <div className="max-w-5xl w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text Content - left */}
            <div className="order-1 text-center md:text-left">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 
                bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent"
              >
                Manasvi Alam
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-3 font-light">
              Donec porttitor eros 
              </p>
              <p className="text-md text-gray-600 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                risus magna, viverra a tincidunt vel, congue at sapien.
                Suspendisse potenti. Nulla facilisi. Donec porttitor eros quis
                justo vulputate, nec ultricies urna gravida.
              </p>
              <div className="flex gap-3 justify-center md:justify-start">
                <a
                  href="#"
                  target="_blank"
                  className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110 text-gray-700 hover:text-blue-600"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110 text-gray-700 hover:text-blue-600"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110 text-gray-700 hover:text-blue-600"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Photo - right */}
            <div className="order-2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 rounded-3xl blur-md opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden bg-white shadow-2xl">
                  <img
                    src="https://placehold.co/400x400/2563EB/FFFFFF?text=Manasvi Alam"
                    alt="Profile"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={getSectionClass("about")}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            About Me
          </h2>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-2xl border border-blue-100 hover:shadow-3xl transition-all duration-500">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              risus magna, viverra a tincidunt vel, congue at sapien.
              Suspendisse potenti. Nulla facilisi. Donec porttitor eros quis
              justo vulputate, nec ultricies urna gravida.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Quisque vel odio eget nunc placerat posuere. Maecenas aliquet orci
              ut ligula lacinia, vel pellentesque augue cursus. Aliquam erat
              volutpat. Curabitur tincidunt nisl a risus pharetra, in dapibus
              sapien bibendum.
            </p>
          </div>
        </div>
      </section>
      
      {/* Experience Section - IMPROVED MOBILE TIMELINE */}
      <section id="experience" className={getSectionClass("experience")}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Research Experience
          </h2>
          <div className="space-y-6 relative">
            {/* Timeline Line: Adjusted left-alignment for mobile/md */}
            <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-blue-400 transform md:-translate-x-1/2"></div>

            {experiences.map((exp, idx) => (
              <div
                key={idx}
                // Force left alignment on mobile, only alternate on medium screens
                className={`flex justify-start ${ 
                  idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
                } relative`}
              >
                <div
                  className={`w-full md:w-1/2 p-3 ${
                    idx % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  } rounded-xl`}
                >
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-xl border border-blue-100 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 hover:scale-[1.02] transform origin-center">
                    {/* Circle Icon: Adjusted position to match left-aligned line on mobile */}
                    <div
                      className={`absolute top-0 transform -translate-y-1/2 
                      left-[14px] md:left-1/2 md:translate-x-[-15px] 
                      p-1.5 rounded-full bg-blue-600 text-white ring-6 ring-blue-50 z-10`}
                    >
                      {exp.icon}
                    </div>

                    <p className="text-xs text-gray-500 mb-1 font-semibold pt-3">
                      {exp.year}
                    </p>
                    <div className="flex items-center gap-2 mb-1">
                        {/* Company Logo Space */}
                        {exp.logoUrl && (
                            <img
                                src={exp.logoUrl}
                                alt={`${exp.organization} Logo`}
                                className="w-6 h-6 rounded-md shadow-sm border border-gray-200"
                            />
                        )}
                        <h3 className="text-lg font-bold text-gray-800">
                            {exp.title}
                        </h3>
                    </div>
                    <p className="text-blue-600 text-sm font-medium mb-2">
                      {exp.organization}
                    </p>
                    <p className="text-gray-700 text-sm leading-normal">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - FIXED: Icons stay in full color */}
      <section id="skills" className={getSectionClass("skills")}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Technical Skills
          </h2>
          <Card className="p-8">
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6 justify-center">
              {allSkills.map((skill, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col items-center justify-start h-20 w-16 group hover:scale-105 transition-transform duration-300 p-1"
                  title={skill.name}
                >
                  <img
                    src={skill.logoUrl}
                    alt={`${skill.name} Logo`}
                    // Removed grayscale and filter classes to keep icons colorful
                    className="h-10 w-10 object-contain mb-1 transition-all duration-300" 
                  />
                  <p className="text-xs font-medium text-gray-600 group-hover:text-blue-700 text-center leading-tight">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
      
      {/* Education Section - IMPROVED MOBILE TIMELINE */}
      <section id="education" className={getSectionClass("education")}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Education
          </h2>
          <div className="space-y-6 relative">
            {/* Timeline Line: Adjusted left-alignment for mobile/md */}
            <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-blue-400 transform md:-translate-x-1/2"></div>
            
            {education.map((edu, idx) => (
               <div
                key={idx}
                // Force left alignment on mobile, only alternate on medium screens
                className={`flex justify-start ${
                  idx % 2 !== 0 ? "md:justify-start" : "md:justify-end"
                } relative`}
              >
                <div
                  className={`w-full md:w-1/2 p-3 ${
                    idx % 2 !== 0 ? "md:pr-8" : "md:pl-8"
                  } rounded-xl`}
                >
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-xl border border-blue-100 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 hover:scale-[1.02] transform origin-center">
                    {/* Circle Icon: Adjusted position to match left-aligned line on mobile */}
                    <div
                      className={`absolute top-0 transform -translate-y-1/2 
                        left-[14px] md:left-1/2 md:translate-x-[-15px]
                        p-1.5 rounded-full bg-blue-600 text-white ring-6 ring-blue-50 z-10`}
                    >
                      {edu.icon}
                    </div>

                    <p className="text-xs text-gray-500 mb-1 font-semibold pt-3">
                      {edu.year}
                    </p>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 text-sm font-medium mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-gray-700 text-sm leading-normal">
                      {edu.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Publications Section - IMPROVED MOBILE STACKING AND IMAGE SIZING */}
      <section id="publications" className={getSectionClass("publications")}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Recent Publications
          </h2>
          <div className="space-y-6">
            {publications.map((pub, idx) => (
              <div
                key={idx}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 shadow-xl border border-blue-100 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-0.5"
              >
                {/* Responsive Flex container: stacks vertically on mobile (flex-col), side-by-side on md: (md:flex-row) */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-5">
                  
                  {/* Publication Image/Cover */}
                  {pub.imageUrl && (
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" 
                       // Responsive image sizing
                       className="flex-shrink-0 mx-auto md:mx-0 w-full sm:w-64 md:w-40 h-20 md:h-20"
                    >
                      <img
                        src={pub.imageUrl}
                        alt={`${pub.title} Cover`}
                        className="w-full h-full object-cover rounded-md shadow-lg border border-gray-200" 
                      />
                    </a>
                  )}

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-gray-800 mb-1 leading-tight">
                        {pub.title}
                      </h3>
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors self-start shadow-sm ml-4 flex-shrink-0"
                        title="View Publication"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    
                    <p className="text-xs text-gray-600 mb-1 italic">
                      {pub.authors}
                    </p>
                    <p className="text-sm font-bold text-blue-600 mb-2">
                      {pub.venue}, {pub.year}
                    </p>
                    <p className="text-sm text-gray-700 leading-normal mb-3 line-clamp-3">
                      {pub.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {pub.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={getSectionClass("projects")}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Key Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <Card key={idx} className="hover:scale-[1.01] transform origin-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 leading-normal mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Leadership Section */}
      <section id="achievements" className={getSectionClass("achievements")}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Achievements & Leadership
          </h2>
          <Card className="p-8">
            <ul className="space-y-3 list-none p-0">
              {achievements.map((item, idx) => (
                <li key={idx} className="flex items-start text-md text-gray-700">
                  <Sparkles className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={getSectionClass("certifications")}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <Card key={idx} className="flex items-start">
                <Zap className="w-5 h-5 text-blue-600 mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {cert.issuer} - {cert.year}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className={getSectionClass("contact")}>
        <div className="max-w-3xl mx-auto text-center bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-sky-100">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Get In Touch
          </h2>
          <p className="text-md text-gray-600 mb-8">
            Interested in collaboration or have questions about my research?
            Feel free to reach out—I'd love to chat!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:your.email@example.com"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm"
              // Ensure href has a valid email address
            >
              <Mail className="w-4 h-4 inline mr-2" /> Send Email
            </a>
            <a
              // REPLACE '#' with the actual URL to your PDF/CV file
              href="/path/to/your/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white text-gray-700 rounded-full font-semibold shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:scale-105 text-sm"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-blue-200 bg-white/70">
        <div className="max-w-5xl mx-auto text-center text-xs text-gray-600">
          <p className="font-medium">
            © 2025 Manasvi Alam.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;