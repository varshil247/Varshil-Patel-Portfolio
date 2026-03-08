import React, { useState } from "react";
import type { FC } from "react";
import { Building2, ChevronUp, ChevronDown } from "lucide-react";

import GDM_logo from "../../assets/gdm_logo.png";
import GDM_img1 from "../../assets/gdm_img1.png";
import GDM_img2 from "../../assets/gdm_img2.png";
import GDM_img3 from "../../assets/gdm_img3.png";

import BCG_logo from "../../assets/bcg_logo.png";
import BCG_img1 from "../../assets/bcg_img1.png";
import BCG_img2 from "../../assets/bcg_img2.png";
import BCG_img3 from "../../assets/bcg_img3.png";

import FSAI_logo from "../../assets/fsai_logo.png";
import FSAI_img1 from "../../assets/fsai_img1.png";
import FSAI_img2 from "../../assets/fsai_img2.png";
import FSAI_img3 from "../../assets/fsai_img3.png";

import CBOE_logo from "../../assets/cboe_logo.png";
import CBOE_img1 from "../../assets/cboe_img1.png";
import CBOE_img2 from "../../assets/cboe_img2.png";
import CBOE_img3 from "../../assets/cboe_img3.png";

// ! ----------------------------------------------------------------------------------------------

interface ExperienceEntry {
  id: number;
  company: string;
  role: string;
  date: string;
  location: string;
  description: string;
  responsibilities: string[];
  logo?: string;
  img1?: string;
  img2?: string;
  img3?: string;
}

interface ExperienceAccordionItemProps {
  entry: ExperienceEntry;
  isExpanded: boolean;
  onToggle: () => void;
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
    logo: GDM_logo,
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
    logo: BCG_logo,
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
    logo: FSAI_logo,
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
    logo: CBOE_logo,
    img1: CBOE_img1,
    img2: CBOE_img2,
    img3: CBOE_img3,
  }, 
];

// ! ----------------------------------------------------------------------------------------------

const ExperienceAccordionItem: FC<ExperienceAccordionItemProps> = ({ entry, isExpanded, onToggle }) => {
  return (
    <div className="flex flex-col bg-light rounded-xl overflow-hidden
      cursor-pointer transition-all duration-300 ease-in-out hover:bg-grayed">
      <div className="flex gap-3 items-center p-6 select-none" onClick={onToggle}>
        {entry.logo ? (
          <img 
            src={entry.logo} 
            alt={`${entry.company} logo`}
            className="w-10 h-10 object-contain shrink-0 rounded-lg"
          />
        ) : (
          <Building2 
            className="shrink-0 text-regular" 
            size={20} 
          />
        )}
        <div className="flex items-end justify-between gap-3 w-full">
          <div className="flex flex-col min-w-0">
            <p className="text-base font-semibold text-dark truncate">{entry.company}</p>
            <p className="text-sm text-regular">{entry.role}</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <div className="flex flex-col text-right text-regular text-sm">
              <p className="whitespace-nowrap">{entry.date}</p>
              <p className="whitespace-nowrap">{entry.location}</p>
            </div>
            {isExpanded ? (
              <ChevronUp className="text-regular" size={20} />
            ) : (
              <ChevronDown className="text-regular" size={20} />
            )}
          </div>
        </div>
      </div>
 
      <div
        className={`transition-all duration-300 ease-in-out
        ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6 flex flex-col gap-6">
          <div className="h-px bg-grayed"/>
          <p className="text-regular text-sm leading-relaxed">{entry.description}</p>

          <div className="flex flex-wrap gap-2">
            {entry.responsibilities.map((tag) => (
              <div key={tag} className="text-xs px-3 py-1.5 rounded-full text-dark bg-grayed">
                {tag}
              </div>
            ))}
          </div>

          {(entry.img1 || entry.img2 || entry.img3) && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {entry.img1 && (
                <div className="col-span-1 aspect-video bg-grayed rounded-lg overflow-hidden">
                  <img src={entry.img1} className="w-full h-full object-cover" alt="" />
                </div>
              )}
              {entry.img2 && (
                <div className="col-span-1 aspect-video bg-grayed rounded-lg overflow-hidden">
                  <img src={entry.img2} className="w-full h-full object-cover" alt="" />
                </div>
              )}
              {entry.img3 && (
                <div className="col-span-1 aspect-video bg-grayed rounded-lg overflow-hidden">
                  <img src={entry.img3} className="w-full h-full object-cover" alt="" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ! ----------------------------------------------------------------------------------------------

const Experience: FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {experienceData.map((entry) => (
        <ExperienceAccordionItem
          key={entry.id}
          entry={entry}
          isExpanded={expandedId === entry.id}
          onToggle={() => toggleExpand(entry.id)}
        />
      ))}
    </div>
  );
};

export default Experience;

// ! ----------------------------------------------------------------------------------------------
