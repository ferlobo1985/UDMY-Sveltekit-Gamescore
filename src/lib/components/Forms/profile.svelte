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
		/>
	</div>

    <div class="mb-3">
		<input
            class="form-control"
			type="text"
            placeholder="Enter your lastname"
			name="lastname"
			id="lastname"
			value={form?.lastname || ''}
		/>
	</div>

    <button type="submit" class="btn btn-primary">
		Update profile
    </button>
</form>
