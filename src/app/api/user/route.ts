import { NextRequest, NextResponse } from "next/server";
// import { auth, currentUser } from "@clerk/nextjs/server";
// import { prisma } from "@/lib/prisma";

export async function GET(_request: NextRequest) {
  try {
    // Geçici olarak authentication'ı devre dışı bırakıyoruz
    // const { userId } = await auth();
    
    // if (!userId) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    // const user = await prisma.user.findUnique({
    //   where: { clerkId: userId },
    // });

    // if (!user) {
    //   // Create user if not exists
    //   const clerkUser = await currentUser();
    //   if (!clerkUser) {
    //     return NextResponse.json({ error: "User not found" }, { status: 404 });
    //   }

    //   const newUser = await prisma.user.create({
    //   data: {
    //     clerkId: userId,
    //     email: clerkUser.emailAddresses[0]?.emailAddress || "",
    //     name: clerkUser.firstName && clerkUser.lastName 
    //       ? `${clerkUser.firstName} ${clerkUser.lastName}`
    //       : clerkUser.firstName || clerkUser.lastName || null,
    //   },
    // });

    //   return NextResponse.json(newUser);
    // }

    // return NextResponse.json(user);
    
    // Geçici olarak mock data döndürüyoruz
    return NextResponse.json({ id: "mock-user", name: "Test User", email: "test@example.com" });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
} 