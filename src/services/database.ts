import { getAuth } from "firebase/auth";
import { getDatabase, ref, get, onValue, update, remove, set, push, DataSnapshot } from "firebase/database";

export async function getCurrentUser(uid: string, onChange: (snapshot: DataSnapshot) => unknown, onError?: Function) {
  try {
    const db = getDatabase();
    const _ref = ref(db, `users/${uid}`);
    const _data = await get(_ref);
    if (!_data) return onError ? onError("No data found.") : null;
    const unsubscribe = onValue(_ref, onChange);
    const data = _data.val();
    return {
      unsubscribe,
      data,
    };
  } catch (error) {
    console.log(error);
    if (onError) onError(error);
  }
}

export async function createUser(uid: string, onError?: (error: unknown) => unknown) {
  try {
    const db = getDatabase();
    const _ref = ref(db, `users/${uid}`);
    const _data = await get(_ref);
    if (_data) return;
    return set(_ref, {
      uid,
      createdAt: Date.now(),
      boards: [],
      columns: [],
    });
  } catch (error) {
    console.log(error);
    if (onError) onError(error);
  }
}

export async function updateData(route: string, snapshot: any, onError?: (error: unknown) => unknown) {
  try {
    const db = getDatabase();
    const auth = getAuth();
    const _ref = ref(db, `users/${auth.currentUser?.uid}${route}`);
    if (!_ref) return onError ? onError("User not found.") : null;
    return update(_ref, snapshot);
  } catch (error) {
    console.log(error);
    if (onError) onError(error);
  }
}
export async function pushData(route: string, snapshot: any, onError?: (error: unknown) => unknown) {
  try {
    const db = getDatabase();
    const auth = getAuth();
    const _ref = ref(db, `users/${auth.currentUser?.uid}${route}`);
    if (!_ref) return onError ? onError("User not found.") : null;
    return push(_ref, snapshot);
  } catch (error) {
    console.log(error);
    if (onError) onError(error);
  }
}
export async function removeData(route: string, snapshot: any, onError?: (error: unknown) => unknown) {
  try {
    const db = getDatabase();
    const auth = getAuth();
    const _ref = ref(db, `users/${auth.currentUser?.uid}${route}`);
    if (!_ref) return onError ? onError("User not found.") : null;
    // return remove(ref(_ref, ));
  } catch (error) {
    console.log(error);
    if (onError) onError(error);
  }
}

export async function deleteUser(uid: any, onError?: (error: unknown) => unknown) {
  try {
    const db = getDatabase();
    const _ref = ref(db, `users/${uid}`);
    if (!_ref) return onError ? onError("User not found.") : null;
    return remove(_ref);
  } catch (error) {
    console.log(error);
    if (onError) onError(error);
  }
}
