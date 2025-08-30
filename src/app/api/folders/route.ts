import { NextRequest, NextResponse } from "next/server";
// import { auth } from "@clerk/nextjs/server";
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
    //   return NextResponse.json({ error: "User not found" }, { status: 404 });
    // }

    // const folders = await prisma.folder.findMany({
    //   where: { userId: user.id },
    //   include: { notes: true },
    //   orderBy: { updatedAt: "desc" },
    // });

    // return NextResponse.json(folders);
    
    // Geçici olarak mock data döndürüyoruz
    return NextResponse.json([]);
  } catch (error) {
    console.error("Error fetching folders:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(_request: NextRequest) {
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
    //   return NextResponse.json({ error: "User not found" }, { status: 404 });
    // }

    // const body = await request.json();
    // const { name, description, color } = body;

    // const folder = await prisma.folder.create({
    //   data: {
    //     name,
    //     description,
    //     color: color || "#3b82f6",
    //     userId: user.id,
    //   },
    //   include: { notes: true },
    // });

    // return NextResponse.json(folder);
    
    // Geçici olarak mock data döndürüyoruz
    return NextResponse.json({ message: "Folder created successfully" });
  } catch (error) {
    console.error("Error creating folder:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
} 