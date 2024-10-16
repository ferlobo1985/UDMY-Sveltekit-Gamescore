import admin from 'firebase-admin';
import { SERVICE_ACCOUNT } from '$env/static/private';


if(admin.apps.length === 0){
    admin.initializeApp({
        // @ts-ignore
        credential: admin.credential.cert(JSON.parse(SERVICE_ACCOUNT))
    })
}

export const DB = admin.firestore(); 
export const AUTH = admin.auth();
