<script>
  import DecisionTree from "./DecisionTree.svelte";

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
</script>



<main class="container">
  <DecisionTree tree={tree} />
  <h1>First page testing June 17!</h1>
  <h1>Hello and welcome to my site!</h1>
  <div><a href="https://pointscalculator.pages.dev/">Points calculator (Australia)</a></div>
  <a href="/about">About my site</a>

  
</main>

<style>
</style>
