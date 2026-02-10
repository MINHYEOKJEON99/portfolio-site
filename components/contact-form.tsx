"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, CheckCircle, XCircle } from "lucide-react";

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactForm({ open, onOpenChange }: ContactFormProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          title: `${name}님의 메시지`,
          name: name,
          email: contact,
          message: `보내는 사람: ${name}\n연락처: ${contact}\n\n메시지 내용:\n${message}`,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      setName("");
      setContact("");
      setMessage("");

      setTimeout(() => {
        onOpenChange(false);
        setStatus("idle");
      }, 2000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-zinc-950 border-zinc-800">
        <DialogTitle className="sr-only">연락하기</DialogTitle>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
          <Mail className="h-4 w-4" />
          <span>메시지는</span>
          <a href="mailto:mari394337@gmail.com" className="text-indigo-400 hover:underline">
            mari394337@gmail.com
          </a>
          <span>으로 전송됩니다.</span>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-8 gap-3">
            <CheckCircle className="h-12 w-12 text-green-500" />
            <p className="text-green-500 font-medium">메시지가 전송되었습니다!</p>
          </div>
        ) : status === "error" ? (
          <div className="flex flex-col items-center justify-center py-8 gap-3">
            <XCircle className="h-12 w-12 text-red-500" />
            <p className="text-red-500 font-medium">전송에 실패했습니다. 다시 시도해주세요.</p>
            <Button variant="outline" onClick={() => setStatus("idle")}>
              다시 시도
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="보내는 사람"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-zinc-900 border-zinc-800"
            />
            <Input
              placeholder="연락처 (이메일, 휴대폰 등)"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              className="bg-zinc-900 border-zinc-800"
            />
            <Textarea
              placeholder="메시지 내용"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="bg-zinc-900 border-zinc-800 min-h-[150px]"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full cursor-pointer h-12 bg-primary hover:bg-primary/80 text-white font-medium"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  전송 중...
                </span>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  메시지 보내기
                </>
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
