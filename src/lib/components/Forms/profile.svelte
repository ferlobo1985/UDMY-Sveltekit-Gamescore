<script>
    export let form
</script>

<form method="POST">
    <div class="mb-3">
		<input
            class="form-control"
			type="text"
            placeholder="Enter your firstname"
			name="firstname"
			id="firstname"
			value={form?.firstname || ''}
			class:is-invalid={form?.errors?.firstname}
		/>
		{#if form?.errors?.firstname}
			<div class="invalid-feedback">
				{form?.errors?.firstname}
			</div>
		{/if}
	</div>

    <div class="mb-3">
		<input
            class="form-control"
			type="text"
            placeholder="Enter your lastname"
			name="lastname"
			id="lastname"
			value={form?.lastname || ''}
			class:is-invalid={form?.errors?.lastname}
		/>
		{#if form?.errors?.lastname}
			<div class="invalid-feedback">
				{form?.errors?.lastname}
			</div>
		{/if}
	</div>

    <button type="submit" class="btn btn-primary">
		Update profile
    </button>
</form>
