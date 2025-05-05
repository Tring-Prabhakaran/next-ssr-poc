"use client";
//
// import { clearUserToken } from "@/app/actions/auth";
import { redirect } from "next/navigation";

export default function ClientButton(props: any) {
  const { label, to } = props;

  const handleLogout = async () => {
    // await clearUserToken();
    redirect(to);
  };

  return <button onClick={handleLogout}>{label}</button>;
}
