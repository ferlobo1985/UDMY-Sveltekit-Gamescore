<script>
    import { createForm } from 'felte';
    import { validator } from '@felte/validator-yup';
    import * as yup from 'yup';

    import { registerUser, signinUser } from '$lib/firebase/client/auth.client';
    import Loader from '$lib/components/Utils/loader.svelte'

    let formType = false;
    let loader = false;
    const schema = yup.object({
        email:yup.string().required(),
        password:yup.string().required()
    })

    const {form, errors} = createForm({
        onSubmit:(values)=>{
            handleSubmit(values)
        },
        extend:validator({schema})
    });


    const handleSubmit = (values) => {
        loader = true;
        if(formType){
            // REGISTER
            registerUser(values).finally(()=>{
                loader = false;
            });
        } else {
            // SIGNIN
            signinUser(values).finally(()=>{
                loader = false;
            });
        }
    }
</script>

<div class="row justify-content-md-center">
    {#if loader}
        <Loader/>
    {:else}
    <div class="col col-lg-5">
        <h1>{formType ? 'Register':'Sign in'}</h1>
        <hr/>
        <form use:form>

            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input 
                    type="email"
                    name="email"
                    class="form-control"
                    value="francis@gmail.com"
                    class:is-invalid={$errors.email}
                >
                {#if $errors.email}
                    <div class="invalid-feedback">{$errors.email}</div>
                {/if}
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input 
                    type="password"
                    name="password"
                    class="form-control"
                    value="testing123"
                    class:is-invalid={$errors.password}
                >
                {#if $errors.password}
                    <div class="invalid-feedback">{$errors.password}</div>
                {/if}
            </div>

            <button type="submit" class="btn btn-primary">
                Submit
            </button>
        </form>
        <hr/>
        <button
            class="btn btn-outline-primary"
            on:click={()=>formType = !formType}
        >
            {formType ? 'Want to sign in ?':'Want to register ?'}
        </button>

    </div>
    {/if}
  
</div>