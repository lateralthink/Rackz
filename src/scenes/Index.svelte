<script>
  import LibLoader from "../components/LibLoader.svelte";
</script>

<div class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
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
        </div>
      </nav>
      <LibLoader
        url="https://defi.molekulon.club/build/buyablealbum.js"
        chain="4"
        contract="0xd089fc14ea90fe70585bd18422d8751f67ed7714"
        visibility="Extended"
        features="Buyable"
      />
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
