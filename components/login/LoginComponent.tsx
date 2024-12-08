"use client"

import { signIn } from "next-auth/react";
 
export default function SignInPage() {
    return(
        <div>
            <h1> SignIn </h1>
            <button onClick = {()=> signIn("github")}>sign In With Github</button>
        </div>
    )
}
