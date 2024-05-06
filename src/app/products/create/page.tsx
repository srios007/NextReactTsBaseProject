"use client";

import { MainLayout } from '@/layouts'
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import React from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import { createProduct } from '@/helper/SchemaValidate';
import { NumberInput, ShortTextInput } from '@/components/Inputs';
import { Button } from '@/components/Button';
import { FakeProductPost } from '@/types/fakeProduct';
import { postProduct } from '@/services/prodcts';
import { useRouter } from 'next/navigation';



export default function CreateProduct() {
    const navigate = useRouter();

    const methods = useForm<FakeProductPost>({
        resolver: yupResolver(createProduct),
    });

    const onSubmit: SubmitHandler<FakeProductPost> = (data) => {
        console.log(data)
        createProductFunc(data)
    }

    function createProductFunc(product: FakeProductPost) {
        postProduct(product)
            .then((res) => {
                navigate.back();
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <MainLayout >
            <div>
                <h1 className='text-black pb-5 text-[24px] font-bold'>
                    Crear producto
                </h1>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-2 gap-5'>
                            <div className='flex flex-col gap-3'>
                                <ShortTextInput name="title" title='Nombre' />
                                <NumberInput name="price" title='Precio' />
                                <ShortTextInput name="description" title='Descipción' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <ShortTextInput name="category" title='Categoría' />
                                <ShortTextInput name="image" title='Link de la imagen' />
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
