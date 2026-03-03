import React, { type JSX } from "react";
import { Linkedin, Github, Mail, Phone } from 'lucide-react';

// ! ----------------------------------------------------------------------------------------------

interface ContactEntry {
  id: number;
  desc: string;
  icon: JSX.element;
  url: string | null;
}

// ! ----------------------------------------------------------------------------------------------

const contactData: ContactEntry[] = [
  {
    id: 1,
    desc: "LinkedIn/varshil247",
    icon: <Linkedin size={18} strokeWidth={2}/>,
    url: "https://linkedin.com/in/varshil247",
  },
  {
    id: 2,
    desc: "GitHub/varshil247",
    icon: <Github size={18} strokeWidth={2}/>,
    url: "https://linkedin.com/in/varshil247",
  },
  {
    id: 3,
    desc: "Gmail/varshil247",
    icon: <Mail size={18} strokeWidth={2}/>,
    url: "https://linkedin.com/in/varshil247",
  }
]

// ! ----------------------------------------------------------------------------------------------

const Contact: FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 w-full h-full group">
      {contactData.map((contact, index) => (
        <div
          key={contact.id}
          onClick={() => window.open(contact.url, "_blank", "noopener,noreferrer")}
          className="flex items-center gap-3 p-6 w-full h-full text-dark bg-light rounded-xl
          group-hover:opacity-50 hover:!opacity-100 md:hover:scale-[102%]
          transition-all duration-300 ease-in-out
          hover:cursor-default md:hover:cursor-pointer"
        >
          <div>{contact.icon}</div>
          <a className="font-semibold leading-none translate-y-[-1px]">{contact.desc}</a>
        </div>
      ))}
    </div>
  );
};

export default Contact;

// ! ----------------------------------------------------------------------------------------------
