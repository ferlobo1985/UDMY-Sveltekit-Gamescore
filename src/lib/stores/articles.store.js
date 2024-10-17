import { getHomeArticles } from "$lib/firebase/client/articles.client";
import { writable } from "svelte/store";

const articleStore = writable({
    post:[],
    lastVisible:{},
    loading:false
});


export default {
    subscribe: articleStore.subscribe,
    getHomeArticles: async()=>{
        /// GET ARTICLES ON FIRST LOAD
        const data = await getHomeArticles(4);
    },
    loadMoreArticle: async()=>{
        /// GET MORE ARTICLES
    }
}
