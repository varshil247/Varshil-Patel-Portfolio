import React, { useState } from "react";
import type { FC, ReactElement } from "react";
import { Target } from "lucide-react";

import GDM_img1 from "../../assets/gdm_img1.jpg";
import GDM_img2 from "../../assets/gdm_img2.jpg";
import GDM_img3 from "../../assets/gdm_img3.jpg";

import BCG_img1 from "../../assets/bcg_img1.jpg";
import BCG_img2 from "../../assets/bcg_img2.jpg";
import BCG_img3 from "../../assets/bcg_img3.png";

import FSAI_img1 from "../../assets/fsai_img1.jpg";
import FSAI_img2 from "../../assets/fsai_img2.JPG";
import FSAI_img3 from "../../assets/fsai_img3.jpg";

import CBOE_img1 from "../../assets/cboe_img1.jpg";
import CBOE_img2 from "../../assets/cboe_img2.jpg";
import CBOE_img3 from "../../assets/cboe_img3.png";

// ! ----------------------------------------------------------------------------------------------

interface StylableIconProps {
  className?: string;
  size?: number | string;
}

interface ExperienceEntry {
  id: number;
  company: string;
  role: string;
  date: string;
  location: string;
  description: string;
  responsibilities: string[];
  defaultIcon: ReactElement<StylableIconProps>;
  img1: ReactElement<React.ImgHTMLAttributes<HTMLImageElement>>,
  img2: ReactElement<React.ImgHTMLAttributes<HTMLImageElement>>,
  img3: ReactElement<React.ImgHTMLAttributes<HTMLImageElement>>,
}

interface ExperienceCardProps {
  experienceData: experienceData | undefined;
  selectedExperienceId: selectedExperienceId | undefined;
  setSelectedExperienceId: setSelectedExperienceId | undefined;
}

interface ExperienceDetailCardProps {
  entry: ExperienceEntry | undefined;
}

// ! ----------------------------------------------------------------------------------------------

const experienceData: ExperienceEntry[] = [
    {
    id: 1,
    company: "Google DeepMind",
    role: "Research Ready Intern",
    date: "Jun 2025 - Aug 2025",
    location: "London",
    description: "Researched, engineered and presented novel Progressive Data Dropout methods. Implemented adaptive and dynamic curriculum learning techiques ontop of schedule matched random dropout.",
    responsibilities: ["Efficient AI/ML", "Research Methodologies", "Research Presentation", "Linux", "Python", "PyTorch", "Bash", "SLURM", "GPU Parallelisation"],
    img1: GDM_img1,
    img2: GDM_img2,
    img3: GDM_img3,
  },
  {
    id: 2,
    company: "Boston Consulting Group",
    role: "Mentorship Programme",
    date: "Jun 2025 - Aug 2025",
    location: "London",
    description: "Analysed case studies and refined analytical skills to deliver optimal business strategy management solutions. Collaboratively solved live case studies with mentees, senior consultants and junior partners.",
    responsibilities: ["Strategy Consulting", "Management Consulting", "Case Study Analysis", "Statistical Analysis", "Business Presentation", "Collaboration"],
    img1: BCG_img1,
    img2: BCG_img2,
    img3: BCG_img3,
  },
  {
    id: 3,
    company: "Nottingham Racing AI",
    role: "Technical Project Manager",
    date: "Sep 2024 - June 2025",
    location: "Nottingham",
    description: "Led a team of 22 engineers to develop perception, path planning, and control algorithms for an autonomous race-car. Managed technical direction, sprint planning, and systems integration.",
    responsibilities: ["Project Management", "Technical Management", "Sprint Planning", "Integration Planning", "Python", "C/C++", "ROS", "Linux"],
    img1: FSAI_img1,
    img2: FSAI_img2,
    img3: FSAI_img3,
  },
  {
    id: 4,
    company: "Cboe Global Markets",
    role: "Software Engineer Intern",
    date: "Jun 2024 - Aug 2024",
    location: "London",
    description: "Modernised the L2 order book viewer, delivering low-latency trade data services and improving system reliability across 15+ global exchange venues. Implemented TRF, SIS and aggregated views.",
    responsibilities: ["PostgreSQL", "Django", "Python", "REST APIs", "JavaScript", "ReactJS", "Redux", "Jira", "Jenkins", "Jest", "PyTest", "RHEL 9", "Linux", "Bash"],
    img1: CBOE_img1,
    img2: CBOE_img2,
    img3: CBOE_img3,
  }, 
];

