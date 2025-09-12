'use client'
import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { useTheme } from 'next-themes'
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

const OutputSection = ({ aiResponse }: { aiResponse: string }) => {
  const { theme } = useTheme();
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    if (editorInstance) {
      editorInstance.setMarkdown(aiResponse);
    }
  }, [aiResponse])

 

  return (
    <div spellCheck={false} className='bg-white/40 dark:bg-white/5 dark:shadow-cyan-900 shadow-lg shadow-cyan-100 rounded-lg [&_.toastui-editor-defaultUI]:!bg-inherit [&_.toastui-editor]:!bg-inherit [&_.toastui-editor-main]:!bg-inherit [&_.toastui-editor-ww-container]:!bg-inherit [&_.toastui-editor-toolbar]:!bg-cyan-950'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button
         className='flex bg-black dark:bg-cyan-800 dark:text-white hover:bg-black/70 cursor-pointer gap-2 text-sm'
         onClick={()=> navigator.clipboard.writeText(editorRef.current?.getInstance().getMarkdown() || '')}
         > <Copy className='w-3 h-3' />Copy </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        theme={theme === 'dark' ? 'dark' : 'default'}
        onChange={() => console.log(editorRef.current?.getInstance().getMarkdown())}
      />
    </div>
  )
}

export default OutputSection
