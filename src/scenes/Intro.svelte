<script lang="ts">
  import { Link } from "svelte-navigator";

  export const RABBIT_WIDTH = 239;
  export const RABBIT_HEIGHT = 319;
  const INTERVAL = 1000;

  import Particles from "../Particles.svelte";

  let particlesConfig = {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 700,
        },
      },
      color: {
        value: "#C5C",
      },
      shape: {
        type: "image",
        options: {
          image: [
            {
              src: "http://localhost:8080/r.svg",
              width: 300,
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
        color: "#C5C",
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

<div class="particles-wrapper">
  <Particles
    id="tsparticles"
    options={particlesConfig}
    on:particlesLoaded={onParticlesLoaded}
    on:particlesInit={onParticlesInit}
  />
  <div class="rabbitLink" style="top: {posY}px;left: {posX}px">
    <Link class="rabbitLink" to="index">
      <img
        src="/rabbit.svg"
        alt="Rabbit"
        style="width: {RABBIT_WIDTH}px;height: {RABBIT_HEIGHT}px"
      />
    </Link>
  </div>
</div>

<style>
  .particles-wrapper {
    background-color: #222;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  .rabbitLink {
    position: fixed;
    top: 0px;
    left: 0px;
  }
</style>
