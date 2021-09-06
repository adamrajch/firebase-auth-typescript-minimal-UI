import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import AuthScreen from "../components/auth";
import firebase from "../firebase/clientApp";

export default function Login(): ReactElement {
  const [user, loading, error] = useAuthState(firebase.auth());
  console.log("Loading: ", loading, "|", "Current user: ", user);
  const router = useRouter();
  useEffect(() => {
    if (user && !loading) {
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <div>
      <AuthScreen />
    </div>
  );
}
