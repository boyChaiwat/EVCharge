
import Firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBJuoSVEey7L9olPtR0Z3xcjOpkNvPE46E",
    authDomain: "evcharge-web-app.firebaseapp.com",
    databaseURL: "https://evcharge-web-app.firebaseio.com",
    projectId: "evcharge-web-app",
    storageBucket: "evcharge-web-app.appspot.com",
    messagingSenderId: "1012067035553"
}

const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();

export const provider = new Firebase.auth.FacebookAuthProvider()
    provider.setCustomParameters({
    'display': 'popup'
});
export const storage = firebaseApp.storage();
export const dbAuth = firebaseApp.auth();
export const userRef = db.ref('user')
// export const postRef = db.ref('posts');
// export const studentRef = db.ref('student');