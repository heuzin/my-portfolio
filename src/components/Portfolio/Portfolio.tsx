import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>My Portfolio</h2>

      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/heuzin/shop-to-it"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a
                  href="https://shop-to-it.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visit website" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Shop To It</h3>
              <p>
                An eCommerce web application created with MERN Stack. It has
                user authentication system, protected and admin private routes.
                Integration with PayPal API.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>TypeScript</li>
                <li>React/Redux</li>
                <li>NodeJs</li>
                <li>Express</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/heuzin/fav-clothing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a
                  href="https://fav-clothing.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visit website" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Fav Clothing</h3>
              <p>
                A full stack e-commerce application built with React, Redux,
                React Hooks, using Firebase and Stripe API.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Typescript</li>
                <li>React/Redux</li>
                <li>NodeJs</li>
                <li>Express</li>
                <li>Firebase</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/heuzin/connect-to-it"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a
                  href="https://connect-to-it.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visit website" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Connect To It</h3>
              <p>
                In depth full stack social network application using Node.js,
                Express, React, Redux and MongoDB. Create, comment and like
                posts.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>TypeScript</li>
                <li>React/Redux</li>
                <li>NodeJs</li>
                <li>Express</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/heuzin/support-desk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a
                  href="https://ticket-support-desk.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visit website" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Support Desk</h3>
              <p>
                Support ticket application built with the MERN stack. Create new
                ticket, add notes on a ticket, view and close tickets.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>TypeScript</li>
                <li>React</li>
                <li>Redux-Toolkit</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/heuzin/house-marketplace"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a
                  href="https://house-marketplace-ten-khaki.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visit website" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>House Marketplace</h3>
              <p>
                Find and list houses for sale or for rent. This is a
                React/Firebase v9 project.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>TypeScript</li>
                <li>React</li>
                <li>Firebase/Firestore</li>
                <li>Firebase-auth</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/heuzin/github-finder"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a
                  href="https://github-finder-nu-two.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visit website" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Github Finder</h3>
              <p>
                Application integrated with Github API to search for users
                profiles and display their detailed info and latest
                repositories.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>TypeScript</li>
                <li>React</li>
                <li>Context API</li>
                <li>Github API</li>
                <li>Tailwind</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
