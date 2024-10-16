import { AUTH } from '$lib/firebase/server/firebase.server';
import { json } from '@sveltejs/kit';


export async function POST({request,cookies}){
    try {
        const { token,email } =  await request.json();
        const verify =  await AUTH.verifyIdToken(token ?? '',true);

        if(verify.email === email){
            /// EXTRA LAYER
            cookies.set('GS-T', token, {maxAge:verify.exp, path:'/'});
            return json({message:'success'},{status:200})
        }
        return json({message:'Bad token'},{status:403})
    } catch (error) {
        return json({message:'Bad token'},{status:403})
    }
}


