import type { FC } from "react";
import { ExternalLink } from "lucide-react";

// ! ----------------------------------------------------------------------------------------------

interface ProjectEntry {
  id: number;
  name: string;
  description: string;
  tags: string[];
  liveUrl: string | null;
  repoUrl: string | null;
}

// ! ----------------------------------------------------------------------------------------------

const projectData: ProjectEntry[] = [
  {
    id: 1,
    name: "FinVisAI Trading Platform",
    description: "Fundamental treemaps, XGBoost technicals and FinBERT sentiment analysis, with Gemini-LLM financial insights for portfolio management.",
    tags: ["Python", "PyTorch", "Pandas", "NumPy", "Flask", "APIs", "RESTful", "ReactJS", "Redux", "TailwindCSS", "D3JS"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    name: "Automated Trading Engine",
    description: "DRL agents with adaptive reward functions and ability to self-select environment variables such as technical and fundamental signals.",
    tags: ["Python", "PyTorch", "Pandas", "NumPy", "OpenGym", "Alpaca", "APIs", "MatPlotLib", "Jupyter Notebooks"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 3,
    name: "Collaborative Whiteboard",
    description: "Responsive web app, with multi-session and multi-user system. Low-latency asynchronous broadcasts, ownership logic and smooth undo-redo capabilities.",
    tags: ["PostgreSQL", "WebSockets", "CDN Buckets", "APIs", "ReactJS" ,"Redux", "JavaScript", "CSS"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 4,
    name: "General Election Visualiser",
    description: "Cleansed, augmented and processed voting and demographic data from 650 constituencies. Designed interactive visualisations to draw election insights.",
    tags: ["R Data Processing", "D3JS", "Observable Notebooks", "Office of National Statistics", "Data Visualisation"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 5,
    name: "UAV Path Optimiser",
    description: "HyFlex hyper-heurisitc framework for UAV path planning in a simulated environment. Implemented meta-heuristic operators for self-optimisation.",
    tags: ["Java", "HyFlex", "JavaFx", "Swing", "Heuristics", "Memetic Algorithms", "NP-Hard Optimisation"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 6,
    name: "TCP/IP Network Router",
    description: "Lightweight TCP/IP client-server system in Linux. Implemented the Dijkstra's algorithm to optimise packet routing between 100+ network nodes.",
    tags: ["ANSI C", "Networking Protocols", "Systems Programming", "Memory Management", "GCC", "Valgrind"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 7,
    name: "Academic Task Scheduler",
    description: "Productivity app integrating timetabling, homework management and transportation planning, with 98% genetic algorithm scheduling accuracy.",
    tags: ["Python", "Pandas", "Tkinter", "APIs", "CRUD", "MySQL", "Relational Databases", "Geneitc Algorithms"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 8,
    name: "Nottingham Street Aid",
    description: "Grant distribution platform, allowing beneficiaries and organisations to sign up, submit forms and evidence. Admin platform to process applications.",
    tags: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "Redux", "JWT", "Bcrypt", "User Auth", "WebForms"],
    liveUrl: "#",
    repoUrl: "#",
  },

];

// ! ----------------------------------------------------------------------------------------------

const Projects: FC = () => {
  return (
    <div className="flex flex-col md:grid grid-cols-12 auto-rows-[15rem] gap-3 group">
      {projectData.map((project, index) => (
        <div
          key={project.id}
          className={`flex flex-col p-6 gap-6 bg-light rounded-xl
          group-hover:opacity-50 hover:!opacity-100 hover:cursor-default 
          transition-all duration-300 ease-in-out 
          col-span-6 row-span-1 col-start-${index*4%2} row-start-${index*4%2}`}
        >
          <div className="flex justify-between gap-3">
            <p className="font-semibold text-dark truncate">{project.name}</p>
            <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-regular transition-all duration-300 ease-in-out hover:text-special"
              >
                <ExternalLink size={18} />
              </a>
            )}
            </div>
          </div>
          <p className="text-sm text-regular">{project.description}</p>
          <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <div key={tag} className="text-xs px-2 py-1 rounded-xl text-dark bg-grayed">
              {tag}
            </div>
          ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

// ! ----------------------------------------------------------------------------------------------

