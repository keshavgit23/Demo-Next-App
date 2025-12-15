// console.log("Register API hit");

import {prisma} from "@/lib/prisma";
import bcrypt from "bcryptjs";
import {NextResponse} from "next/server";

export async function POST(req:Request){
    try{
        //get data from frontend
        const {name,email,password} = await req.json();

        // console.log("Data:",name,email);
        //Basic Validation
        if(!name||!email||!password){
           return NextResponse.json(
            {error:"All fields are required"},
            {status: 400}
           );
        }

        //Save user data to database
        const existingUser = await prisma.user.findUnique({
            where:{email},
        });

        if(existingUser){
            return NextResponse.json(
                {error:"User already exists"},
                {status:409}
            );
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const user = await prisma.user.create({
            data:{
                name,
                email,
                password:hashedPassword,
            },
        });

        //Success response
        return NextResponse.json(
            {message:"User created",user},
            {status:201}
        );

        }catch(error){
            console.error(error);
            return NextResponse.json(
                {error:"Something went wrong"},
                {status:500}
            );
        }
    }
