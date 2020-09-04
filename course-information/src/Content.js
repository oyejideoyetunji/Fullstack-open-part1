import React from "react";

const Part = ({ part }) => {
  let { name, exercises } = part;
  return (
    <>
      <p>Course Name : {name}</p>
      <p>Exercises : {exercises}</p>
    </>
  );
};

const Content = ({ parts }) => {
  return (
    <section>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </section>
  );
};

export default Content;
