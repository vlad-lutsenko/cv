import React from "react";

import styles from "./MainPage.module.css";

const MainPage = () => {
  const contacts = [
    {
      name: "Address",
      value: "Kyiv, Ukraine",
      img: "./img/address.png",
      link: false,
    },
    {
      name: "Phone",
      value: "+38 063 565 22 83",
      img: "./img/tel.png",
      link: false,
    },
    {
      name: "Email",
      value: "lutsenko.vladyslav@gmail.com",
      img: "./img/envelope.png",
      link: false,
    },
    {
      name: "GitHub",
      value: "https://github.com/vlad-lutsenko",
      img: "./img/github.png",
      link: true,
    },
    {
      name: "LinkedIn",
      value: "https://www.linkedin.com/in/vladyslav-lutsenko/",
      img: "./img/linkedin.png",
      link: true,
    },
  ];

  const languages = [
    {
      name: "Ukrainian",
      level: "native speaker",
    },
    {
      name: "Russian",
      level: "native speaker",
    },
    {
      name: "English",
      level: "B2",
    },
  ];

  const techSkills = ["HTML5", "CSS3", "JS", "REACT", "REDUX", "NODE JS"];

  const projects = [
    {
      link: "https://goit-homework-4-lutsenko-vladyslav.netlify.app/",
      description: "movies search (study task)",
    },
    {
      link: "https://wallet-fp-28.netlify.app",
      description:
        "application created to make financial accounting easier (study group project)",
    },
    {
      link: "https://sampleforklok.netlify.app/",
      description: "ukrainian police web memorial - pet project, in process",
    },
  ];

  const experience = [
    {
      company: "ukrainian international airlines",
      position: "senior cabin crew member",
      start: "07/2016",
      end: "07/2020",
      description:
        "flight safety providing, in-flight service, cabin crew operation managing",
      location: "Kyiv, Ukraine",
    },
    {
      company: "ukrainian international airlines",
      position: "Cabin Crew Member",
      start: "07/2011",
      end: "07/2016",
      description: "flight safety providing, in-flight service",
      location: "Kyiv, Ukraine",
    },
  ];

  const education = [
    {
      school: "GoIT",
      start: "08/2019",
      end: "08/2020",
      specialty: "Full stack developer",
      location: "Kyiv, Ukraine",
    },
    {
      school: "National Aviation University",
      start: "09/2007",
      end: "05/2011",
      specialty: "Aircraft maintenance",
      location: "Kyiv, Ukraine",
    },
  ];

  const softSkills = [
    "stress resistant",
    "responsible",
    "can work at time pressure circumstances",
    "punctual",
    "calm",
    "friendly",
  ];

  return (
    <div className={styles.mainPage}>
      <div className={styles.firstColumn}>
        <div className={styles.imgBlock}>
          <img
            src={require("./img/cv_square.jpg")}
            alt="vlasdyslav_lutsenko"
            className={styles.image}
          />
        </div>
        <div className={styles.contacts}>
          <p className={styles.blockTitle}>contacts</p>
          <ul className={styles.list}>
            {contacts.map((contact) => {
              const { name, value, link, img } = contact;
              return (
                <li
                  className={`${styles.listItem} ${styles.contact} ${name}`}
                  key={name}
                >
                  {link ? (
                    <a
                      href={value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkLining}
                    >
                      <img
                        src={require(`${img}`)}
                        alt={name}
                        className={styles.contactImage}
                      />
                      <span className={styles.contactData}>{value}</span>
                    </a>
                  ) : (
                    <>
                      <img
                        src={require(`${img}`)}
                        alt={name}
                        className={styles.contactImage}
                      />
                      <span className={styles.contactData}>{value}</span>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.languages}>
          <p className={styles.blockTitle}>languages</p>
          <ul className={styles.list}>
            {languages.map((language) => {
              const { name, level } = language;
              return (
                <li key={name} className={styles.listItem}>
                  <p className={styles.contactTitle}>
                    {name} - {level}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.secondColumn}>
        <h1 className={styles.myName}>Vladyslav Lutsenko</h1>
        <p className={styles.objective}>junior front end developer</p>
        <p className={styles.blockTitle}>Tech skills</p>
        <div className={styles.techSkills}>
          <ul className={`${styles.listInRow} ${styles.list}`}>
            {techSkills.map((skill) => {
              return (
                <li key={skill} className={styles.listItem}>
                  <p className={styles.techSkill}>{skill}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.projects}>
          <p className={styles.blockTitle}>project experience</p>
          <ul className={styles.list}>
            {projects.map((project) => {
              const { link, description } = project;
              return (
                <li key={link} className={styles.listItem}>
                  <p>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {description}
                    </a>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.experience}>
          <p className={styles.blockTitle}>experience</p>
          <ul className={styles.list}>
            {experience.map((job) => {
              const {
                company,
                position,
                start,
                end,
                description,
                location,
              } = job;
              return (
                <li key={start} className={styles.listItem}>
                  <div className={styles.workInRow}>
                    <p className={styles.company}>{company}</p>
                    <p>{location}</p>
                  </div>
                  <div className={styles.workInRow}>
                    <p className={styles.position}>{position}</p>
                    <p>
                      {start} - {end}
                    </p>
                  </div>

                  <p>{description}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.education}>
          <p className={styles.blockTitle}>education</p>
          <ul className={styles.list}>
            {education.map((univer) => {
              const { school, start, end, specialty, location } = univer;
              return (
                <li key={school} className={styles.listItem}>
                  <p>{school}</p>
                  <p>{location}</p>
                  <p>{specialty}</p>
                  <p>
                    {start}-{end}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.softSkills}>
          <p className={styles.blockTitle}>soft skills</p>
          <ul className={` ${styles.list}`}>
            {softSkills.map((skill) => (
              <li key={skill} className={styles.listItem}>
                <p>{skill}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
