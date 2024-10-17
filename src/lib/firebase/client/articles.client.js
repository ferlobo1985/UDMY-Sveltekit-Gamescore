import { DB } from "./config.client";
import { collection, orderBy, query,limit, getDocs } from "firebase/firestore";

let articlesCol =  collection(DB,'articles');

export async function getHomeArticles(docLimit = 2) {
    try {
        const q = query(articlesCol,orderBy('created_at','desc'),limit(docLimit));
        const querySnapshot = await getDocs(q);
        const lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
        const posts = querySnapshot.docs.map(doc=>({
            id:doc.id,
            ...doc.data()
        }))

        console.log(lastVisible)
        console.log(posts)

    } catch (error) {
        throw new Error(error)
    }
    
}