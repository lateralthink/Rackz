<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Intro from "./scenes/Intro.svelte";
  import Index from "./scenes/Index.svelte";
</script>

<Router>
  <Route path="/">
    <Intro />
  </Route>
  <Route path="index" component={Index} />
</Router>
