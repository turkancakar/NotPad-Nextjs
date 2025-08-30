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

    // const notes = await prisma.note.findMany({
    //   where: { userId: user.id },
    //   include: { folder: true },
    //   orderBy: [
    //     { isPinned: "desc" },
    //     { updatedAt: "desc" }
    //   ],
    // });

    // return NextResponse.json(notes);
    
    // Geçici olarak mock data döndürüyoruz
    return NextResponse.json([]);
  } catch (error) {
    console.error("Error fetching notes:", error);
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
    // const { title, content, folderId, color } = body;

    // const note = await prisma.note.create({
    //   data: {
    //     title,
    //     content,
    //     color: color || "#ffffff",
    //     userId: user.id,
    //     folderId: folderId || null,
    //   },
    //   include: { folder: true },
    // });

    // return NextResponse.json(note);
    
    // Geçici olarak mock data döndürüyoruz
    return NextResponse.json({ message: "Note created successfully" });
  } catch (error) {
    console.error("Error creating note:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
} 