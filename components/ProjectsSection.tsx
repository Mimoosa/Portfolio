"use client";

import React from "react";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub } from "react-icons/bs";
import { useTranslations } from "next-intl";

const ProjectsSection = () => {
  const t = useTranslations("ProjectsSection");

  const projects = [
    {
      key: "libraryHub",
      year: "2025",
      tech: [
        "Next.js 15",
        "React",
        "TailwindCSS",
        "Supabase (PostgreSQL, Auth)",
        "i18next",
        "react-i18next",
        "next-i18n-router",
        "Jest",
        "React Testing Library",
        "Docker",
        "GitHub Actions",
        "ESLint",
        "SonarQube / SonarCloud",
        "Figma",
        "Jira",
      ],
      youtube: "https://www.youtube.com/embed/JHYGC7uMR9U?si=hmEvnpMu3n28HA6k",
      github:
        "https://github.com/Mimoosa/next_js_devops_library_hub_project.git",
    },

    {
      key: "airportSimulator",
      year: "2025",
      tech: ["Java", "JavaFX", "Maven", "MongoDB", "JUnit 5", "JavaDoc"],
      youtube: "https://www.youtube.com/embed/kAXP5fTSJqc?si=P-2nHAU9hInshXvN",
      github: "https://github.com/Mimoosa/java_airport_simulator.git",
    },
    {
      key: "dailyBalance",
      year: "2025",
      tech: [
        "React",
        "Express.js",
        "MongoDB Atlas",
        "Gemini API",
        "Node.js",
        "REST API",
        "Figma",
        "Jira",
      ],
      youtube: "https://www.youtube.com/embed/udzCqvJLOII?si=rRIdL0Rawv2NuHeH",
      github: "https://github.com/Mimoosa/react_daily_balance_app.git",
    },
    {
      key: "heartRate",
      year: "2024",
      tech: [
        "Python",
        "Raspberry Pi Pico",
        "MQTT",
        "Kubios Cloud",
        "OLED (SSD1306)",
        "FIFO buffers",
        "Hardware timers",
        "IRQ interrupts",
      ],
      youtube: "https://www.youtube.com/embed/8pyPAxeFJRg?si=5_mnaPk72Pbf8EXl",
      github: "https://github.com/Mimoosa/Heart-Rate-Monitoring-Device.git",
    },
    {
      key: "flightGame",
      year: "2024",
      tech: [
        "JavaScript",
        "Python",
        "MySQL",
        "Leaflet.js",
        "OpenWeatherMap API",
        "REST API",
        "HTML/CSS",
      ],
      youtube: "https://www.youtube.com/embed/t-vyUtrgqzw?si=aU7mhAiIjmo9Wam1",
      github: "https://github.com/Mimoosa/python_flight_game.git",
    },
  ];

  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        {t("title")}
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => (
          <div key={idx}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="md:w-1/2">
                  <iframe
                    width="100%"
                    height="315"
                    src={project.youtube}
                    title={t(`projects.${project.key}.name`)}
                    className="rounded-xl shadow-xl hover:opacity-70"
                    allowFullScreen
                  />
                </div>

                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">
                    {t(`projects.${project.key}.name`)}
                    <span className="text-teal-500 text-2xl ml-3">
                      ({project.year})
                    </span>
                  </h1>

                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {t(`projects.${project.key}.description`)}
                  </p>

                  <ul className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((item, i) => (
                      <li
                        key={i}
                        className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
