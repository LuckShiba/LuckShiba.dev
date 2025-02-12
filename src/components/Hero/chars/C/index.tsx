import { css, Global } from "@emotion/react";
import { HeroCharProps } from "../../Char";

const Styles = () => css`
  .hero {
    background: linear-gradient(
      90deg,
    #4B2881 0%,
    #2E5792 14%,
    #177244 35%,
    #C4A704 50%,
    #C96111 64%,
    #C1301B 78%,
    #4B2881 100%
    );
    background-repeat: repeat;
    background-size: 300% 100%;
    animation: gradient 5000s linear infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 200000% 50%;
    }
  }
`;

interface IExtraProps {
  active: boolean;
}

const Cextra: React.FC<IExtraProps> = ({ active }) => {
  return (active ? <Global styles={Styles} /> : null);
};

const IOptions: HeroCharProps["options"] = (active) => ({
  extraRender: <Cextra active={active} />,
});

export default IOptions;
