import './AboutMe.css';

const AboutMe: React.FC<{ about: Object }> = ({}) => {
  return (
    <div className='about-me'>
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
        assumenda accusamus voluptatum, saepe odit vero quod dolor ducimus
        nostrum blanditiis aliquid nam inventore est beatae molestias dicta
        similique magni non!
      </p>
      <span>
        <p>Position at Compnay at Location</p>
      </span>
      <span>
        <p>Studied English at BlahBlah University</p>
      </span>
      <span>
        <p>Lives in BlahBlah Location</p>
      </span>
      <span>
        <p>From Oakland, California</p>
      </span>
      <span>
        <p>Followed by 1,063 people</p>
      </span>
    </div>
  );
};

export default AboutMe;
