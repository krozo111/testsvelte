<script>
// @ts-nocheck


    
    export let tree;
    let currentNode = tree[0];
    let answer = null;
  
    function handleAnswer(yes) {
      if (typeof currentNode.trueBranch === "string") {
        answer = yes ? currentNode.trueBranch : currentNode.falseBranch;
        return;
      }
  
      currentNode = yes ? currentNode.trueBranch : currentNode.falseBranch;
    }
  </script>
  
  <main>
    {#if answer !== null}
      <h2>The answer is {answer}</h2>
    {:else}
      <h2>{currentNode.question}</h2>
      <button on:click={() => handleAnswer(true)}>Yes</button>
      <button on:click={() => handleAnswer(false)}>No</button>
    {/if}
  </main>
  