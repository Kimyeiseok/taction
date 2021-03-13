import { auth, googleAuthProvider, facebookAuthProvider, db } from 'auth/FirebaseAuth';
import md5 from 'md5'

const FirebaseService = {}

FirebaseService.signInEmailRequest = async (email, password) =>
	await auth.signInWithEmailAndPassword(email, password).then(user => user).catch(err => err);

FirebaseService.signInEmailRequest = async (email, password) =>
  await auth.signInWithEmailAndPassword(email, password).then(user => user).catch(err => err);
		
FirebaseService.signOutRequest = async () =>
	await auth.signOut().then(user => user).catch(err => err);

FirebaseService.signInGoogleRequest = async () =>
  await auth.signInWithPopup(googleAuthProvider).then(user => user).catch(err => err);

FirebaseService.signInFacebookRequest = async () =>
  await auth.signInWithPopup(facebookAuthProvider).then(user => user).catch(err => err);

FirebaseService.signUpEmailRequest = async (email, password, name) =>
	await auth.createUserWithEmailAndPassword(email, password).then(async user => {
							await user.user.updateProfile({ displayName: name, photoURL: `http://gravatar.com/avatar/${md5(email)}?d=identicon`,})
							return user
							}).catch(err => err);	

FirebaseService.currentUser = async () => 
	await auth().onAuthStateChanged().then(user => user).catch(err => err);


FirebaseService.dbStoreAccount = async (uid, email, name) => {
     await db.collection("users").doc(uid).set({
														uid: uid,
														email: email,
														name: name,
														address: 'Not Connected',
														role: 'User',
														Team: '-',
														profileImage: `http://gravatar.com/avatar/${md5(email)}?d=identicon`,
												}).catch(function(error) {
												console.error("Error adding document: ", error);
													});
};

FirebaseService.dbGetAccount = async (uid) => await db.collection("users").doc(uid).onSnapshot((doc) => {
        console.log("Current data: ", doc.data());
	return doc.data().uid
    });
	
	
export default FirebaseService