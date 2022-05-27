<script lang="ts">
  import { Link } from "svelte-navigator";

  export const RABBIT_WIDTH = Math.min(180, window.innerHeight * 0.15);
  const RATIO = 1.3342618384;
  export const RABBIT_HEIGHT = RABBIT_WIDTH * RATIO;
  const INTERVAL = 1000;

  import Particles from "../Particles.svelte";

  let particlesConfig = {
    particles: {
      number: {
        value: 10,
        density: {
          enable: true,
          value_area: 50,
        },
      },
      color: {
        value: "#000",
      },
      shape: {
        type: "image",
        options: {
          image: [
            {
              src: "/assets/r.svg",
              width: 200,
              height: 247,
            },
          ],
        },
      },
      size: {
        value: 15,
        random: true,
        animation: {
          enable: true,
          speed: 20,
          minimumValue: 0.1,
          sync: false,
        },
      },
      links: {
        enable: true,
        color: "#000000",
      },
      move: {
        enable: true,
      },
    },
  };

  let onParticlesLoaded = (event) => {
    const particlesContainer = event.detail.particles;

    // you can use particlesContainer to call all the Container class
    // (from the core library) methods like play, pause, refresh, start, stop
  };

  let onParticlesInit = (main) => {
    // you can use main to customize the tsParticles instance adding presets or custom shapes
  };

  const getPosition = () => ({
    x: (window.innerWidth - RABBIT_WIDTH) * Math.random(),
    y: (window.innerHeight - RABBIT_HEIGHT) * Math.random(),
  });

  const initialPos = getPosition();

  export let posX = initialPos.x;
  export let posY = initialPos.y;

  setInterval(() => {
    const { x, y } = getPosition();
    posX = x;
    posY = y;
  }, INTERVAL);
</script>

<div class="particles-wrapper flex flex-col justify-center">
  <Particles
    id="tsparticles"
    options={particlesConfig}
    on:particlesLoaded={onParticlesLoaded}
    on:particlesInit={onParticlesInit}
  />
  <div class="menu-wrap bg-black py-6 px-10 z-50 flex flex-col items-center">
    <ul class="flex flex-col md:flex-row grow justify-center items-center">
      <li>
        <a class="text-base md:text-xl text-white uppercase m-8" href="/inner.html#gallery"
          >Virtual gallery</a
        >
      </li>
      <li>
        <a class="text-base md:text-xl text-white uppercase m-8" href="/inner.html#about"
          >About</a
        >
      </li>
      <li>
        <a class="text-xl text-white uppercase m-8" href="/inner.html#team"
          >Team</a
        >
      </li>
      <li>
        <a class="text-base md:text-xl text-white uppercase m-8" href="/inner.html#media"
          >Media</a
        >
      </li>
      <li>
        <a class="text-base md:text-xl text-white uppercase m-8" href="/inner.html#shop"
          >Shop</a
        >
      </li>
      <li>
        <a class="text-base md:text-xl text-white uppercase m-8" href="/inner.html#club"
          >Private club</a
        >
      </li>
      <li>
        <a class="text-base md:text-xl text-white uppercase m-8" href="/inner.html#contact"
          >Contact</a
        >
      </li>
    </ul>
    <img src="/assets/gallery-logo.svg" class="logo mt-20 mb-11" alt="Rackz Gallery" />
  </div>
</div>

<!-- <style>
  .particles-wrapper {
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

  .logo {
    width: 200px;
  }
</style> -->
