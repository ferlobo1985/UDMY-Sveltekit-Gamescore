//@ts-nocheck
import { getUserArticles } from '$lib/firebase/server/articles.server.js'

export async function load({locals}){
    const articles = await getUserArticles(locals.user.id)

    return {
        articles
    }
}