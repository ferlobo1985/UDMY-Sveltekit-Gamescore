import { AUTH } from "$lib/firebase/server/firebase.server"


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
    console.log(event.url.pathname);
    console.log(event.locals.user)
}
