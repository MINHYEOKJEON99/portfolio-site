"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">Frontend Developer</h1>
            <p className="text-xl md:text-2xl text-muted-foreground">웹 경험을 만드는 개발자</p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            안녕하세요. 사용자 중심의 인터페이스를 설계하고 구현하는 프론트엔드 개발자입니다. 최신 웹 기술을 활용하여
            성능과 접근성을 모두 갖춘 애플리케이션을 만듭니다.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="gap-2">
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
