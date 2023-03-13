import style from "./Services.module.css";
import icon1 from "./assets/images/services1.svg";
import icon2 from "./assets/images/services2.svg";
import icon3 from "./assets/images/services3.svg";

const Services = () => {
  return (
    <div className={style.Services}>
      <div className={style.container}>
        <div className={style.title}>
          <h5>Services</h5>
          <h1>
            What actually <br></br> I love to do{" "}
          </h1>
        </div>
        <div className={style.works}>
          <div className={style.work}>
            <div className={style.work_icon}>
              <img src={icon1} alt="icon" />
              <h3>UX Research</h3>
            </div>
            <div className={style.work_title}>
              <p>
                New demos are continually added and buying a single license for
                Mak gives you access to all of what's shown below, plus
                everything that will be added in the future.
              </p>
            </div>
          </div>
          <div className={style.work}>
            <div className={style.work_icon}>
              <img src={icon2} alt="icon" />
              <h3>Brand Design</h3>
            </div>
            <div className={style.work_title}>
              <p>
                New demos are continually added and buying a single license for
                Mak gives you access to all of what's shown below, plus
                everything that will be added in the future.
              </p>
            </div>
          </div>
          <div className={style.work}>
            <div className={style.work_icon}>
              <img src={icon3} alt="icon" />

              <h3>Web Development</h3>
            </div>
            <div className={style.work_title}>
              <p>
                New demos are continually added and buying a single license for
                Mak gives you access to all of what's shown below, plus
                everything that will be added in the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
