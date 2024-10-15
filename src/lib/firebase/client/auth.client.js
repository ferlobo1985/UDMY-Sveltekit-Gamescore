//@ts-nocheck
import { AUTH, DB } from "./config.client";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { toasts } from "svelte-toasts";
import errorCodes from '../errorCodes';

import { goto } from "$app/navigation";

export async function registerUser({email,password}) {
    try {
        /// REGISTER USER
        const request = await createUserWithEmailAndPassword(
            AUTH, email, password
        );
        // ADD USER TO FIRESTORE
        await addUserToFirestore(request.user);
        //SHOW TOAST
        toasts.add({type:'success',description:'Welcome to the group !!!'})
        //REDIRECT USER
        await authRedirect('/',request.user.uid)
    } catch (e) {
        toasts.add({type:'error',description:errorCodes(e.code)})
        throw new Error(e)
    }
}

export async function signinUser({email,password}) {
    try {
        const request = await signInWithEmailAndPassword(
            AUTH, email, password
        );
        //SHOW TOAST
        toasts.add({type:'success',description:'Welcome back :)'})
        //REDIRECT USER
        await authRedirect('/',request.user.uid)
    } catch (e) {
        toasts.add({type:'error',description:errorCodes(e.code)})
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