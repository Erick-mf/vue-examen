import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'

const auth = getAuth()
const provider = new GoogleAuthProvider()
const provider2 = new GithubAuthProvider()

function signInWithGoogle() {
  signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result)
    const token = credential.accessToken
    const user = result.user
    console.log(user)
  })
}

function signInWithGitHub() {
  signInWithPopup(auth, provider2).then((result) => {
    const credential = GithubAuthProvider.credentialFromResult(result)
    const token = credential.accessToken
    const user = result.user
    console.log(user)
  })
}

function signIn(email, password) {
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user
    console.log(user)
  })
}

function signUp(email, password) {
  createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user
    console.log(user)
  })
}

function signOut() {
  auth.signOut()
}

export { signInWithGoogle, signInWithGitHub, signIn, signUp, signOut }
