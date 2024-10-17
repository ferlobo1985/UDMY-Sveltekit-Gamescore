import schemaValidation from '$lib/components/Forms/article.schema.js';
import { fail, redirect } from '@sveltejs/kit';
import { createArticle } from '$lib/firebase/server/articles.server.js';

export const actions = {
    default: async({request,locals})=>{
        const formData = await request.formData();
        const article = await schemaValidation(formData);

        if(!article.success){
            return fail(422,article)
        }

        await createArticle(
            article.data,
            locals.user.id
        )
        throw redirect(303,'/dashboard/articles');
    }
}