<script>
    import { createForm } from 'felte';
    import { validator } from '@felte/validator-yup';
    import * as yup from 'yup';

    let formType = false;
    let loader = false;

    const {form, errors} = createForm({
        onSubmit:(values)=>{
            handleSubmit(values)
        }
    });


    const handleSubmit = (values) => {
        loader = true;
        if(formType){
            // REGISTER
        } else {
            // SIGNIN
        }
    }
</script>

<div class="row justify-content-md-center">
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
                >
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input 
                    type="password"
                    name="password"
                    class="form-control"
                    value="testing123"
                >
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
</div>