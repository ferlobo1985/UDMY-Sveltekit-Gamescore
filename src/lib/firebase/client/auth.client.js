//@ts-nocheck
import { AUTH, DB } from "./config.client";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

import { goto } from "$app/navigation";

export async function registerUser({email,password}) {
    try {
        /// REGISTER USER
        const request = await createUserWithEmailAndPassword(
            AUTH, email, password
        );
        // ADD USER TO FIRESTORE
        await addUserToFirestore(request.user);



        await authRedirect('/',request.user.uid)
    } catch (e) {
        throw new Error(e)
    }
}

export async function addUserToFirestore(user){
    try {
        const newUser = {
            uid:user.uid,
            email:user.email,
            firstname:'',
            lastname:'',
            isAdmin:false
        }
        await setDoc(doc(DB,'users',user.uid),newUser);
    } catch (e) {
        throw new Error(e)
    }
}


export async function authRedirect(url,userID=null){
    await goto(url)
}