import React, { useEffect, useState } from "react";

export default function Main() {
  const resAiImages = ["/ResAi_1.png", "/ResAi_2.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const [isMainHovered, setIsMainHovered] = useState(false);
  const [shouldFlip, setShouldFlip] = useState(false);

  useEffect(() => {
    if (!isMainHovered) {
      setShouldFlip(false);
      return;
    }

    const timer = setTimeout(() => {
      setShouldFlip(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, [isMainHovered]);

  useEffect(() => {
    if (!isHovering) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((index) => (index + 1) % resAiImages.length);
    }, 4300);

    return () => clearInterval(interval);
  }, [isHovering]);

  useEffect(() => {
    if (isHovering) {
      setProgressKey((key) => key + 1);
    }
  }, [currentImageIndex, isHovering]);

  return (
    <>
    <div
      className="mainContent"
      onMouseEnter={() => setIsMainHovered(true)}
      onMouseLeave={() => setIsMainHovered(false)}
    >
      <div className="socialLinks">
        <a href="https://twitter.com/patriot_krishna" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <img src="/twitter.png" alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com/in/harikrishna-h-601b05147/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src="/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/patriotharikrishna/MyPersonalWebsite" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src="/github.png" alt="GitHub" />
        </a>
      </div>
      <img src="/myImage.jpeg" alt="My Image" className={`dpImage ${shouldFlip ? "flip" : ""}`} />
      <div className="profileText">
        <h1 className="MyName">Harikrishna H</h1>
        <p className="bio">
          I'm a developer, who enjoys building practical,
          user-focused web tools. Currently exploring full-stack development
          and turning side project ideas into real products.
        </p>
      </div>
    </div>
      <section className="projectsSection">
        <h1>Projects</h1>
        <article className="projectCard">
          <a
            href="https://analyseresume.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="projectHeader">
              <h2>ResAi</h2>
              <span className="projectTag">AI · Resume Tool</span>
            </div>
          </a>

          <div className="projectContent">
            <div
              className="projectImageWrapper"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <img
                className="projectHeroImage"
                src={resAiImages[currentImageIndex]}
                alt={`ResAi screenshot ${currentImageIndex + 1}`}
              />
              <div className="imageProgress">
                <div
                  key={progressKey}
                  className={`imageProgressFill ${isHovering ? "active" : ""}`}
                />
              </div>
            </div>
            <div className="projectDetails">
              <p>
                ResAi is an AI-powered resume analyser that checks your resume for ATS readiness, weak wording, and keyword gaps against a job description. Upload a PDF, DOCX, or TXT resume, paste the employer's job posting, and get an instant score, issue breakdown, and a chat assistant to help you fix it — all before you apply.
              </p>
            </div>
          </div>
        </article>
      </section>
      </>
  );
}
