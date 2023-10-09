"use client"
import React from "react";
import MessageCard from "@/components/MessageCard";
import { useAuthState, AuthStateHook } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import Login from "@/components/Login";
function MessageAuth() {
  const [user, loading, error] = useAuthState(auth);

  return <div>{user ? <MessageCard /> : <Login />}</div>;
}

export default MessageAuth;
