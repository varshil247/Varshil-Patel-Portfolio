import React, { useState, useEffect, useRef, type JSX } from "react";
import { Signature, Briefcase, Presentation, GraduationCap, MessageCircle } from "lucide-react";

import Home from "./components/Sections/Home";
import About from "./components/Sections/About";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";

import ThemeToggleAnimated from "./components/UI/ThemeSelector";
import PortfolioLogo from "./assets/portfolio_logo.png";

// ! ----------------------------------------------------------------------------------------------

export interface NavLink {
  id: string;
  icon: JSX.Element;
  label: string;
  content: JSX.Element;
}

// ! ----------------------------------------------------------------------------------------------

const navLinks: NavLink[] = [
  {
    id: "Home",
    icon: <Signature size={18} strokeWidth={2} />,
    label: "Home",
    content: <Home />,
  },
  {
    id: "About",
    icon: <Briefcase size={18} strokeWidth={2} />,
    label: "About",
    content: <About />,
  },
  {
    id: "Projects",
    icon: <Presentation size={18} strokeWidth={2} />,
    label: "Projects",
    content: <Projects />,
  }, 

  {
    id: "Contact",
    icon: <MessageCircle size={18} strokeWidth={2} />,
    label: "Contact",
    content: <Contact />,
  }
];

// ! ----------------------------------------------------------------------------------------------

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(navLinks[0].id);
  const mainRef = useRef<HTMLElement | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);  

  // ! ----------------------------------------------------------------------------------------------

  useEffect(() => {
    const mainElement = mainRef.current;
    if (!mainElement) return;

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((e) => e.isIntersecting);
      if (visible) { setActiveSection(visible.target.id) }
    }, { root: mainElement, threshold: 0.5 });

    const currentRefs = sectionRefs.current;
    currentRefs.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);
  
  // ! ----------------------------------------------------------------------------------------------

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    e.preventDefault();
    const target = sectionRefs.current[index];
    
    if (target && mainRef.current) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(navLinks[index].id);
    }
  };

  // ! ----------------------------------------------------------------------------------------------

  return (
    <div className="flex flex-col-reverse w-screen h-screen p-3 gap-3 bg-background md:flex-col">

      <header className="flex justify-center sticky top-0 left-0">
        <nav className="flex justify-between max-w-3xl w-full bg-light p-3 gap-3 rounded-xl">
          <img
            src={PortfolioLogo}
            onClick={(e) => handleScrollToSection(e, 0)}
            className="flex items-center justify-center
            w-10 h-10 p-1 object-cover rounded-lg
            transition-all duration-500 ease-in-out
            hover:bg-grayed hover:cursor-pointer"
          />
          <ul className="flex items-center gap-3">
            {navLinks.map((link, index) => (
              <li id={link.id} key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollToSection(e, index)}
                  className={`flex p-2 rounded-lg
                  transition-all duration-500 ease-in-out
                  ${activeSection === link.id ? "text-dark bg-grayed" : "text-regular hover:text-dark"}`}
                >
                  <div className="block md:hidden">{link.icon}</div>
                  <p className="hidden leading-none -translate-y-[1px] md:block">{link.label}</p>
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggleAnimated/>
        </nav>
      </header>

      <main ref={mainRef} className="flex flex-col items-center w-full overflow-y-auto">
        {navLinks.map((link, index) => (
          <section
            id={link.id}
            key={link.id}
            ref={(element) => {sectionRefs.current[index] = element}}
            className="flex flex-col gap-3 max-w-3xl w-full mb-[3rem] md:mb-[10rem]"
          >
            <p className="text-regular mx-1 leading-none">{link.label}</p>
            <div>{link.content}</div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default App;

// ! ----------------------------------------------------------------------------------------------
