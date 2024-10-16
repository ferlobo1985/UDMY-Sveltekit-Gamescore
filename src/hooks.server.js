import { sequence } from "@sveltejs/kit/hooks"
import { getAuthUser, guardedRoutes } from '$lib/helpers/app.server';

const Auth = async({event,resolve})=>{
    const authCookie = event.cookies.get('GS-T');

    try {
        event.locals.user = await getAuthUser(authCookie);
    } catch(error){
        event.locals.user = null;
    }

    const response = await resolve(event);
    return response;
}

const RouteGuards = async({event, resolve})=>{
    await guardedRoutes(event);

    const response = await resolve(event);
    return response;
}

export const handle = sequence(Auth,RouteGuards)