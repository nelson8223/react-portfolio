import React from 'react';
import code from '../images/Screenshot 05.png';
import code01 from '../images/Screenshot 06.png';
import code02 from '../images/Screenshot 01.png';
export default function Portfolio() {
  return (
    <div>
      <h1>Here are my Links:</h1>

      <p><a href="https://github.com/nelson8223/Orlando-React-Portfolio">My GitHub Link</a></p>
      <img src={code} alt="me screenshot" />
      <p><a href="https://github.com/nelson8223">My Portfolio</a></p>
      <img src={code01} alt="me screenshot" />
      <p><a href="https://github.com/nelson8223/CSS-Orlando-Professional-Portfolio">My First Portfolio</a></p>
      <img src={code02} alt="me screenshot" />
    </div>
  );
}



