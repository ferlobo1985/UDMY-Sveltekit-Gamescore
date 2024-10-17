<script>
    //@ts-nocheck
    import { goto } from "$app/navigation";
    export let data;
</script>


<h1>Articles</h1>
<table class="table table-dark">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Game</th>
            <th scope="col">Title</th>
            <th scope="col">Edit</th>
        </tr>
    </thead>
    <tbody>
    {#each data.articles as article,index (article.id)}
         <tr>
            <th scope="row">{index+1}</th>
            <th>{article.game}</th>
            <td><a href="/article/{article.id}" class="link-info">{article.title}</a></td>
            <td>
                <button
                    class="btn btn-outline-warning btn-sm"
                    on:click={()=> goto(`/dashboard/edit/${article.id}`)}
                >
                    Edit article
                </button>
            </td>

        </tr>
    {/each}
    </tbody>
</table>
