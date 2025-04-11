const questions = [
  {
    prompt: "What is the capital of France?",
    type: "multiple-choice",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    correct: 0,
  },
  {
    prompt: "Select all even numbers.",
    type: "multiple-answer",
    choices: ["1", "2", "3", "4"],
    correct: [1, 3],
  },
  {
    prompt: "The sky is blue.",
    type: "true-false",
    choices: ["False", "True"],
    correct: 1,
  },
];

export default questions;
