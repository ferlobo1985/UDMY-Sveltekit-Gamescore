//@ts-nocheck
import { getUser } from '$lib/firebase/server/users.server.js';

export async function load({params,locals}) {
    const user = await getUser(locals.user.id);
    return {
        user
    }
}

export const actions = {
    default: async({request,locals,params})=>{
        const formData = await request.formData();




        return {
            success:true
        }
    }
}