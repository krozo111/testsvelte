const tree = [
    {
      question: "Is it a mammal?",
      trueBranch: {
        question: "Does it have fur?",
        trueBranch: "Dog",
        falseBranch: "Whale"
      },
      falseBranch: {
        question: "Is it a bird?",
        trueBranch: "Penguin",
        falseBranch: "Snake"
      }
    }
  ];