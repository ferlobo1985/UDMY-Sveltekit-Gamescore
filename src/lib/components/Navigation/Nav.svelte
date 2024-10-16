<script>
	import AuthStore from '$lib/stores/auth.store';
	import { logout } from '$lib/firebase/client/auth.client'
    import { page } from '$app/stores';

	// AuthStore.subscribe( cur =>{
	// 	console.log(cur,'readable')
	// })

</script>

<header>
	<div class="container">
		<header class="d-flex flex-wrap justify-content-center py-3 mb-2 border-bottom">
			<a
				href="/"
				class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
			>
				<span class="fs-4">Gamescore</span>
			</a>

			<ul class="nav nav-pills">
				<li class="nav-item">
					<a href="/" class="nav-link"
                        class:active={$page.url.pathname === '/'}
                    >Home</a>
				</li>
				
				{#if $AuthStore.isAuth}
					<li class="nav-item">
						<button on:click={()=>logout()} class="nav-link">Logout</button>
					</li>
					<li class="nav-item">
						<a href="/dashboard" class="nav-link"
							class:active={$page.url.pathname.match('/dashboard')}
						>Dashboard</a>
					</li>
				{:else}
					<li class="nav-item">
						<a href="/signin" class="nav-link"
							class:active={$page.url.pathname === '/signin'}
						>Sign in</a>
					</li>
				{/if}
			</ul>
		</header>
	</div>
</header>