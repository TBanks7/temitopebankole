import React from 'react'
import { useState } from "react";
import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { useQuery } from "react-query";
import axios from "axios";
import { Skeleton } from "antd";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";
import Article_Card from '../components/Article/Article_Card';

const article = () => {
    const { isLoading, error, data } = useQuery('article', () =>
        axios.get('api/article')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))
    return (
        <BannerLayout>
            <div className="flex justify-center items-center">
                <div className="bg-LightGray/10 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex md:block">
                    <div className="flex items-center md:items-center md:justify-around">
                        <div className="">
                            <div className="">
                                <h1 className="text-3xl sm:text-4xl xl:text-5xl text-Snow font-bold">Things I've written</h1>
                            </div>
                            <div className="">
                                <div className=" py-4 font-cascadia-normal text-Snow pb-4 text-xs h-20 lg:h-auto">
                                    <p className="text-Snow sm:text-lg xl:text-xl font-bold">
                                    Collection of my long-form thoughts on programming, technology, cool things I've learnt, and more.
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="w-96 h-52 relative hidden md:block">
                            
                        </div>
                    </div>
            </div>
            </div>
            
            <div className="px-4 pb-2 pt-10">
                <div className="flex flex-col gap-y-4">
                    {/* <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">Education</div> */}
                    {isLoading ?
                        [1, 2, 3].map(() => (
                            <ParagraphSkeleton className={"p-8 h-full w-full relative"} />
                        ))
                        :
                        data.map((data, key) => (
                            <Article_Card key={key} data={data} />
                        ))
                    }

                </div>
            </div>
            <Footer />
        </BannerLayout>
    );
}

export default article
