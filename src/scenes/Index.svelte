<script>
  alert(1);
</script>

<div
  class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal"
>
  <section class="bg-white py-8">
    <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
      <nav id="store" class="w-full z-30 top-0 px-6 py-1">
        <div
          class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3"
        >
          <a
            class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
          >
            <img src="./logo.svg" alt="Rackz Gallery" width="40" />
          </a>

          <!-- <div class="flex items-center" id="store-nav-content">

                      <a class="pl-3 inline-block no-underline hover:text-black" href="#">
                          <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z"></path>
                          </svg>
                      </a>

                      <a class="pl-3 inline-block no-underline hover:text-black" href="#">
                          <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path>
                          </svg>
                      </a>

                  </div> -->
        </div>
      </nav>

      <script
        src="https://defi.molekulon.club/build/buyablealbum.js"
        chain="4"
        contract="0xd089fc14ea90fe70585bd18422d8751f67ed7714"
        visibility="Extended"
        features="Buyable"></script>
    </div>
  </section>

  <section class="bg-white py-8">
    <div class="container py-8 px-6 mx-auto">
      <a
        class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8"
        href="#"
      >
        About
      </a>

      <p class="mt-8 mb-8">
        Digital technology and skateboarding together have become a new vehicle
        for art
      </p>

      <p class="mb-8">
        We make a commitment to the artists we fund: at least 20% of all revenue
        at Rackz Gallery NFTs Albums goes directly to the artist involved. We
        help empower youth around the world, build new professionals and develop
        the skate art community.
      </p>
      <p class="mb-8">
        By buying limited editions of NFTs from Rackz Gallery, our artists &
        community have a direct role in creating lasting changes. Together, we
        work towards a brighter future for skate art.
      </p>
    </div>
  </section>

  <footer class="container mx-auto bg-white py-8 border-t border-gray-400">
    <div class="container flex px-3 py-8 ">
      <div class="w-full mx-auto flex flex-wrap">
        <div class="flex w-full lg:w-1/2 ">
          <div class="px-3 md:px-0">
            <h3 class="font-bold text-gray-900">About</h3>
            <p class="py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              vel mi ut felis tempus commodo nec id erat. Suspendisse
              consectetur dapibus velit ut lacinia.
            </p>
          </div>
        </div>
        <div class="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
          <div class="px-3 md:px-0">
            <h3 class="font-bold text-gray-900">Social</h3>
            <ul class="list-reset items-center pt-3">
              <li>
                <a
                  class="inline-block no-underline hover:text-black hover:underline py-1"
                  href="#">Add social links</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer utilities {
    .mlkln-album {
      @apply flex flex-wrap;
    }

    .mlkln-album-card {
      @apply w-full md:w-1/3 xl:w-1/4 p-6;
    }

    .mlkln-album-card > figure > img {
      transition: all 0.3s;
      transform: scale(1);
    }
    .mlkln-album-card > figure > img:hover {
      @apply shadow-lg shadow-gray-400;
      transform: scale(1.02);
    }
    .mlkln-album-card-content {
      @apply mt-3;
    }

    .mlkln3-buy-button button {
      @apply mt-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow;
    }
  }
</style>
