import { NextResponse } from "next/server"
import { db } from "@/utils/db"
import { AIOutput } from "@/utils/schema"
import { eq } from "drizzle-orm"

// DELETE /api/history/[id]
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)

    // delete row
    await db.delete(AIOutput).where(eq(AIOutput.id, id))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting history:", error)
    return NextResponse.json(
      { error: "Failed to delete history" },
      { status: 500 }
    )
  }
}
