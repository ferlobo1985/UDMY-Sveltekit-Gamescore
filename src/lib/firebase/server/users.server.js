import { error } from "@sveltejs/kit";
import { DB } from "./firebase.server";

let usersCol = DB.collection('users');

export async function updatCurrentUser(data,userID){
    // OPTIONAL
    const user = await getUser(userID);
    if(!user || user.uid !== userID){
        throw error(403,{message:'This is not your profile'});
    }

    const userRef = await usersCol.doc(user.uid);
    await userRef.update(data);
}



export async function getUser(userID) {
    const user = await usersCol.doc(userID).get();
    return user?.data();
}