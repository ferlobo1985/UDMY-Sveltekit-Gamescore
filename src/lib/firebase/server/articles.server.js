import { DB } from "./firebase.server"
import admin from 'firebase-admin';
import { getUser } from './users.server';


let articlesCol = DB.collection('articles')

export async function createArticle(article,userID) {
    const newArticle = await articlesCol.add({
        ...article,
        owner: userID,
        created_at: admin.firestore.Timestamp.now().seconds
    });

    return newArticle;
}

export async function getArticleById(id) {
    const doc = await articlesCol.doc(id).get();
    if(doc.exists){
        const article = doc.data();
        const owner = await getUser(article.owner);

        return { id:doc.id,...article, owner:{...owner}}
    }
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