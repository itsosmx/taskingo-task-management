import { AppSettingsProps } from "../constants/types";

export function updateStorage(data: AppSettingsProps) {
  try {
    window.localStorage.setItem("@settings", JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
}

export async function setupStorage() {
  try {
    const storage = window.localStorage.getItem("@settings");
    if (storage) return;
    window.localStorage.setItem("@settings", JSON.stringify(settings));
  } catch (error) {
    console.error(error);
  }
}

export function getStorage() {
  try {
    const storage = window.localStorage.getItem("@settings");
    if (storage) return JSON.parse(storage);
    return settings;
  } catch (error) {
    console.error(error);
  }
}

const settings = {
  isDarkTheme: true,
};
