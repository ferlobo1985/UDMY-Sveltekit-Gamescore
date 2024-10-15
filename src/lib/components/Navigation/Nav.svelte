<script>
    import { page } from '$app/stores';
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
				
				<li class="nav-item">
					<button class="nav-link">Logout</button>
				</li>
				<li class="nav-item">
					<a href="/dashboard" class="nav-link"
                        class:active={$page.url.pathname === '/dashboard'}
                    >Dashboard</a>
				</li>
				<li class="nav-item">
					<a href="/signin" class="nav-link"
                        class:active={$page.url.pathname === '/signin'}
                    >Sign in</a>
				</li>
			</ul>
		</header>
	</div>
</header>