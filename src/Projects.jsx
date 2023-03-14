import style from "./Projects.module.css";
import project from "./assets/images/project1.jpg"
import project2 from "./assets/images/project2.jpg"
import project3 from "./assets/images/project3.jpg"

const About = () => {
  return (
    <div className={style.About_section}>
      <div className={style.container}>
        <div className={style.title}>
          <h5>Projects</h5>
          <h1>
            All Creative <br />
            Projects
          </h1>
        </div>
        <div />
        <div className={style.projects_banner}>
          <img src={project} alt="Projects" className={style.img1} />
          <img src={project2} alt="Projects" className={style.img2} />
          <img src={project} alt="Projects" className={style.img3} />
          <img src={project3} alt="Projects" className={style.img4} />
        </div>
      </div>
    </div>
  );
};

export default About;
