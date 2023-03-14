import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  signInAnonymously,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { SignInMethods } from "../constants/enums";
import { SignInProps } from "../constants/types";
import { createUser } from "./database";

/**
 * Handle signIn to firebase with multiple methods
 * @param method
 * @param onError
 * @param EmailOptions
 * @returns
 */
export async function RegisterAccount(
  method: SignInMethods,
  onError?: (reason: any) => PromiseLike<never>,
  EmailOptions?: SignInProps
) {
  const auth = getAuth();
  let provider = null;
  try {
    switch (method) {
      case SignInMethods.GOOGLE:
        provider = new GoogleAuthProvider();
        break;
      case SignInMethods.EMAIL:
        //@ts-ignore
        createUserWithEmailAndPassword(auth, EmailOptions?.email, EmailOptions?.password)
          .then((response) => {})
          .catch(onError);
        break;
      case SignInMethods.FACEBOOK:
        provider = new FacebookAuthProvider();
        break;
      case SignInMethods.GITHUB:
        provider = new GithubAuthProvider();
        break;
      case SignInMethods.ANONYMOUS:
        signInAnonymously(auth);
        break;
    }
    if (provider) {
      return signInWithPopup(auth, provider)
        .then((response) => createUser(response.user.uid).then((e) => console.log(e)))
        .then((e) => console.log(e))
        .catch(onError);
    }
  } catch (error) {
    console.log(error);
  }
}

export function signOutUser() {
  try {
    const auth = getAuth();
    return signOut(auth);
  } catch (error) {
    console.log(error);
  }
}
