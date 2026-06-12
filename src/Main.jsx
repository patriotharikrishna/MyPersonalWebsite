import React from "react";

export default function Main() {
  return (
    <>
    <div className="mainContent">
      <div className="socialLinks">
        <a href="https://twitter.com/patriot_krishna" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <img src="/twitter.png" alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com/in/harikrishna-h-601b05147/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src="/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/patriotharikrishna" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src="/github.png" alt="GitHub" />
        </a>
      </div>
      <img src="/myImage.jpeg" alt="My Image" className="dpImage" />
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
          <a href="https://analyseresume.netlify.app/">
            <div className="projectHeader">
            <h2>ResAi</h2>
            <span className="projectTag">AI · Resume Tool</span>
            </div>
          </a>
          <p>ResAi is an AI-powered resume analyser that checks your resume for ATS readiness, weak wording, and keyword gaps against a job description. Upload a PDF, DOCX, or TXT resume, paste the employer's job posting, and get an instant score, issue breakdown, and a chat assistant to help you fix it — all before you apply.</p>
        </article>
      </section>
      </>
  );
}
