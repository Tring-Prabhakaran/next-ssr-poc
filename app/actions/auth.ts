"use server";
import { cookies } from "next/headers";

// Set a cookie (e.g. after login)
export async function setUserToken(token: string) {
  (await cookies()).set("token", token, {
    httpOnly: true,
    path: "/",
    secure: true,
    sameSite: "lax",
  });
}

// Remove a cookie (e.g. on logout)
export async function clearUserToken() {
  (await cookies()).delete("token");
}

export async function setCookies(key: string, value: string) {
  (await cookies()).set(key, value, {
    httpOnly: true,
    path: "/",
    secure: true,
    sameSite: "lax",
  });
}

export async function removeCookies(key: string) {
  (await cookies()).delete(key);
}
