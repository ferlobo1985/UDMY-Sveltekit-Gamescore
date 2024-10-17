<script>
    import {enhance} from '$app/forms';
    export let form;
</script>

<form use:enhance method="POST">
    <div class="mb-3">
		<input
            class="form-control"
			type="text"
            placeholder="Game title"
			name="game"
			id="game"
            value={form?.game || ''}
            class:is-invalid={form?.errors?.game}
		/>
        {#if form?.errors?.game}
            <div class="invalid-feedback">
                {form?.errors?.game}
            </div>
        {/if}
	</div>

    <div class="mb-3">
		<input
            class="form-control"
			type="text"
            placeholder="Article title"
			name="title"
			id="title"
            value={form?.title || ''}
            class:is-invalid={form?.errors?.title}
		/>
        {#if form?.errors?.title}
            <div class="invalid-feedback">
                {form?.errors?.title}
            </div>
        {/if}
	</div>

    <div class="mb-3">
		<textarea
			class="form-control"
			placeholder="Game description"
			id="description"
			name="description"
			rows="5"
            value={form?.description || ''}
            class:is-invalid={form?.errors?.description}
		/>
        {#if form?.errors?.description}
            <div class="invalid-feedback">
                {form?.errors?.description}
            </div>
        {/if}
	</div>

    <div class="mb-3">
		<select 
            class="form-select"
            id="rating"
			name="rating"
            value={form?.rating || 'Select a rating'}
            class:is-invalid={form?.errors?.rating}
        >
            <option value="Select a rating" selected disabled>Select a rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        {#if form?.errors?.rating}
            <div class="invalid-feedback">
                {form?.errors?.rating}
            </div>
        {/if}
	</div>

	<button type="submit" class="btn btn-primary">
        Submit
    </button>
</form>

