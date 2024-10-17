<script>
    import articlesStore from "$lib/stores/articles.store";
    import { onMount } from "svelte";

    onMount(async()=>{
        await articlesStore.getHomeArticles()
    })

</script>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