// ! ----------------------------------------------------------------------------------------------

const ExperienceCard: FC<ExperienceDetailCardProps> = ({ experienceData, selectedExperienceId, setSelectedExperienceId }) => {
  if (!experienceData || !selectedExperienceId || !setSelectedExperienceId) {
    return;
  }

  return (
    <div className="flex flex-col gap-6 p-6 w-full group bg-light rounded-xl">
      {experienceData.map((entry) => (
        <div
          key={entry.id}
          className={`flex flex-row gap-6 
          transition-all duration-300 ease-in-out
          cursor-pointer group-hover:opacity-50 hover:!opacity-100
          ${selectedExperienceId === entry.id ? "!opacity-100" : "opacity-50"}`}
          onClick={() => setSelectedExperienceId(entry.id)}
        >
          <Target
            className={`my-auto shrink-0 transition-colors duration-300
            ${selectedExperienceId === entry.id ? "text-special" : "text-regular"}`}
            size={18}
          />
          <div className="flex-1 min-w-0">
            <p
              className={`font-semibold text-sm truncate transition-colors duration-300
              ${selectedExperienceId === entry.id ? "text-special" : "text-dark"}`}
            >
              {entry.company}
            </p>
            <p className="text-xs text-regular transition-colors duration-300">{entry.role}</p>
            <p className="text-xs text-regular transition-colors duration-300">{entry.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ! ----------------------------------------------------------------------------------------------

const ExperienceDetailCard: FC<ExperienceDetailCardProps> = ({ entry }) => {
  if (!entry) {
    return;
  }

  return (
    <div className="flex flex-col gap-6 p-6 w-full bg-light rounded-xl
      group-hover:opacity-50 hover:!opacity-100 hover:cursor-default">
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 items-center">
          <div className="flex items-end justify-between gap-3 w-full">
            <div className="flex flex-col min-w-0">
              <p className="text-base font-semibold text-special truncate">{entry.company}</p>
              <p className="text-sm text-regular">{entry.role}</p>
            </div>
            <div className="flex flex-col text-right text-regular text-sm shrink-0">
              <p className="whitespace-nowrap">{entry.date}</p>
              <p className="whitespace-nowrap">{entry.location}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <p className="text-dark text-sm text-regular leading-relaxed">{entry.description}</p>
      </div>

      <div className="flex flex-wrap gap-1">
        {entry.responsibilities.map((tag) => (
          <div key={tag} className="text-xs px-2 py-1 rounded-xl text-dark bg-grayed">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

// ! ----------------------------------------------------------------------------------------------

const Experience: FC = () => {
  const [selectedExperienceId, setSelectedExperienceId] = useState<number | null>(
    experienceData.length > 0 ? experienceData[0].id : null
  );

  const selectedExperience = experienceData.find((exp) => exp.id === selectedExperienceId);

  return (
    <div className="flex flex-col md:grid grid-cols-12 auto-rows-[5rem] gap-3">
      <div className="hidden md:flex col-span-4 row-span-5 col-start-1 row-start-1">
        <ExperienceCard
          experienceData={experienceData}
          selectedExperienceId={selectedExperienceId}
          setSelectedExperienceId={setSelectedExperienceId}
        />
      </div>

      <div className="hidden md:flex col-span-8 row-span-3 col-start-5 row-start-1">
        <ExperienceDetailCard entry={selectedExperience}/>
      </div>

      <div className="flex flex-col gap-3 md:hidden col-span-8 row-span-3 col-start-5 row-start-1 group">
        {experienceData.map((selectedExperience) => (
          <ExperienceDetailCard entry={selectedExperience}/>
        ))}
      </div>

      <div className="hidden md:flex col-span-3 row-span-2 col-start-5 row-start-4 bg-light rounded-xl">
        <img src={selectedExperience.img1} className="flex w-full h-full object-cover rounded-xl"/>
      </div>

      <div className="hidden md:flex col-span-3 row-span-2 col-start-8 row-start-4 bg-light rounded-xl">
        <img src={selectedExperience.img2} className="flex w-full h-full object-cover rounded-xl"/>
      </div>

      <div className="hidden md:flex col-span-2 row-span-2 col-start-11 row-start-4 bg-light rounded-xl">
        <img src={selectedExperience.img3} className="flex w-full h-full object-cover rounded-xl"/>
      </div>
    </div>
  );
};

export default Experience;

// ! ----------------------------------------------------------------------------------------------

