import schemaValidation from '$lib/components/Forms/article.schema.js';


export const actions = {
    default: async({request,locals})=>{
        const formData = await request.formData();
        const article = await schemaValidation(formData);

        console.log(article)
        

    }
}