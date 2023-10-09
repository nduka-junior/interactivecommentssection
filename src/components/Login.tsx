import React from "react";
import { useAuthState, AuthStateHook } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase";
function Login() {
  // PROVIDER
  const googleProvider = new GoogleAuthProvider();
  // SIGN IN WITH GOOGLE
  const signInWithGoogle = async () => {
    console.log("working");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        console.log(token + "token");
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // toast({
        //   description: "Login Successful",
        //   title: `Welcome ${user?.displayName}`,
        // });
      })
      .catch((error) => {
        console.log(error + "error");
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-[white] rounded-xl px-5 py-7 shadow-[0px_-10px_90px_5px_#00000024] mt-3 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="2.4em"
        viewBox="0 0 448 512"
        className="transition-transform transform hover:scale-[1.2]"
      >
        <path
          d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
          className="fill-light-grayish-blue "
        />
      </svg>
      <h2>Login to send a message </h2>
      <button
        onClick={signInWithGoogle}
        className="rounded-3xl py-2 px-10 border-[1px]   "
      >
        Login
      </button>
    </div>
  );
}

export default Login;
