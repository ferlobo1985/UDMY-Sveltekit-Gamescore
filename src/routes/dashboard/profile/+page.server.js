//@ts-nocheck
import schemaValidation from '$lib/components/Forms/profile.schema.js';
import { getUser } from '$lib/firebase/server/users.server.js';
import { fail } from '@sveltejs/kit';

export async function load({params,locals}) {
    const user = await getUser(locals.user.id);
    return {
        user
    }
}

export const actions = {
    default: async({request,locals,params})=>{
        const formData = await request.formData();
        const user = await schemaValidation(formData);

        if(!user.success){
            return fail(422, user)
        }

        //// FIREBASE UPDATE
            
        return {
            success:true
        }
    }
}