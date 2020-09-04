import React from "react";

const Total = ({ parts }) => {
  let [part1, part2, part3] = parts;

  return (
    <section>
      <p>
        Number of exercises :{" "}
        {part1.exercises + part2.exercises + part3.exercises}
      </p>
    </section>
  );
};

export default Total;
