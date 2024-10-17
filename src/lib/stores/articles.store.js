import { getHomeArticles } from "$lib/firebase/client/articles.client";
import { writable } from "svelte/store";

const articleStore = writable({
    posts:[],
    lastVisible:{},
    loading:false
});


function updateArticles(data){
    articleStore.update( prev => {
        let newStore = {
            posts:[...prev.posts,...data.posts],
            lastVisible: data.lastVisible,
            loading:false
        }
        return newStore;
    })
}

function setLoading(state){
    articleStore.update(prev =>{
        let newStore = {...prev,loading:state}
        return newStore;
    })
}


export default {
    subscribe: articleStore.subscribe,
    getHomeArticles: async()=>{
        /// GET ARTICLES ON FIRST LOAD
        setLoading(true)
        const data = await getHomeArticles(4);
        updateArticles(data);
    },
    loadMoreArticle: async()=>{
        /// GET MORE ARTICLES
    }
}
