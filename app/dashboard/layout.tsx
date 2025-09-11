'use client'
import React, { useContext, useState } from 'react'
import SideNav from './_components/SideNav';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsageContext';
import Header from '@/components/Header';

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const [totalUsage, setTotalUsage] = useState<Number>(0);
    const [updateCreditUsage, setUpdateCreditUsage] = useState<any>(null);

    return (
        <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
            <UpdateCreditUsageContext.Provider value={{ updateCreditUsage, setUpdateCreditUsage }}>
                <div className='h-screen'>
                    {/* <Header /> */}
                    <div className='md:w-64 hidden md:block fixed'>
                        <SideNav />
                    </div>
                    <div className='md:ml-64'>
                        {children}
                    </div>
                </div>
            </UpdateCreditUsageContext.Provider>
        </TotalUsageContext.Provider>
    )
}

export default layout
