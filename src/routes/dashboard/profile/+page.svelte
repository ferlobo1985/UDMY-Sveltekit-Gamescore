<script>
    import ProfileForm from '$lib/components/Forms/profile.svelte';
    export let data;
    export let form;

</script>


<div>
    <h3>Profile</h3>
    <hr/>
    <div>
        <ProfileForm form={{...data.user,...form}}/>
    </div>
</div>
