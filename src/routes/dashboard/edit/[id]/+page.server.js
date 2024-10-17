//@ts-nocheck
import { getArticleById, updateArticle } from '$lib/firebase/server/articles.server';
import { error,  fail, redirect } from '@sveltejs/kit';
import schemaValidation from '$lib/components/Forms/article.schema.js';

export async function load({params,locals}) {
    const article = await getArticleById(params.id)
    if(!article){
        throw error(404,{message:"No article found"})
    }
    if(article.owner.uid !== locals.user.id){
        throw error(403,{message:'Access Denied !! You are not the owner'})
    }
    return {article};
}


export const actions = {
    default: async({request,locals,params})=>{
        const formData = await request.formData();
        const article = await schemaValidation(formData);

        if(!article.success){
            return fail(422,article)
        }

        await updateArticle(params.id,article.data,locals.user.id);
        throw redirect(303,'/dashboard/articles');
    }
}