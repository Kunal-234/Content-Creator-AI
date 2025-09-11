import React from "react"
import { currentUser } from "@clerk/nextjs/server"
import { db } from "@/utils/db"
import { AIOutput } from "@/utils/schema"
import { eq, desc } from "drizzle-orm"
import HistoryTable from "./HistoryTable"

export interface HISTORY {
  id: number
  formData: string
  aiResponse: string
  templateSlug: string
  createdBy: string
  createdAt: string
}

const Page = async () => {
  const user = await currentUser()
  const email = user?.primaryEmailAddress?.emailAddress || "anonymous"

  // @ts-ignore
  const history: HISTORY[] = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, email))
    .orderBy(desc(AIOutput.id))

  return (
    <div className="p-6 md:p-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-5xl pb-3 font-semibold"><span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-300'>History</span></h1>
          <p className="text-sm text-gray-500 mt-1">
            Your previously generated content, organized by most recent.
          </p>
        </div>
      </div>

      {history.length === 0 ? (
        <div className="mt-10 rounded-xl border border-dashed bg-white/40 p-10 text-center text-gray-600">
          No history yet. Generate something from the dashboard to see it here.
        </div>
      ) : (
        <HistoryTable history={history} />
      )}
    </div>
  )
}

export default Page
