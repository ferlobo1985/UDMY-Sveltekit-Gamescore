<script>
    import Nav from "$lib/components/Navigation/Nav.svelte";

    /// NOTIFICATIONS
    import { ToastContainer, FlatToast }  from "svelte-toasts";
</script>

<main>
    <Nav/>
    <div class="container">
        <slot/>
    </div>
    <ToastContainer let:data={data}>
        <FlatToast {data}/>
    </ToastContainer>
</main>