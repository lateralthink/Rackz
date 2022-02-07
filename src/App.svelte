<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Intro from "./scenes/Intro.svelte";
</script>

<Router>
  <Route path="/">
    <Intro />
  </Route>
</Router>
