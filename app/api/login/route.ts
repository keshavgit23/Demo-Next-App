import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";  /* NextResponse is Next.js utility to create  HTTP responses with
                                                status, JSON, cookies,annd redirects in APP Router APLS and middleware
                                              */
export async function POST(req: Request) {
    try {
        const { username, password } = await req.json();

        if (!username || !password) {
            return NextResponse.json(
                { error: "All fields are required!" },
                { status: 400 }
            )
        }

        //Find user from db by username
        const user = await prisma.user.findUnique({
            where: {username},
        });

        //user not found
        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 401 }
            );
        }

        //compare password
        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordValid) {
            return NextResponse.json(
                { error: "username or password are invalid" },
                { status: 401 }
            );
        }

        return NextResponse.json(
            {
                message: "Login Successful!",
                user: {
                    username: user.username,
                    password: user.password,
                },
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("Login error", error);

        return NextResponse.json(
            { error: "Something went wrong!" },
            { status: 500 }
        );
    }
}
