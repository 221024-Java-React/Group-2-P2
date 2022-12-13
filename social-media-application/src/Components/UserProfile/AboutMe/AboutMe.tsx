import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <h2 className="about-title">About Me</h2>
      <div className="about-me">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          assumenda accusamus voluptatum, saepe odit vero quod dolor ducimus
          nostrum blanditiis aliquid nam inventore est beatae molestias dicta
          similique magni non!
        </p>
        <span>
          <p>Senior Trainer at Revature</p>
        </span>
        <span>
          <p>Studied Computer Science at BlahBlah University</p>
          <p>Graduated June 2010</p>
        </span>
        <span>
          <p>Lives in Dallas, TX</p>
        </span>
        <span>
          <p>From Oakland, California</p>
        </span>
        <span>
          <p>Followed by 1,063 people</p>
        </span>
      </div>
    </>
  );
};

export default AboutMe;
