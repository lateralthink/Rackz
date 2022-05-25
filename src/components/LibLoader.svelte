
  <script bind:this={script} src={url} chain={chain} contract={contract} visibility={visibility} features={features} />


<script>
  import { onMount, createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let url;
  export let chain;
  export let contract;
  export let visibility;
  export let features;
  let script;

  onMount(async () => {
    script.addEventListener('load', () => {
      dispatch('loaded');
    })

    script.addEventListener('error', (event) => {
      console.error("something went wrong", event);
      dispatch('error');
    });
  });
</script>