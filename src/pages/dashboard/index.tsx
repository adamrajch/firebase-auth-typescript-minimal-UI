import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../../firebase/clientApp";

export default function Dashboard(): ReactElement {
  const [user, loading, error] = useAuthState(firebase.auth());
  console.log("Loading: ", loading, "|", "Current user: ", user);
  const router = useRouter();
  useEffect(() => {
    if (!user && !loading) {
      router.push("/login");
    }
  }, [user]);

  return (
    <div>
      {loading && <h4>Loading...</h4>}
      {user && <div>{user.displayName}</div>}
    </div>
  );
}
