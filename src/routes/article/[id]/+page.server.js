import { getArticleById } from '$lib/firebase/server/articles.server';
import { error } from '@sveltejs/kit';


export async function load({params,locals}) {
    const article = await getArticleById(params.id);
    let admin = false;
    
    if(!article){
        throw error(404,{ message:'No article found'})
    }

    // IF USER owns resource
    if(article.owner.uid === locals?.user?.id){
        admin = true
    }

    return {
        admin,
        article
    }
}