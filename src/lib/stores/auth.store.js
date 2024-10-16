import { onAuthStateChanged } from "firebase/auth";
import { AUTH } from "$lib/firebase/client/config.client";
import { is_client } from 'svelte/internal'
import { readable } from "svelte/store";

const DEFAULTS = {isAuth:false,uid:null,email:null};

export default readable(
    DEFAULTS,
    (set)=>{
        if(is_client){
            onAuthStateChanged(AUTH,(user)=>{
                if(user){
                    set({isAuth:true,uid:user.uid,email:user.email})
                } else {
                    set(DEFAULTS)
                }
            })
        }
    }
)