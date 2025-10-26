"use client"

import { usePortfolioStore } from "@/lib/portfolio-store"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ExperienceSection() {
  const experiences = usePortfolioStore((state) => state.experiences)

  return (
    <section className="py-20 px-4" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">제 경력과 경험입니다.</p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.id}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-base">{exp.company}</CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
