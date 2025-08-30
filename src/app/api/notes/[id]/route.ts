import { NextRequest, NextResponse } from "next/server";
// import { auth } from "@clerk/nextjs/server";
// import { prisma } from "@/lib/prisma";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    
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

    // const note = await prisma.note.findFirst({
    //   where: { 
    //     id: resolvedParams.id,
    //     userId: user.id 
    //   },
    //   include: { folder: true },
    // });

    // if (!note) {
    //   return NextResponse.json({ error: "Note not found" }, { status: 404 });
    // }

    // return NextResponse.json(note);
    
    // Geçici olarak mock data döndürüyoruz
    return NextResponse.json({ id: resolvedParams.id, title: "Mock Note", content: "Mock content" });
  } catch (error) {
    console.error("Error fetching note:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    
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
    // const { title, content, isPinned, isArchived, color, folderId } = body;

    // const note = await prisma.note.updateMany({
    //   where: { 
    //     id: resolvedParams.id,
    //     userId: user.id 
    //   },
    //   data: {
    //     title,
    //     content,
    //     isPinned,
    //     isArchived,
    //     color,
    //     folderId: folderId || null,
    //     updatedAt: new Date(),
    //   },
    // });

    // if (note.count === 0) {
    //   return NextResponse.json({ error: "Note not found" }, { status: 404 });
    // }

    // const updatedNote = await prisma.note.findFirst({
    //   where: { id: resolvedParams.id },
    //   include: { folder: true },
    // });

    // return NextResponse.json(updatedNote);
    
    // Geçici olarak mock data döndürüyoruz
    return NextResponse.json({ message: "Note updated successfully" });
  } catch (error) {
    console.error("Error updating note:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    
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

    // const note = await prisma.note.deleteMany({
    //   where: { 
    //     id: resolvedParams.id,
    //     userId: user.id 
    //   },
    // });

    // if (note.count === 0) {
    //   return NextResponse.json({ error: "Note not found" }, { status: 404 });
    // }

    // return NextResponse.json({ message: "Note deleted successfully" });
    
    // Geçici olarak mock data döndürüyoruz
    return NextResponse.json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error deleting note:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
} 