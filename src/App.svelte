<script lang="ts">
  import Router from 'svelte-spa-router'
  import routes from './routes'
  import Footer from './layout/Footer.svelte'
</script>

<div class="max-w-[768px] my-0 mx-auto">
  <Router {routes} />

  <Footer />
</div>
