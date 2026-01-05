import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

const TemplateCard = (item: TEMPLATE) => {
  return (
    <Link href={`dashboard/content/${item.slug}`}>
      <div className="
        group relative p-6 
        bg-white/10 backdrop-blur-lg 
        border border-cyan-300/50 
        rounded-2xl shadow 
        h-72 flex flex-col gap-4 
        cursor-pointer 
        hover:scale-[1.04] hover:shadow-xl hover:border-cyan-400
        transition-all duration-300
        rounded-tr-[40px]
      ">
        {/* Glow Accent */}
        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-cyan-500/10 via-transparent to-cyan-400/15 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

        {/* Icon */}
        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-cyan-100/20 border border-cyan-200">
          <Image src={item.icon} alt="icon" height={36} width={36} />
        </div>

        {/* Title */}
        <h2 className="font-semibold text-2xl text-cyan-500 relative z-10">
          {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-600"> */}
            {item.name}
          {/* </span> */}
        </h2>

        {/* Description */}
        <p className="text-gray-500 line-clamp-4 relative z-10">
          {item.desc}
        </p>
      </div>
    </Link>
  )
}

export default TemplateCard
