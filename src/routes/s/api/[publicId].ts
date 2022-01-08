import admin, { ServiceAccount } from "firebase-admin";
// import serviceAccount from "../../rknotes-service.json";

const serviceAccount: ServiceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
};

console.log(serviceAccount);

if (admin.apps.length === 0) {
    admin.initializeApp({ credential: admin.credential.cert(serviceAccount as ServiceAccount) });
}


const db = admin.firestore();
const getNote = async (publicId: string): Promise<Result<Note>> => {
    const query = db.collectionGroup('notes').where('publicId', '==', publicId);
    const querySnapshot = await query.get();
    if (querySnapshot.empty) {
        return { found: false };
    }
    const data = querySnapshot.docs[0].data() as Note;
    if (!data.public) {
        return { found: false };
    }
    return { found: true, data };
}

export async function get({ params }) {
    console.log(process.env);
    const result = await getNote(params.publicId);
    return {
        body: result
    };
}
