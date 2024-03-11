"use client";

import { MainLayout } from '@/layouts'
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import React from 'react'
import { Product } from '@/types/product';
import { yupResolver } from "@hookform/resolvers/yup";
import { createProduct } from '@/helper/SchemaValidate';


export default function CreateProduct() {
    const methods = useForm<Product>({
        resolver: yupResolver(createProduct),
    });
    const onSubmit: SubmitHandler<Product> = (data) => {
    }
    return (
        <MainLayout title={''}  >
            <div>
                <h1 className='text-black pb-5 text-[24px] font-bold'>
                    Crear producto
                </h1>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-2 gap-5'>
                            <div className='flex flex-col gap-3'>
                                <input
                                    name='title'
                                    type="text"
                                />
                                <input
                                    name='price'
                                    type="text"
                                />
                                <input
                                    name='description'
                                    type="text"
                                />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <input
                                    name='category'
                                    type="text"
                                />
                                <input
                                    name='rating'
                                    type="text"
                                />
                            </div>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </MainLayout>
    )
}
