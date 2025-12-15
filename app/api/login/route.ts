import {prisma} from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";  /* NeextResponse is Next.js utility to create  HTTP responses with
                                                status, JSON, cookies,annd redirects in APP Router APLS and middleware
                                              */
export async function POST(req:Request){
    try{
        const{email,password} = await req.json();

        if(!email||!password){
            return NextResponse.json(
            {error: "Enter all fields"},
            {status: 400}
            )
        }

        //Find user from db by email
        const user = await prisma.user.findUnique({
            where:{email},
        });

        //user not found
        if(!user){
            return NextResponse.json(
                {error: "User not found"},
                {status: 401}
            );
            }
         
            //compare password
        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        );

        if(!isPasswordValid){
            return NextResponse.json(
                {error: "Email or password are invalid"},
                {status: 401}
            );
        }

        return NextResponse.json(
            {
                message: "Login Successful!",
                user : {
                   email: user.email,
                   password: user.password,
                },
            },
            {status: 200}
        );
        
    }catch(error){
        console.error("Login error",error);

        return NextResponse.json(
            {error: "Something went wromg"},
            {status: 500}
        );
    }
}
