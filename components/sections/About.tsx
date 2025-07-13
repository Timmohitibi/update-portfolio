"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const About: React.FC = () => (
  <section
    id="about"
    className="scroll-mt-20 py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300"
  >
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          About Me
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          I'm a recent Computer Science graduate with a passion for creating
          efficient, scalable software solutions. My expertise spans cloud
          computing, networking and full-stack development.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-blue-600 dark:text-blue-400">
              Cloud Computing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 dark:text-slate-400">
              Experienced with AWS services including EC2, S3, Lambda, and RDS.
              Skilled in designing and implementing scalable cloud
              architectures.
            </p>
          </CardContent>
        </Card>
        <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-purple-600 dark:text-purple-400">
              Software Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 dark:text-slate-400">
              Proficient in multiple programming languages and frameworks.
              Strong focus on clean code, testing, and agile development
              practices.
            </p>
          </CardContent>
        </Card>
        <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-green-600 dark:text-green-400">
              Network Engineering
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 dark:text-slate-400">
              Deep understanding of networking protocols, security principles,
              and network optimization techniques for robust system design. for
              robust system design.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);
