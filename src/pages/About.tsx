import {
  faDiscord,
  faGithubAlt,
  faRedditAlien,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import IconText from "../components/IconText";

import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      just a shiba trying to do something
      <div className={styles.links}>
        <IconText icon={faGithubAlt} href="https://github.com/LuckShiba">
          LuckShiba
        </IconText>
        <IconText
          icon={faDiscord}
          href="https://discord.com/users/355750436424384524"
        >
          LuckShiba#6614
        </IconText>
        <IconText icon={faRedditAlien} href="https://reddit.com/u/LuckShiba">
          /u/LuckShiba
        </IconText>
        <IconText icon={faTwitter} href="https://twitter.com/LuckShiba">
          @LuckShiba
        </IconText>
      </div>
    </div>
  );
}
