"use client"

import { usePortfolioStore } from "@/lib/portfolio-store"

export function SkillsSection() {
  const skills = usePortfolioStore((state) => state.skills)

  return (
    <section className="py-20 px-4 bg-muted/30" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">제가 사용하는 기술 스택과 도구들입니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary transition-all duration-500" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
