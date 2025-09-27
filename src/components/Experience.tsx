"use client";
import Image from "next/image";
import { MagicCard } from "./ui/magic-card";
import { Link } from "@radix-ui/themes";
import { I_Experience } from "@/types/project";
import { bricolage_grotesque, inter } from "@/utils/fonts";
import Title from "./ui/Title";
import { useDarkMode } from "@/hooks/useDarkMode";
import { experienceData } from "@/utils/constant";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const Experience = () => {
  const { isDarkMode } = useDarkMode();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDescription = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-1/2 max-lg:w-full max-lg:px-20 max-sm:w-full max-sm:px-5 flex flex-col items-center mt-4 pb-8">
      <span className="mb-3">
        <Title title="Experience" />
      </span>

      {experienceData.map((exp: I_Experience, idx) => {
        const isOpen = openIndex === idx;

        return (
          <MagicCard
            key={idx}
            className="cursor-pointer h-fit dark:shadow-2xl !bg-transparent border-none mb-3"
            gradientColor={`${
              isDarkMode ? "#262626" : "rgba(197, 241, 241, 0.4)"
            }`}
          >
            <div
              className="flex w-full px-5 max-sm:px-0 max-sm:pr-1 py-3 group"
              onClick={() => toggleDescription(idx)}
            >
              {/* Logo */}
              <div className="w-24 flex items-center justify-center">
                <Link href={exp.company_link} target="_blank">
                  <Image
                    src={exp.company_logo}
                    alt="company-logo"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </Link>
              </div>

              {/* Job Info */}
              <div className="w-full">
                <div
                  className={`${
                    exp.job_title === "Freelance"
                      ? "max-sm:ml-2 max-lg:ml-2"
                      : ""
                  }`}
                >
                  <div
                    className={`flex w-[41vw] max-lg:w-full max-sm:w-full justify-between max-sm:items-center ${bricolage_grotesque}`}
                  >
                    {/* Job Title + Hover Indicator */}
                    <div className="flex items-center gap-1">
                      <span className="text-lg !leading-4 mb-1 max-sm:text-base font-semibold">
                        {exp.job_title}
                      </span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {isOpen ? (
                          <ChevronDown size={16} />
                        ) : (
                          <ChevronRight size={16} />
                        )}
                      </span>
                    </div>

                    {/* Duration (desktop) */}
                    <div className="text-xs max-sm:text-[10px] max-sm:hidden">
                      {exp.duration}
                    </div>
                  </div>

                  <h2 className={`text-sm max-sm:text-xs ${inter}`}>
                    {exp.company_name}
                  </h2>
                  <h2
                    className={`text-sm max-sm:text-[10px] hidden max-sm:block mt-1 ${inter}`}
                  >
                    {exp.duration}
                  </h2>
                </div>

                {/* Description with smooth expand/collapse */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm max-sm:text-[11px]">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          </MagicCard>
        );
      })}
    </div>
  );
};

export default Experience;
