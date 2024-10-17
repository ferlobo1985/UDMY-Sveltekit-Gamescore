import { DB } from "./firebase.server";
let usersCol = DB.collection('users');


export async function getUser(userID) {
    const user = await usersCol.doc(userID).get();
    return user?.data();
}