import Project from "../components/Project";
import styles from "./Projects.module.css";
import ZuraaaImage from "../assets/zuraaa.png";
import BentotecImage from "../assets/bentotec.png";

export default function Projects() {
  const projects = [
    {
      name: "Zuraaa!",
      description: "Zuraaa! was a bot list made for Discord bots.",
      github: "zuraaa-projects",
      image: ZuraaaImage,
    },
    {
      name: "bentotec.live",
      description:
        "bentotec.live was a website made for Bentotec," +
        " a science and technology fair, popular voting.",
      github: "LuckShiba/bentotec.live",
      website: "https://bentotec.live",
      image: BentotecImage,
    },
  ];

  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <Project key={project.name} className={styles.project} {...project} />
      ))}
    </div>
  );
}
