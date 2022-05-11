<script lang="ts">
  import Router from 'svelte-spa-router'
  import routes from './routes'
  import Footer from './layout/Footer.svelte'
</script>

<div class="w-[100vw] h-[100vh] bg-gray-800">
  <Router {routes} />

  <Footer />
</div>
