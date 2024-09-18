import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();
  console.log(profile);
  return (
    <div className="container border text-slate-600  mx-auto my-12 px-6 py-10 bg-white rounded-md shadow-sm space-y-9">
      <h1 className="text-2xl text-blue-700 font-bold mb-6">About</h1>
      <p>
        This is{" "}
        <strong className="text-blue-800 font-semibold hover:scale-105 duration-500">
          {profile?.user?.name}
        </strong>{" "}
        a proficient full stack developer with a robust skill set spanning both
        front-end and back-end technologies. With a passion for building
        dynamic, responsive, and user-friendly web applications, Nikhil excels in
        crafting seamless digital experiences.
      </p>
      <h2 className="font-semibold text-blue-800 text-xl">
        Technical Expertise:
      </h2>
      <p>

        Back-End: Proficient in server-side technologies including Node.js,
        Express.js, and Django. Experienced with database management using SQL
        and NoSQL databases like MySQL, PostgreSQL, and MongoDB. DevOps:
        Knowledgeable in containerization and orchestration tools such as Docker
        and Kubernetes. Familiar with continuous integration and deployment
        (CI/CD) pipelines. Cloud Services: Experience with cloud platforms like
        AWS, Azure, and Google Cloud, enabling scalable and reliable application
        deployment.
      </p>
      <h2 className="font-semibold text-blue-800 text-xl">
        Professional Highlights:
      </h2>
      <p>
        Successfully developed and deployed numerous full-stack applications,
        demonstrating strong problem-solving skills and a keen eye for detail.
        Collaborated with cross-functional teams to deliver high-quality
        software solutions within tight deadlines. Continuously learning and
        adapting to emerging technologies and industry trends to stay ahead in
        the fast-evolving tech landscape.
      </p>
      <br />
      <span>
        Nikhil Y is dedicated to leveraging his expertise to contribute to
        innovative projects and drive technological advancements. Whether
        working on front-end interfaces or back-end logic, he is passionate
        about delivering exceptional digital solutions that meet user needs and
        exceed client expectations.
      </span>
      <h2 className="font-semibold text-blue-800 text-xl">
        Personal Interests and Inspiration:
      </h2>
      <p>
        Beyond his professional achievements, Nikhil is a big fan of cricket and
        holds immense admiration for Virat Konhli His favorite
        person and biggest inspiration is his twin brother,{" "}
        <>Ankush.</> 
      </p>
    </div>
  );
}

export default About;
