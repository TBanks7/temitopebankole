import React from 'react'
import CardLayout from '../Common/CardLayout'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'

const Article_Card = ({ data }) => {
    return (
        <CardLayout className='keepItEmpty'>
            <div className="card_stylings transition px-8 py-10">
                <div className="flex-initial text-[17px] text-Snow font-medium">{data.title}</div>
                <div className="text-sm text-LightGray font-normal italic mt-1 ">
                    {data.summary}{'...'}
                </div>
                <div className='flex flex-wrap gap-2 pt-2'>
                    {data.tags.map((data, key) => (
                        <div className="flex justify-items-center justify-center text-LightGray bg-DeepNightBlack px-3 text-xs rounded-full py-3 font-normal opacity-50 text-center">
                            {data}
                        </div>
                    ))}
                </div>
                <Link href={data.link} target='_blank' spy={true} smooth={true} duration={5} offset={-50} className=" flex items-center gap-1 text-blue-300 text-sm font-normal mt-4">Read More<span><FaAngleRight /></span> </Link>

            </div>
        </CardLayout>
    )
}

export default Article_Card
