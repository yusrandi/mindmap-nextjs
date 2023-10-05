import { storage } from '@/lib/firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import React from 'react'

export default function FileUpload(file: File) {
  const storageRef = ref(storage, `files/${file.name}`)
  const uploadTask = uploadBytesResumable(storageRef, file)

  uploadTask.on("state_changed", 
  
    (snapshot) => {
        const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log({progress});
    },
    (error) => {
        console.log({error});
    },
    () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => console.log({downloadUrl}))
    }
  )
}
