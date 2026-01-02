'use client'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'

const OutputSection = ({ aiResponse }: { aiResponse: string }) => {
  return (
    <div className="bg-white/40 dark:bg-white/5 shadow-lg rounded-lg border">
      <div className="flex justify-between items-center p-5 border-b">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button
          className="flex gap-2 text-sm"
          onClick={() => navigator.clipboard.writeText(aiResponse)}
        >
          <Copy className="w-3 h-3" />
          Copy
        </Button>
      </div>

      <div className="p-5">
        <textarea
          className="w-full h-[500px] bg-transparent outline-none resize-y p-2 text-sm leading-relaxed"
          value={aiResponse}
          readOnly
          placeholder="AI response will appear here..."
        />
      </div>
    </div>
  )
}

export default OutputSection

