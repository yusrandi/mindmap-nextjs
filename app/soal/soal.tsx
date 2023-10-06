'use client'
import { DeleteIcon } from '@/icons/table/delete-icon'
import { formatDate } from '@/lib/utils'
import { SoalType } from '@/types/SoalType'
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Divider, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spacer, Spinner, Textarea, useDisclosure } from '@nextui-org/react'
import { now } from 'next-auth/client/_utils'
import React, { useState } from 'react'
import DropZone from './dropzone'

interface props {
    soal: SoalType,
    index: number
}
export default function Soal({ soal, index }: props) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [status, setStatus] = useState(0);

    const deletePost = async (onClose: () => void) => {

    };

    const DeleteIcon = ({ onClick }: { onClick: Function }) => {
        const [hover, setHover] = useState(false);
        return (
            <svg
                style={{ marginLeft: "10px", cursor: "pointer" }}
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                    setStatus(0)
                    onClick()
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.2871 5.24297C20.6761 5.24297 21 5.56596 21 5.97696V6.35696C21 6.75795 20.6761 7.09095 20.2871 7.09095H3.71385C3.32386 7.09095 3 6.75795 3 6.35696V5.97696C3 5.56596 3.32386 5.24297 3.71385 5.24297H6.62957C7.22185 5.24297 7.7373 4.82197 7.87054 4.22798L8.02323 3.54598C8.26054 2.61699 9.0415 2 9.93527 2H14.0647C14.9488 2 15.7385 2.61699 15.967 3.49699L16.1304 4.22698C16.2627 4.82197 16.7781 5.24297 17.3714 5.24297H20.2871ZM18.8058 19.134C19.1102 16.2971 19.6432 9.55712 19.6432 9.48913C19.6626 9.28313 19.5955 9.08813 19.4623 8.93113C19.3193 8.78413 19.1384 8.69713 18.9391 8.69713H5.06852C4.86818 8.69713 4.67756 8.78413 4.54529 8.93113C4.41108 9.08813 4.34494 9.28313 4.35467 9.48913C4.35646 9.50162 4.37558 9.73903 4.40755 10.1359C4.54958 11.8992 4.94517 16.8102 5.20079 19.134C5.38168 20.846 6.50498 21.922 8.13206 21.961C9.38763 21.99 10.6811 22 12.0038 22C13.2496 22 14.5149 21.99 15.8094 21.961C17.4929 21.932 18.6152 20.875 18.8058 19.134Z"
                    fill="#ff0000"
                    stroke={hover ? "#9b0079" : "#9ba1a6"}
                />
            </svg>
        );
    };
    const EditIcon = ({ onClick }: { onClick: Function }) => {
        const [hover, setHover] = useState(false);
        return (
            <svg
                style={{ marginLeft: "auto", cursor: "pointer" }}
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                onClick={() => {
                    setStatus(1)
                    onClick()
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                id="edit">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2zM5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4 18 6.73l-2 1.95L13.32 6z"
                    data-name="edit-2"
                    fill="#09ff00"
                    stroke={hover ? "#9b0079" : "#9ba1a6"}
                >
                </path>
            </svg>
        );
    };
    return (
        <>
            <Card className="p-2 mt-4">
                <CardHeader>
                    <div className="">
                        <div className="font-bold">Soal ke-{index + 1}</div>

                    </div>
                </CardHeader>
                <CardBody>
                    <p>{soal.soal}</p>
                    <p className='text-small text-default-500'>A. {soal.a}</p>
                    <p className='text-small text-default-500'>B. {soal.b}</p>
                    <p className='text-small text-default-500'>C. {soal.c}</p>
                    <p className='text-small text-default-500'>D. {soal.d}</p>
                </CardBody>
                <CardFooter>
                    {<EditIcon onClick={onOpen} />}
                    {<DeleteIcon onClick={onOpen} />}
                </CardFooter>
            </Card>

            <Modal
                closeButton
                aria-labelledby="modal-title"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        status === 0 ?
                            <>
                                <ModalHeader>
                                    <p className="text-xl" id="modal-title">
                                        Are you sure you want to delete?
                                    </p>
                                </ModalHeader>
                                <ModalFooter>
                                    <Button variant="flat" onPress={onClose}>
                                        Cancel
                                    </Button>
                                    <Button color="danger" onPress={() => deletePost(onClose)}>
                                        {deleteLoading ? <Spinner size="sm" /> : "Delete"}
                                    </Button>
                                </ModalFooter>
                            </>
                            :
                            <>
                                <ModalHeader>
                                    <p className="text-xl" id="modal-title">
                                        Form Edit
                                    </p>
                                </ModalHeader>
                                <ModalBody>
                                    <Textarea
                                        validationState={"valid"}
                                        // errorMessage={error && errorMessage}
                                        className="mt-6"
                                        size="lg"
                                        variant="bordered"
                                        labelPlacement="outside"
                                        // isDisabled={!session || enhancing}
                                        label={"Soal :"}
                                        placeholder={"Enter your amazing ideas..."}
                                        value={soal.soal}
                                        maxLength={300}
                                    // onChange={(e) => setContent(e.target.value)}
                                    />

                                    <Input
                                        isRequired
                                        value={soal.benar}
                                        label="Jawaban Benar"
                                        variant="bordered"
                                        // isInvalid={!value}
                                        // color={!value ? "danger" : "success"}
                                        // errorMessage={!value && "Field is required"}
                                        // onValueChange={setValue}
                                        className="mr-auto"
                                    />

                                    <div className='flex-row flex-grow flex justify-center items-center'>
                                        <Input
                                            isRequired
                                            value={soal.a}
                                            label="Jawaban A"
                                            variant="bordered"
                                            // isInvalid={!value}
                                            // color={!value ? "danger" : "success"}
                                            // errorMessage={!value && "Field is required"}
                                            // onValueChange={setValue}
                                            className="mr-auto"
                                        />
                                        <Spacer x={1} />
                                        <p>OR</p>
                                        <Spacer x={1} />
                                        <DropZone />
                                    </div>
                                    <div className='flex-row flex-grow flex justify-center items-center'>
                                        <Input
                                            isRequired
                                            value={soal.b}
                                            label="Jawaban B"
                                            variant="bordered"
                                            // isInvalid={!value}
                                            // color={!value ? "danger" : "success"}
                                            // errorMessage={!value && "Field is required"}
                                            // onValueChange={setValue}
                                            className="mr-auto"
                                        />
                                        <Spacer x={1} />
                                        <p>OR</p>
                                        <Spacer x={1} />
                                        <DropZone />
                                    </div>
                                    <div className='flex-row flex-grow flex justify-center items-center'>
                                        <Input
                                            isRequired
                                            // value={value}
                                            value={soal.c}
                                            label="Jawaban C"
                                            variant="bordered"
                                            // isInvalid={!value}
                                            // color={!value ? "danger" : "success"}
                                            // errorMessage={!value && "Field is required"}
                                            // onValueChange={setValue}
                                            className="mr-auto"
                                        />
                                        <Spacer x={1} />
                                        <p>OR</p>
                                        <Spacer x={1} />
                                        <DropZone />
                                    </div>
                                    <div className='flex-row flex-grow flex justify-center items-center'>
                                        <Input
                                            isRequired
                                            // value={value}
                                            value={soal.d}
                                            label="Jawaban D"
                                            variant="bordered"
                                            // isInvalid={!value}
                                            // color={!value ? "danger" : "success"}
                                            // errorMessage={!value && "Field is required"}
                                            // onValueChange={setValue}
                                            className="mr-auto"
                                        />
                                        <Spacer x={1} />
                                        <p>OR</p>
                                        <Spacer x={1} />
                                        <DropZone />
                                    </div>

                                </ModalBody>
                                <ModalFooter>
                                    <Button variant="flat" onPress={onClose}>
                                        Cancel
                                    </Button>
                                    <Button color="danger" onPress={() => deletePost(onClose)}>
                                        {deleteLoading ? <Spinner size="sm" /> : "Submit"}
                                    </Button>
                                </ModalFooter>
                            </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
