<script>
    import ProfileForm from '$lib/components/Forms/profile.svelte';
    import {toasts} from 'svelte-toasts';
    export let data;
    export let form;

    $:if(form && form.success === true){
        toasts.add({type:'success',description:'Updated'})
    }
</script>


<div>
    <h3>Profile</h3>
    <hr/>
    <div>
        <ProfileForm form={{...data.user,...form}}/>
    </div>
</div>
