'use client'
import { BabType, SubBabType } from '@/types/MateriType'
import { Button, Card, CardFooter, CardHeader, Divider, Image, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import Link from 'next/link'
import React, { useState } from 'react'
import DropZone from './dropzone'

interface props {
    materi: BabType
}
export default function GameDetail({ materi }: props) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [subBab, setSubBab] = useState<SubBabType>()
    const [value, setValue] = useState<string>("")

    function onOpenModalUpdate(sub: SubBabType) {
        setSubBab(sub)
        onOpen()


    }
    return (
        <div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                isDismissable={false}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <h3 className="flex flex-grow text-2xl font-bold bg-gradient-to-r from-red-600 via-yellow-600 to-yellow-600 to-50% text-transparent bg-clip-text">
                                    Ubah Materi {subBab?.title}
                                </h3>
                            </ModalHeader>
                            <ModalBody>

                                <Input
                                    isRequired
                                    value={value}
                                    label="Materi Video"
                                    variant="bordered"
                                    isInvalid={!value}
                                    color={!value ? "danger" : "success"}
                                    errorMessage={!value && "Field is required"}
                                    onValueChange={setValue}
                                    className=""
                                />
                                <p>Materi (pdf) <span className='text-red-600'>*</span></p>
                                <DropZone />
                                <p>Soal (pdf) <span className='text-red-600'>*</span></p>
                                <DropZone />
                                <Divider />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="ghost" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="secondary" variant="ghost" onPress={onClose} className="px-10">
                                    Submit update
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>


            {
                materi.subbabs.map((subBab: SubBabType) => (
                    <Card
                        key={subBab.id}
                        isFooterBlurred
                        className="w-full h-[400px] col-span-12 sm:col-span-7 mt-8"
                    >
                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">
                                {materi.title}
                            </p>
                            <h4 className="text-white/90 font-medium text-3xl">
                                {subBab.title}
                            </h4>

                        </CardHeader>
                        <Image
                            removeWrapper
                            isBlurred
                            src={materi.src}
                            alt="Materi app background"
                            className="z-0 w-full h-full object-cover"
                        />
                        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">

                            <div className="flex flex-grow gap-2 items-center">

                                <Link
                                    className="text-teal-200 bg-teal-400 bg-opacity-30 px-6 py-2 rounded-full"
                                    href={{
                                        pathname: '/soal',
                                        query: {
                                            title: materi.title
                                        }
                                    }}
                                >
                                    <span className="text-sm font-semibold ">
                                        Edit Soal
                                    </span>
                                </Link>
                            </div>

                        </CardFooter>
                    </Card>
                ))
            }
        </div>
    )
}
