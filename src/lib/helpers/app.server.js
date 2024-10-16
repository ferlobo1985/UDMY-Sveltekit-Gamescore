import { AUTH } from "$lib/firebase/server/firebase.server"
import { redirect } from "@sveltejs/kit";


export const getAuthUser = async(userToken) => {
    if(!userToken){ return null }
    try {
        const verify = await AUTH.verifyIdToken(userToken,true)
        const user = await AUTH.getUser(verify.uid);

        return {
            id:user.uid,
            email:user.email
        }
    } catch(e){
        return null
    }
}

export const guardedRoutes = async(event) => {
    // console.log(event.url.pathname);
    // console.log(event.locals.user)
    
    /// SIGN IN ROUTES
    if(event.url.pathname === '/signin'){
        if(event.locals.user){
            throw redirect(302,'/')
        }
    }

    ///AUTH GUARD
    if(event.url.pathname.match('/dashboard')){
        if(!event.locals.user){
            throw redirect(302,'/signin')
        }
    }

}
