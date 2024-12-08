"use client"

import { signOut } from "next-auth/react";

export default function SignOutPage(){
    return(
        <div>
            <h1>sign Out</h1>

            <button onClick={()=>signOut()}>sign Out</button>
        </div>
    )
}