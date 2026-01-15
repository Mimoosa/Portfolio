"use client";
import React from "react";
import { useTranslations } from "next-intl";

const skills = [
  { category: "Languages", items: ["JavaScript", "Python", "Java"] },
  { category: "Backend", items: ["Node.js"] },
  { category: "Databases", items: ["MySQL", "MongoDB"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Jenkins", "Docker", "Postman", "Figma", "Jira"],
  },
];

const AboutSection = () => {
  const t = useTranslations("AboutSection");

  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          {t("title")}
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          {/* LEFT SIDE */}
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              {t("subtitle")}
            </h1>
            <p>
              {t("introLine1")}{" "}
              <span className="font-bold">{t("introTraitAmbitious")}</span>,
              <span className="font-bold">{t("introTraitSelfMotivated")}</span>,{" "}
              <span className="font-bold">{t("introTraitDriven")}</span>{" "}
              {t("introLine1Suffix")}
            </p>
            <br />
            <p>{t("education")}</p>
            <br />
            <p>{t("learningMindset")}</p>
            <br />
            <p>
              {t("growthMindsetPrefix")}{" "}
              <span className="font-bold text-teal-500">
                {t("growthMindsetHighlight")}
              </span>{" "}
              {t("growthMindsetSuffix")}
            </p>
            <br />{" "}
            <a
              href="/cv/Monami_Kirjavainen_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-teal-600 text-white font-semibold rounded hover:bg-teal-700 transition"
            >
              {" "}
              {t("cvButton")}
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">{t("skillsTitle")}</h1>

            <div className="flex flex-col space-y-4">
              {skills.map((group, idx) => (
                <div key={idx}>
                  <h2 className="font-semibold text-lg mb-2 text-teal-600">
                    {group.category}
                  </h2>
                  <div className="flex flex-wrap flex-row justify-center md:justify-start">
                    {group.items.map((item, subIdx) => (
                      <p
                        key={subIdx}
                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-600 rounded font-semibold"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
