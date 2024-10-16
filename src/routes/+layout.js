import { onAuthStateChanged } from "firebase/auth"
import { AUTH } from '$lib/firebase/client/config.client';


export async function load(){

    function getAuthUser(){
        return new Promise((resolve)=>{
            onAuthStateChanged(AUTH,(user)=> resolve(user ? user : false))
        })
    }

    return{
        getAuthUser:getAuthUser
    }
}