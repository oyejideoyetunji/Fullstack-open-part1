import React, { useState } from "react";

import { anecdotes } from "./anecdotes";

function App() {
  const getRandomIndexInRange = (range) => {
    return Math.floor(Math.random() * range);
  };

  const getZerosArrayInRange = (range) => {
    return Array.apply(null, { length: range }).map(() => 0);
  };

  let [selectedIndex, setSelectedIndex] = useState(
    getRandomIndexInRange(anecdotes.length)
  );

  let [votes, setVotes] = useState(getZerosArrayInRange(anecdotes.length));

  const selectAnIndex = () => {
    setSelectedIndex(getRandomIndexInRange(anecdotes.length));
  };

  const updateVotes = (votes) => {
    let newvotes = [...votes];
    newvotes[selectedIndex] += 1;
    return newvotes;
  };

  const getMostVoted = (votes) => {
    let maxVote = Math.max.apply(null, votes);
    return votes.indexOf(maxVote);
  };

  const handleVotes = (votes) => {
    setVotes(updateVotes(votes));
  };

  return (
    <main>
      <h1>Anecdote Of the day</h1>
      <section>
        <p>{anecdotes[selectedIndex]}</p>
        <p>
          <em>Has {votes[selectedIndex]} votes</em>
        </p>
        <section>
          <button onClick={() => handleVotes(votes)}>Vote</button>{" "}
          <button onClick={selectAnIndex}>Next Anecdote</button>
        </section>
      </section>
      <section>
        <h1>Most Voted Anecdote</h1>
        {votes[getMostVoted(votes)] === 0 ? (
          <p>
            <em>There are no votes yet</em>
          </p>
        ) : (
          <>
            <p>
              <em> " {anecdotes[getMostVoted(votes)]} " </em>
            </p>
            <p>
              is the most voted anecdote with{" "}
              <strong>{votes[getMostVoted(votes)]}</strong> Vote(s).
            </p>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
