'use client'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import React, { useContext, useEffect } from 'react'
import { HISTORY } from '../history/page'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext'
import Link from 'next/link'

const UsageTrack = () => {

  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { updateCreditUsage, setUpdateCreditUsage } = useContext<any>(UpdateCreditUsageContext);

  useEffect(() => {
    user && getData();
  }, [user])

  useEffect(() => {
    user && getData();
  }, [user && updateCreditUsage])

  const getData = async () => {
    // @ts-ignore 
    const result: HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))
    getTotalUsage(result);
  }

  const getTotalUsage = (result: HISTORY[]) => {
    let total: number = 0;
    result.forEach(element => {
      total += Number(element.aiResponse?.length)
    });

    setTotalUsage(total);
    console.log(total)
  }

  return (
    <div className='m-5'>
      <div className='bg-gradient-to-br from-cyan-300 via-cyan-600 to-cyan-600 dark:from-cyan-900 dark:via-cyan-800 dark:to-cyan-900 text-white  rounded-lg p-3'>
        <h2 className='font-medium'>Credits</h2>
        <div className='h-2 mb-4 bg-white/40 w-full rounded-full mt-3'>
          <div className='h-2 bg-white rounded-full'
            style={{ width: (totalUsage / 100000) * 100 + '%' }}>
          </div>
          <h2 className='text-sm my-2 mb-4'>{totalUsage}/1,00,000 credit used</h2>
        </div>
   <Link href='/dashboard/billing'>
   <Button variant={'secondary'} className='w-full mt-6 text-cyan-600 dark:bg-white/10 dark:text-cyan-400 cursor-pointer'>Upgrade</Button>
   </Link> 
      </div>
    </div>
  )
}

export default UsageTrack
