<script>
  import { mainTitle } from "$lib/helpers/constants.js";
  let showMenu = false;

  function toggleNavbar() {
    showMenu = !showMenu;
  }
</script>

<div>
  <div>
    <nav
      class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <h1 class="h1">
          <a
            class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"
            href="/">{mainTitle}</a
          >
        </h1>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={toggleNavbar} class="flex md:hidden">
          <button type="button" class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0
        md:flex-row md:items-center md:space-x-10 md:mt-0
        {showMenu ? 'flex' : 'hidden'}"
      >
        <a class="" href="/">Home</a>
        <a class="" href="/blog">Blogs</a>
        <a class="" href="/articles">Articles</a>
        <a class="" href="/contact">Contact US</a>
        <a class="" href="/about">About</a>
      </div>
    </nav>
  </div>
</div>

<style>
</style>
