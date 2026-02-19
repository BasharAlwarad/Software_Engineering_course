import { Link } from 'react-router';

const About = () => {
  return (
    <div>
      <h1>welcome to about page</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, eaque
        dolorem ab, placeat nam eum distinctio pariatur voluptatibus voluptatum
        nihil quam ut? Autem voluptas velit deserunt neque quidem! Mollitia, et.
      </p>

      <ul>
        <li>
          <Link to={`/users/1`}>User 1</Link>
        </li>
        <li>
          <Link to={`/users/2`}>User 2</Link>
        </li>
        <li>
          <Link to={`/users/3`}>User 3</Link>
        </li>
        <li>
          <Link to={`/users/4`}>User 4</Link>
        </li>
      </ul>
    </div>
  );
};

export default About;
