'use client'
import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

const OutputSection = ({ aiResponse }: { aiResponse: string }) => {

  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    if (editorInstance) {
      editorInstance.setMarkdown(aiResponse);
    }
  }, [aiResponse])

 

  return (
    <div spellCheck={false} className=' bg-white/40 shadow-lg shadow-cyan-100 rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button
         className='flex bg-black hover:bg-black/70 cursor-pointer gap-2 text-sm'
         onClick={()=> navigator.clipboard.writeText(editorRef.current?.getInstance().getMarkdown() || '')}
         > <Copy className='w-3 h-3' />Copy </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"

        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current?.getInstance().getMarkdown())}
      />
    </div>
  )
}

export default OutputSection
