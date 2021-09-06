import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../firebase/clientApp";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Home() {
  const [user, loading, error] = useAuthState(firebase.auth());
  console.log("Loading: ", loading, "|", "Current user: ", user);
  const router = useRouter();
  useEffect(() => {
    if (!user && !loading) {
      router.push("/login");
    }
    if (user && !loading) {
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <div>
      <Head>
        <title>Periodize</title>
      </Head>
      {loading && <h4>Loading...</h4>}
    </div>
  );
}
