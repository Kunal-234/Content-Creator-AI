'use client'
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput:any;
  loading?:boolean;
}

const FormSection = ({ selectedTemplate,userFormInput,loading }: PROPS) => {

  const [formData, setFormData] = useState<any>();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })

  }

  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData)
  }


  return (
    <div className='p-5 shadow-md rounded-lg dark:bg-white/5 bg-[white]/40 '>
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} alt='icon'
        width={70} height={70} />
      <h2 className='font-bold text-3xl pt-4 mb-2'> <span className='text-transparent bg-clip-text bg-linear-to-r from-cyan-500 via-cyan-600 to-cyan-300'>{selectedTemplate?.name} </span></h2>
      <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>

      <form className='mt-6 ' onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, i) => (
          <div key={i} className='my-2 flex flex-col gap-2 mb-7'>
            <label className='font-semibold'>{item.label}</label>
            {item.field === 'input' ?
              <Input spellCheck={false} name={item.name} required={item?.required}
                onChange={handleInputChange} /> : item.field === 'textarea' ?
                <Textarea spellCheck={false} name={item.name} required={item?.required}
                  onChange={handleInputChange} /> : null}

          </div>
        ))}
        <Button type='submit' className='w-full text-[18px] dark:text-cyan-950 font-semibold py-6 cursor-pointer bg-linear-to-br from-cyan-600 via-cyan-600 to-cyan-300 hover:opacity-80'
        disabled={loading} >
          {loading && <Loader2Icon className='animate-spin'/>}
          {loading ? "Generating content" : "Generate Content"}
          </Button>
      </form>
    </div>
  )
}

export default FormSection
