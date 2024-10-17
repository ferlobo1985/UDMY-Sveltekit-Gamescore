<script>
    //@ts-nocheck
    export let data;
    console.log(data)
</script>

{#if data?.admin}
    <a href="/dashboard/edit/{data.article.id}"
        class="link-info text-decoration-none"
    >
        Edit Article
    </a>
    <hr/>
{/if}


<div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
    <div class="col-lg-6 px-0">
        <h1 class="display-4 fst-italic">{data.article.game}</h1>
        <p class="lead my-3">{data.article.title}</p>
    </div>
</div>

{#if !data.article.owner.firstname && !data.article.owner.lastname}
    <p class="blog-post-meta">Reviewed by <strong>Anonymous user</strong></p>
{:else} 
    <p class="blog-post-meta">Reviewed by <strong>{data.article.owner.firstname} {data.article.owner.lastname}</strong></p>
{/if}


<p>{data.article.description}</p>
<hr/>
<h4>Rating: {data.article.rating} Stars</h4>





