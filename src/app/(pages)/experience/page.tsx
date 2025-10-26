import AcademicIcon from "@/app/components/icons/academic";
import BriefCaseIcon from "@/app/components/icons/briefcase";

const experience = [
  {
    type: "job",
    date: "Jun 2024 - Present",
    title: "Senior Frontend Developer",
    company: "Impress.ai - Kochi, Remote",
    link: "https://impress.ai",
    description: [],
  },
  {
    type: "job",
    date: "May 2024 - Jun 2024",
    title: "Frontend Developer",
    company: "Impress.ai - Kochi, Remote",
    link: "https://impress.ai",
    description: [
      " Refactored the codebase, removing stale code and improving performance. Migrated from jQuery and vanilla JS to React.js. Conducted code reviews, mentored junior developers.",
      "DevOps Contributions: Resolved penetration testing (pentest) issues, updated libraries, managed containers, and automated builds using Jenkins.",
      "Technical Hiring: Designed assessments, reviewed coding submissions, and conducted interviews.",
    ],
  },
  {
    type: "job",
    date: "Sep 2020 - May 2021",
    title: "Fullstack Developer",
    company: "castler - Delhi",
    link: "https://castler.com",
    description: [
      "Developed a fintech application, handling full-stack development across frontend, backend, and database management.",
      "Led the design, development, and testing process, ensuring high-quality application performance and reliability.",
    ],
  },
  {
    type: "study",
    date: "2018 - 2020",
    title: "M.Tech in Information Technology",
    company: "Christ University - Bangalore",
    description: [
      "M.Tech Dissertation: Detecting and Mitigating DDoS attack in Software-defined Networks to provide a more agile, secure gateway for IoT networks.",
    ],
  },
  {
    type: "study",
    date: "2014 - 2018",
    title: "B.Tech in Computer Science and Technology",
    company: "Karunya University - Coimbatore",
    description: [
      "Worked on the setup of an OpenStack Cloud on dedicated servers. Developed an interface to block storage for storing content on the On-Premise private cloud.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="flex flex-col items-start justify-start h-full md:p-8 w-full overflow-x-hidden overflow-y-auto">
      {experience.map((exp, index) => (
        <div
          className="w-full space-y-4 max-w-180 border-l-4 border-blue-500 pl-8 pb-8 ml-3 relative md:m-auto"
          key={index}
        >
          <div className="w-6 h-6 rounded-full bg-blue-500 transform translate-x-[-46px] translate-y-[62px] z-10">
            {exp.type === "job" ? (
              <BriefCaseIcon className="text-white w-5 h-5 transform translate-x-[2px] translate-y-[1px]" />
            ) : (
              <AcademicIcon className="text-white w-5 h-5 transform translate-x-[2px] translate-y-[1px]" />
            )}
          </div>
          <div className="rounded-lg p-6 bg-gray-800 w-full">
            {exp?.date && <p className="text-gray-400 mb-1">{exp.date}</p>}
            {exp?.title && (
              <p className="font-semibold text-2xl mb-2">{exp.title}</p>
            )}
            {exp?.company && (
              <p className="text-blue-400 mb-3">
                {exp?.link ? (
                  <a href={exp.link} target="_blank" rel="noopener noreferrer">
                    {exp.company}
                  </a>
                ) : (
                  exp.company
                )}
              </p>
            )}
            {!!exp?.description?.length && (
              <div>
                <ul className="list-disc list-inside">
                  {exp.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
