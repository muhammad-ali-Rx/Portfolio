import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { RiPhpFill } from "react-icons/ri";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud, DatabaseBackupIcon, DatabaseIcon, Spline, SplineIcon, Bot } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
} from "react-icons/fa";
import {
  SiMysql,
  SiRedis,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
  SiExpressvpn,
  SiVsco,
  SiCoursera,
  SiThreedotjs,
  SiAwsamplify,
} from "react-icons/si";
import { TbBrandAzure, TbBrandFramerMotion, TbBrandVscode } from "react-icons/tb";
import { BsEmojiExpressionless, BsFileEarmarkCode, BsFillEmojiExpressionlessFill, BsGithub, BsGrid1X2, BsTools } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";
import { TbBrandLaravel } from "react-icons/tb";
import { BiLogoGoogleCloud, BiLogoVisualStudio } from "react-icons/bi";
import { BsCursorFill } from "react-icons/bs";
import  gsap  from "@/assets/icone/logo.gif";



const SkillCard = ({ icon: Icon, title, skills, color }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setRotation({
      x: (y / rect.height) * 15, // vertical tilt
      y: -(x / rect.width) * 15, // horizontal tilt
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <Card
      className="group relative overflow-hidden bg-gray-900/80 border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transformStyle: "preserve-3d",
        willChange: "transform",
        transition: "transform 0.15s ease-out",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
      <CardContent className="p-6 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`p-3 rounded-xl bg-gray-800/50 ${color} transition-transform duration-300`}
          >
            <Icon className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="outline"
              className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
                {skill.icon}
              </span>
              <span className="font-medium">{skill.name}</span>
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "GSAP", icon: <img src={gsap} alt="GSAP" className="w-4 h-4" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "HTML5", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" /> },
        { name: "CSS3", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" /> },
        { name: "Framer Motion", icon: <TbBrandFramerMotion className="w-4 h-4 text-[#1572B6]" /> },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
        { name: "Express", icon: <SiExpress className="w-4 h-4 text-[#000000]" /> },
        { name: "PHP", icon: <RiPhpFill className="w-4 h-4 text-[#336791]" /> },
        { name: "Laravel", icon: <TbBrandLaravel className="w-4 h-4 text-[#FF2D20]" /> },
        { name: "REST APIs", icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" /> },
       
      ],
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      color: "text-purple-400",
      skills: [
        { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
        { name: "Responsive Design", icon: <Layout className="w-4 h-4 text-[#38B2AC]" /> },
      ],
    },
    {
      icon: BsTools,
      title: "Tools",
      color: "text-orange-400",
      skills: [
        { name: "VS Code", icon: <BiLogoVisualStudio className="w-4 h-4 text-[#1075e7]" /> },
        { name: "cursar", icon: <BsCursorFill className="w-4 h-4 text-[#585655]" /> },
        { name: "splineJs", icon: <SplineIcon className="w-4 h-4 text-[#F05032]" /> },
        { name: "threeJs", icon: <SiThreedotjs className="w-4 h-4 text-[#cabfbd]" /> },
        { name: "vite", icon: <SiVite className="w-4 h-4 text-[#c4fc7c]" /> },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-[#000000]" /> },
        { name: "chatGPT", icon: <Bot className="w-4 h-4 text-[#F05032]" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud",
      color: "text-orange-400",
      skills: [
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "GitHub", icon: <BsGithub className="w-4 h-4 text-[#F05032]" /> },
        { name: "AWS", icon: <SiAwsamplify className="w-4 h-4 text-[#FF9900]" /> },
        { name: "Azure", icon: <TbBrandAzure className="w-4 h-4 text-[#0078D4]" /> },
        { name: "Google Cloud", icon: <BiLogoGoogleCloud className="w-4 h-4 text-[#4285F4]" /> },
        

      ],
    },
    {
      icon: DatabaseIcon,
      title: "DataBase",
      color: "text-pink-400",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "Firebase", icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" /> },
        { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-[#4479A1]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
      ],
    },
    {
      icon: Paintbrush,
      title: "Creative Skills",
      color: "text-yellow-400",
      skills: [
        { name: "UI Animation", icon: <MdAnimation className="w-4 h-4 text-[#FF4081]" /> },
        { name: "SVG Animation", icon: <MdAnimation className="w-4 h-4 text-[#00C853]" /> },
        { name: "3D Modeling", icon: <Cpu className="w-4 h-4 text-[#7C4DFF]" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
