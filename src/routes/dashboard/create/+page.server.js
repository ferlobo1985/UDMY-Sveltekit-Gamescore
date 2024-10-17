import schemaValidation from '$lib/components/Forms/article.schema.js';
import { fail } from '@sveltejs/kit';


export const actions = {
    default: async({request,locals})=>{
        const formData = await request.formData();
        const article = await schemaValidation(formData);

        if(!article.success){
            return fail(422,article)
        }
        

    }
}