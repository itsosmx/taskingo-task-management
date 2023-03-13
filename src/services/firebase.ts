import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  signInAnonymously,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { SignInMethods } from "../constants/enums";
import { SignInProps } from "../constants/types";

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
        .then((response) => {
          console.log(response.user);
        })
        .catch(onError);
    }
  } catch (error) {
    console.log(error);
  }
}
