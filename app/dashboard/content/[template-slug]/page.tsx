'use client'
import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModal'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext'

interface PROPS {
  params: Promise<{ "template-slug": string }>
}

const CreateNewContent = (props: PROPS) => {
  // unwrap params with React.use()
  const resolvedParams = React.use(props.params)

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === resolvedParams['template-slug']
  )

  const [loading, setLoading] = useState<boolean>(false);
  const [aiResponse, setAiResponse] = useState<string>("");
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const {updateCreditUsage, setUpdateCreditUsage}=useContext(UpdateCreditUsageContext);

  const router = useRouter();

  const GenerateAIContent = async (formData: any) => {
    if (totalUsage > 100000) {
      router.push('/dashboard/billing')
      console.log("pls upgrade")
      return
    }
    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;

    const finalAIPrompt = JSON.stringify(formData) + ',' + selectedPrompt + 'never return output in RTF.';

    const result = await chatSession.sendMessage(finalAIPrompt);

    setAiResponse(result.response.text());
    await saveInDb(JSON.stringify(formData), selectedTemplate?.slug, result.response.text())
    setLoading(false);
    setUpdateCreditUsage(Date.now())

  }

  const saveInDb = async (formData: any, slug: any, aiResponse: string) => {
    const result = await db.insert(AIOutput).values({
      formData: formData ?? "",
      aiResponse: aiResponse ?? "",
      templateSlug: slug ?? "",
      createdBy: user?.primaryEmailAddress?.emailAddress ?? "anonymous",
      createdAt: moment().format('DD/MM/yyyy')
    });

    console.log(result)

  }



  return (
    <div className='p-10'>
      <Link href={'/dashboard'}>
        <Button className='cursor-pointer bg-transparent text-black dark:bg-cyan-800 dark:text-cyan-950 hover:text-white'> <ArrowLeft />Back</Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5 '>
        {/* Form section  */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading} />

        {/* Output section  */}
        <div className='col-span-2'>
          <OutputSection aiResponse={aiResponse} />
        </div>
      </div>
    </div>
  )
}

export default CreateNewContent
