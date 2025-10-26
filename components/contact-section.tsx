"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 px-4 bg-muted/30" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            프로젝트 협업이나 문의사항이 있으시면 언제든 연락주세요.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>아래 방법으로 연락하실 수 있습니다.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <span>your.email@example.com</span>
            </div>
            <div className="flex gap-3 pt-4">
              <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
