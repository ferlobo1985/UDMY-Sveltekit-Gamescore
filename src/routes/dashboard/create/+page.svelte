<script>
    import ArticleForm from '$lib/components/Forms/article.svelte';
    export let form;
</script>

<div>
    <h3>Create article</h3>
    <hr/>
    <div>
        <ArticleForm {form}/>
    </div>
</div>
