"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function EnquiryForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    yourName: "",
    position: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Try Netlify Forms first
      const formElement = e.target as HTMLFormElement;
      const formDataToSend = new FormData(formElement);

      // Convert FormData to URLSearchParams
      const params = new URLSearchParams();
      formDataToSend.forEach((value, key) => {
        if (typeof value === 'string') {
          params.append(key, value);
        }
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (response.ok) {
        alert("感谢您的咨询！我们会尽快回复您。");
        setFormData({
          companyName: "",
          yourName: "",
          position: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Netlify form submission failed");
      }
    } catch (error) {
      // Fallback to mailto
      const emailBody = `
公司名称: ${formData.companyName}
姓名: ${formData.yourName}
职位: ${formData.position}
邮箱: ${formData.email}
主题: ${formData.subject}

留言内容:
${formData.message}
      `.trim();

      const mailtoLink = `mailto:hanshicong049@gmail.com?subject=${encodeURIComponent(formData.subject || '网站询价')}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
      alert("正在打开邮件客户端，请确认发送。");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3f4c4d] mb-12 text-center md:text-left">
          ENQUIRY FORM
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-5xl mx-auto"
          name="enquiry"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {/* Hidden fields for Netlify Forms */}
          <input type="hidden" name="form-name" value="enquiry" />
          <input type="hidden" name="bot-field" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <Input
              type="text"
              name="companyName"
              placeholder="Company name"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="bg-[#e8f3f1] border-0 placeholder:text-[#95a5ae]"
            />
            <Input
              type="text"
              name="yourName"
              placeholder="Your name"
              value={formData.yourName}
              onChange={handleChange}
              required
              className="bg-[#e8f3f1] border-0 placeholder:text-[#95a5ae]"
            />
            <Input
              type="text"
              name="position"
              placeholder="Position"
              value={formData.position}
              onChange={handleChange}
              className="bg-[#e8f3f1] border-0 placeholder:text-[#95a5ae]"
            />
          </div>
          <div className="mb-4">
            <Input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-[#e8f3f1] border-0 placeholder:text-[#95a5ae]"
            />
          </div>
          <div className="mb-4">
            <Input
              type="text"
              name="subject"
              placeholder="Your subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-[#e8f3f1] border-0 placeholder:text-[#95a5ae]"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={8}
              className="w-full px-3 py-2 bg-[#e8f3f1] border-0 rounded-md placeholder:text-[#95a5ae] focus:outline-none focus:ring-2 focus:ring-[#57b79c]"
            />
          </div>
          <Button
            type="submit"
            variant="outline"
            disabled={isSubmitting}
            className="border-2 border-[#57b79c] text-[#57b79c] hover:bg-[#57b79c] hover:text-white px-12 py-6 text-lg font-semibold disabled:opacity-50"
          >
            {isSubmitting ? "发送中..." : "SEND"}
          </Button>
        </form>
      </div>
    </section>
  );
}
