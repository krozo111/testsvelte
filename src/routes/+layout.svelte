<script>
// Your selected Skeleton theme:
import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
// This contains the bulk of Skeletons required styles:
import '@skeletonlabs/skeleton/styles/skeleton.css';
// Finally, your application's global stylesheet (sometimes labeled 'app.css')
import '../app.css'
import { AppShell } from '@skeletonlabs/skeleton';
import Header from '$lib/components/header.svelte';
</script>


<AppShell>
	<svelte:fragment slot="header"><Header /></svelte:fragment>
  <hr class="!border-t-2" />
	<slot />
  <hr class="!border-t-4 !border-double" />
	<svelte:fragment slot="footer">Footers</svelte:fragment>
</AppShell>
<style>
  
</style>
