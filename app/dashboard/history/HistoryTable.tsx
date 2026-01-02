"use client"

import React, { JSX, useState } from "react"
import DeleteHistoryButton from "./DeleteHistoryButton"

interface HistoryEntry {
  id: number
  templateSlug: string
  formData: string
  aiResponse: string
  createdAt: string
}

interface HistoryTableProps {
  history?: HistoryEntry[] | null
}

const extractNiche = (formData: string): string => {
  try {
    const parsed = JSON.parse(formData) as Record<string, unknown>
    if (typeof parsed !== "object" || parsed === null) return "—"

    const niche = parsed["niche"]
    if (typeof niche === "string") return niche
    const topic = parsed["topic"]
    if (typeof topic === "string") return topic
    const keywords = parsed["keywords"]
    if (typeof keywords === "string") return keywords
    const outline = parsed["outline"]
    if (typeof outline === "string") return outline

    const firstKey = Object.keys(parsed)[0]
    const firstVal = firstKey ? parsed[firstKey] : undefined
    return typeof firstVal === "string" ? firstVal : "—"
  } catch {
    return "—"
  }
}

const truncateText = (input: string, maxLength = 120): string => {
  if (!input) return ""
  const text = input.replace(/<[^>]*>/g, "")
  return text.length > maxLength ? text.slice(0, maxLength) + "…" : text
}

// const formatDate = (input: string) => {
//   return new Date(input).toLocaleString("en-IN", {
//     dateStyle: "medium",
//     timeStyle: "short",
//   })
// }

export default function HistoryTable({ history: initialHistory }: HistoryTableProps): JSX.Element {
  const [history, setHistory] = useState<HistoryEntry[]>(initialHistory ?? [])

  const handleDelete = (id: number): void => {
    setHistory((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div className="mt-8 overflow-x-auto rounded-lg border border-gray-200 dark:border-cyan-800 shadow-sm ">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-linear-to-r from-cyan-600 to-cyan-400 dark:from-cyan-800 dark:to-cyan-950 text-white">
          <tr>
            <th className="px-6 py-3 font-semibold">Template</th>
            <th className="px-6 py-3 font-semibold">Niche</th>
            <th className="px-6 py-3 font-semibold">Preview</th>
            <th className="px-6 py-3 font-semibold">Created At</th>
            <th className="px-6 py-3 font-semibold text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white/50 dark:bg-white/5 dark:divide-gray-200/30">
          {(history || []).slice(0, 10).map((item: HistoryEntry) => (
            <tr key={item.id} className="hover:bg-cyan-50 dark:hover:bg-cyan-900/40 transition-colors">
              <td className="px-6 py-4 font-medium text-cyan-600 dark:text-cyan-400 capitalize">
                {item.templateSlug.replace(/-/g, " ")}
              </td>
              <td className="px-4 py-4">
                <span className="inline-flex items-center rounded-full bg-cyan-50 dark:bg-cyan-900 dark:text-cyan-400  text-cyan-700 px-3 py-1 text-xs font-medium">
                  {extractNiche(item.formData)}
                </span>
              </td>
              <td className="pr-6 py-4 text-gray-600 dark:text-gray-200 max-w-xs truncate">
                {truncateText(item.aiResponse)}
              </td>
              <td className="px-6 py-4 text-gray-500 dark:text-gray-200">
                {item.createdAt}
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end gap-3">
                  <a
                    href={`/dashboard/content/${item.templateSlug}`}
                    className="text-cyan-600 hover:underline text-sm font-medium"
                  >
                    Re-open
                  </a>
                  <DeleteHistoryButton id={item.id} onDelete={handleDelete} />
                </div>
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}
