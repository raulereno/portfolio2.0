import React from "react";

const Resume = ({ leng_resume }) => {
  return (
    <section id="container_resume">
      <h2>
        <b>{leng_resume.title}</b>
      </h2>
      <p>{leng_resume.description}</p>
      <div className="resume">
        <div className="education">
          <h3>
            <b>{leng_resume.title}</b>
          </h3>
          <ul>
            <li>
              <h4>
                <b>Full Stack Developer</b>
              </h4>
              <p>{leng_resume.education.henry.description}</p>
              <a
                href="https://certificates.soyhenry.com/cert?id=236bee14-f685-4331-b118-5b0609495d0e"
                target="_blank"
                rel="noopener noreferrer"
              >
                {leng_resume.education.link_text}
              </a>
            </li>
            <li>
              <h4>
                <b>Front-End React</b>
              </h4>
              <p>{leng_resume.education.coderHouse.frontend.description}</p>
              <a
                href="https://postimg.cc/NKJdDpVV"
                target="_blank"
                rel="noopener noreferrer"
              >
                {leng_resume.education.link_text}
              </a>

              <h4>
                <b>Full Stack Developer</b>
              </h4>
              <p>{leng_resume.education.coderHouse.fullstack.description}</p>
            </li>
            <li>
              <h4>
                <b>{leng_resume.education.utnfr.title}</b>
              </h4>
              <p>{leng_resume.education.utnfr.description}</p>
              <a
                href={leng_resume.education.utnfr.certificate}
                target="_blank"
                rel="noopener noreferrer"
              >
                {leng_resume.education.link_text}
              </a>
            </li>
          </ul>
        </div>
        <div className="work_experience">
          <h3>
            <b>{leng_resume.employmentHistory.title}</b>
          </h3>
          <ul>
            <li>
              <div className="circle_list"></div>
              <h4>
                <b>{leng_resume.employmentHistory.henry.title}</b>
              </h4>
              <p>{leng_resume.employmentHistory.henry.description}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
