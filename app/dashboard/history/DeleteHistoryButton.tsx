"use client"

import { useTransition } from "react"
import { Trash2, Loader2 } from "lucide-react"

export default function DeleteHistoryButton({
  id,
  onDelete,
}: {
  id: number
  onDelete: (id: number) => void
}) {
  const [isPending, startTransition] = useTransition()

  const handleDelete = async () => {
    startTransition(async () => {
      const res = await fetch(`/api/history/${id}`, { method: "DELETE" })
      if (res.ok) {
        onDelete(id) // remove row from UI immediately
      } else {
        console.error("Failed to delete")
      }
    })
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="text-cyan-500 hover:text-red-400 cursor-pointer transition-colors disabled:opacity-50"
      title="Delete"
    >
      {isPending ? (
        <Loader2 className="animate-spin w-5 h-5" />
      ) : (
        <Trash2 className="w-5 h-5" />
      )}
    </button>
  )
}
