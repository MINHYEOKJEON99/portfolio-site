import { create } from "zustand"

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  image: string
  link?: string
  github?: string
}

export interface Skill {
  name: string
  level: number
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string
}

interface PortfolioState {
  projects: Project[]
  skills: Skill[]
  experiences: Experience[]
  setProjects: (projects: Project[]) => void
  setSkills: (skills: Skill[]) => void
  setExperiences: (experiences: Experience[]) => void
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  projects: [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "최신 웹 기술을 활용한 반응형 전자상거래 플랫폼입니다. 사용자 경험을 최우선으로 설계했습니다.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
      image: "/modern-ecommerce-website.png",
    },
    {
      id: "2",
      title: "Task Management App",
      description: "직관적인 UI/UX를 갖춘 태스크 관리 애플리케이션입니다. 드래그 앤 드롭 기능을 지원합니다.",
      tags: ["React", "TypeScript", "Framer Motion"],
      image: "/task-management-dashboard.png",
    },
    {
      id: "3",
      title: "Weather Dashboard",
      description: "실시간 날씨 정보를 제공하는 대시보드입니다. 깔끔한 데이터 시각화가 특징입니다.",
      tags: ["Next.js", "Chart.js", "API Integration"],
      image: "/weather-dashboard-interface.png",
    },
  ],
  skills: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Zustand", level: 80 },
    { name: "JavaScript", level: 90 },
  ],
  experiences: [
    {
      id: "1",
      title: "Frontend Developer",
      company: "Tech Company",
      period: "2023 - Present",
      description: "웹 애플리케이션 개발 및 유지보수를 담당하고 있습니다. React와 Next.js를 주로 사용합니다.",
    },
    {
      id: "2",
      title: "Junior Developer",
      company: "Startup Inc.",
      period: "2021 - 2023",
      description: "다양한 프로젝트에 참여하며 프론트엔드 개발 경험을 쌓았습니다.",
    },
  ],
  setProjects: (projects) => set({ projects }),
  setSkills: (skills) => set({ skills }),
  setExperiences: (experiences) => set({ experiences }),
}))
