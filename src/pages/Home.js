import React from "react";
import me from '../images/Screenshot 02.png';
import '../style/Home.css';


export default function Home() {
  return (
    <div>
      <h1> Home Page</h1>
      <img src={me} alt="me screenshot" />
      <h2>My experience at a Bootcamp:</h2>
      <p>
        Attending a full stack bootcamp has been an incredibly enriching
        experience, where I have learned a lot about software engineering.
        Throughout the program, I have gained a deep understanding of various
        front-end technologies such as HTML, CSS, Java, and Javascript, which
        have allowed me to create visually stunning and interactive web
        applications. Additionally, I have also delved into the backend of web
        development and have learned how to design, develop, and maintain
        databases, as well as build and deploy servers to create robust and
        scalable applications. The skills I have acquired during this bootcamp
        have not only given me a strong foundation in software engineering but
        have also prepared me to tackle complex projects and challenges that
        come with the ever-evolving tech industry.
      </p>
    </div>
  );

  
}






