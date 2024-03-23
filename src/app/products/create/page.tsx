"use client";

import { MainLayout } from '@/layouts'
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import React from 'react'
import { Product } from '@/types/product';
import { yupResolver } from "@hookform/resolvers/yup";
import { createProduct } from '@/helper/SchemaValidate';
import { ShortTextInput } from '@/components/Inputs';
import { Button } from '@/components/Button';


export default function CreateProduct() {
    const methods = useForm<Product>({
        resolver: yupResolver(createProduct),
    });

    const onSubmit: SubmitHandler<Product> = (data) => {
        console.log(data)
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
                                <ShortTextInput name="title" />
                                <ShortTextInput name="price" />
                                <ShortTextInput name="description" />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <ShortTextInput name="category" />
                                <ShortTextInput name="rating" />
                            </div>
                            <Button
                                type="submit"
                                variant="purple"
                                size="lg"
                                isLoading={false}>
                                Guardar
                            </Button>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </MainLayout>
    )
}
