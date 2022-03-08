import { Container } from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";
import discordIcon from "../../assets/discord.png";
import blogIcon from "../../assets/blog.png";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>M</span>
        <span>Silva</span>
      </a>
      <div>
        <p>
          This website was made with <img src={reactIcon} alt="React" /> and a
          lot of
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/heuzin/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a href="https://github.com/heuzin" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/mathqs/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a
          href="https://discordapp.com/users/363736635134836737"
          target="_blank"
          rel="noreferrer"
        >
          <img src={discordIcon} alt="Discord" />
        </a>

        <a
          href="https://my-blog-blond-pi.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={blogIcon} alt="Discord" />
        </a>
      </div>
    </Container>
  );
}
