<script>
    import articlesStore from "$lib/stores/articles.store";
    import { onMount } from "svelte";
    import Loader from "$lib/components/Utils/loader.svelte";
    import Masonry from 'svelte-bricks'

    articlesStore.subscribe(store=>{
        console.log(store)
    })

    onMount(async()=>{
        if(!$articlesStore.posts?.length){
            await articlesStore.getHomeArticles()
        }
    })

    $: items = $articlesStore.posts
    let [minColWidth, maxColWidth, gap] = [400, 800, 20]
    let width, height
</script>

{#if $articlesStore.posts.length <= 0}
    <Loader/>
{:else}
    <Masonry
        {items}
        {minColWidth}
        {maxColWidth}
        {gap}
        let:item
        bind:masonryWidth={width}
        bind:masonryHeight={height}
    >
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{item.description}</p>
                <a href="/article/{item.id}" class="btn btn-outline-primary">
                    Read article
                </a>
            </div>
        </div>
    </Masonry>

    <div class="mt-4 mb-4">
    <hr/>
    {#if $articlesStore.lastVisible}
        <button
            class="btn btn-primary"
            disabled={$articlesStore.loading}
            on:click={()=>articlesStore.loadMoreArticles($articlesStore.lastVisible)}
        >   
            {#if $articlesStore.loading}
                ...loading
            {:else}
                Load more    
            {/if}
        </button>
    {/if}
    </div>
{/if}


