"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactProps {
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export const Contact: React.FC<ContactProps> = ({ formData, handleInputChange, handleSubmit }) => (
  <section id="contact" className="scroll-mt-20 py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to work together!
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Let's Connect</h3>
          <p className="text-slate-600 dark:text-slate-400">
            Whether you have a project in mind, want to discuss opportunities, or just want to say hello, I'd love to hear from you.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="text-slate-600 dark:text-slate-400">timothyitibi@email.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="text-slate-600 dark:text-slate-400">+254 7459493926</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="text-slate-600 dark:text-slate-400">Available for Remote Work</span>
            </div>
          </div>
        </div>
        <Card className="border-slate-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
          <form
  action="https://formsubmit.co/timothyitibi@gmail.com"
  method="POST"
  className="space-y-4"
>
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_next" value="https://yourportfolio.com/thank-you" />

  <Input type="text" name="name" placeholder="Your Name" required />
  <Input type="email" name="email" placeholder="Your Email" required />
  <Input type="text" name="subject" placeholder="Subject" required />
  <Textarea name="message" placeholder="Your Message" required rows={5} />
  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
    Send Message
  </Button>
</form>

          </CardContent>
        </Card>
      </div>
    </div>
  </section>
); 