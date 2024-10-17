<script>
    import ArticleForm from '$lib/components/Forms/article.svelte';
    export let data;
    export let form;
</script>

<div>
    <h3>Edit article</h3>
    <hr/>
    <div>
        <ArticleForm form={{...data.article,...form}} />
    </div>
</div>
