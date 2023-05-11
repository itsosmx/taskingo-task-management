import { getAuth } from "firebase/auth";
import { getDatabase, ref, get, onValue, update, remove as _remove, set, push, DataSnapshot } from "firebase/database";

export async function getCurrentUser(uid: string, onChange: (snapshot: DataSnapshot) => unknown, onError?: Function) {
  try {
    const db = getDatabase();
    const _ref = ref(db, `users/${uid}`);
    const _data = await get(_ref);
    if (!_data.exists()) return onError ? onError("No data found.") : null;
    const unsubscribe = onValue(_ref, onChange);
    return {
      unsubscribe,
      data: _data.val(),
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
    if (_data.exists()) return;
    return set(_ref, {
      uid,
      createdAt: Date.now(),
      boards: {},
      columns: {
        default_todo: {
          id: "default_todo",
          title: "ToDo",
          boardSlug: "*",
        },
        default_doing: {
          id: "default_doing",
          title: "Doing",
          boardSlug: "*",
        },
        default_done: {
          id: "default_done",
          title: "Done",
          boardSlug: "*",
        },
      },
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
export async function remove(route: string, onError?: (error: unknown) => unknown) {
  try {
    const db = getDatabase();
    const auth = getAuth();
    const _ref = ref(db, `users/${auth.currentUser?.uid}/${route}`);
    if (!_ref) return onError ? onError("User not found.") : null;
    return _remove(_ref);
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
    return _remove(_ref);
  } catch (error) {
    console.log(error);
    if (onError) onError(error);
  }
}
