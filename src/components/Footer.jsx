import { personal } from "../data/portfolioData.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>Payal Dhage • Data Analytics Portfolio</p>
        <div>
          <a href={personal.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
          <a href={`mailto:${personal.email}`} aria-label="Email"><i className="bi bi-envelope-fill"></i></a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="bi bi-github"></i></a>
        </div>
      </div>
    </footer>
  );
}
