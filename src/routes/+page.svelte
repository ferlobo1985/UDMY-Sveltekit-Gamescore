<script>
    import articlesStore from "$lib/stores/articles.store";
    import { onMount } from "svelte";
    import Loader from "$lib/components/Utils/loader.svelte";

    articlesStore.subscribe(store=>{
        console.log(store)
    })

    onMount(async()=>{
        if(!$articlesStore.posts?.length){
            await articlesStore.getHomeArticles()
        }
    })

</script>

{#if $articlesStore.posts.length <= 0}
    <Loader/>
{:else}
    posts here
{/if}


