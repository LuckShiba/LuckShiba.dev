import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import style from "./Project.module.css";

export interface ProjectProps {
  name: string;
  description: string;
  image: string;
  github?: string;
  website?: string;
  className?: string;
}

export default function Project(props: ProjectProps) {
  return (
    <div className={`${props.className || ""} ${style.container}`}>
      <div className={style.header}>
        <div className={style.titleHeader}>
          <h1 className={style.title}>{props.name}</h1>
          <div>
            {props.github && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://github.com/${props.github}`}
                className={style.link}
              >
                <FontAwesomeIcon icon={faGithub} className={style.icon} />{" "}
                GitHub
              </a>
            )}
            {props.website && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={props.website}
                className={style.link}
              >
                <FontAwesomeIcon
                  icon={faGlobeAmericas}
                  className={style.icon}
                />{" "}
                Website
              </a>
            )}
          </div>
        </div>
        <img src={props.image} alt={props.name} className={style.image} />
      </div>
      <p className={style.description}>{props.description}</p>
    </div>
  );
}
