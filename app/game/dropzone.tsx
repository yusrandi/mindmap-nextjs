'use client'

import React, { useCallback, useMemo } from 'react'
import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { any } from 'prop-types';
import { firestore } from '@/lib/firebase';
import FileUpload from './FileUpload';



export default function DropZone() {

    useEffect(() => {
        console.log('hello');
        // tesDb()
    }, [])


    const baseStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#eeeeee',
        borderStyle: 'dashed',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
        outline: 'none',
        transition: 'border .24s ease-in-out',

    };

    const focusedStyle = {
        borderColor: '#2196f3'
    };

    const acceptStyle = {
        borderColor: '#00e676'
    };

    const rejectStyle = {
        borderColor: '#ff1744'
    };

    const [files, setFiles] = useState([]);

    const onDrop = useCallback((acceptedFiles: any) => {
        console.log({ acceptedFiles });

        setFiles(acceptedFiles.map((file: any) => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));

        // FileUpload(acceptedFiles[0])
    }, []);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isFocused,
        isDragAccept,
        isDragReject
    } = useDropzone({
        onDrop,
        accept: {
            'image/png': ['.png', '.jpg', '.jpeg'],
        }
    });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);

    const thumbs = files.map((file: any) => (
        <div key={file.name}>
            <img
                src={file.preview}
                alt={file.name}
            />
        </div>
    ));

    // clean up
    useEffect(() => () => {
        files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <div>
            <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <div>Drag and drop your file here.</div>
                <aside className='w-20'>
                    {thumbs}
                </aside>
            </div>


        </div>
    )
}
