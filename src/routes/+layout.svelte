<script>
    import Nav from "$lib/components/Navigation/Nav.svelte";
	import { setAccessToken } from "$lib/firebase/client/auth.client";
	import { onMount } from "svelte";

    /// NOTIFICATIONS
    import { ToastContainer, FlatToast }  from "svelte-toasts";

    export let data;
    let loading = true;
    onMount(async()=>{
        const user = await data.getAuthUser();
        await setAccessToken();
        loading = false
    })
</script>

{#if !loading}
    <main>
        <Nav/>
        <div class="container">
            <slot/>
        </div>
        <ToastContainer let:data={data}>
            <FlatToast {data}/>
        </ToastContainer>
    </main>
{/if}
