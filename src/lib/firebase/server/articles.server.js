import { DB } from "./firebase.server"
import admin from 'firebase-admin';


let articlesCol = DB.collection('articles')

export async function createArticle(article,userID) {
    const newArticle = await articlesCol.add({
        ...article,
        owner: userID,
        created_at: admin.firestore.Timestamp.now().seconds
    });

    return newArticle;
}


export async function getUserArticles(userID){
    const query = await articlesCol
    .orderBy('created_at','desc')
    .where('owner', '==' , userID)
    .get();

    const articles = query.docs.map(doc=>({
        id: doc.id,
        ...doc.data()
    }))
    return articles
}