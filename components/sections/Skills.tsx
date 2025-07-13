"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface SkillsData {
  [category: string]: string[];
}

interface SkillsProps {
  skills: SkillsData;
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => (
  <section
    id="skills"
    className="scroll-mt-20 py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300"
  >
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          A comprehensive overview of my technical expertise across various domains.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, skillList], index) => (
          <Card
            key={index}
            className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white text-lg">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
); 