import { getDatabase, ref, get, onValue, update, remove, set, push, DataSnapshot } from "firebase/database";
import { AppProviderProps } from "../constants/types";
export async function getCurrentUser(uid: string, onChange: (snapshot: DataSnapshot) => unknown, onError: Function) {
  try {
    const db = getDatabase();
    const _ref = ref(db, `users/${uid}`);
    const _data = await get(_ref);
    if (!_data) return onError();
    const unsubscribe = onValue(_ref, onChange);
    const data = _data.val();
    return {
      unsubscribe,
      data,
    };
  } catch (error) {
    console.log(error);
    onError(error);
  }
}

export async function createUser(uid: string) {
  try {
    const db = getDatabase();
    const _ref = ref(db, `users/${uid}`);
    // const _data = await get(_ref);
    // if (_data) return console.log("sad");
    console.log("createUser?");

    return set(_ref, {
      uid,
      boards: [],
      columns: [],
    });
  } catch (error) {
    console.log(error);
  }
}
