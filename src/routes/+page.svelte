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

    <button
        class="btn btn-primary"
        on:click={()=>articlesStore.loadMoreArticles($articlesStore.lastVisible)}
    >   
        Load more
    </button>


{/if}


