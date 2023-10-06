'use client'
import { database, gamesDatabaseRef, usersDatabaseRef } from '@/lib/firebase'
import { SoalType } from '@/types/SoalType'
import { getDatabase, onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import LoadingSoal from './loading'
import Soal from './soal'
interface props {
    title: string
}
export default function SoalContent({ title }: props) {

    const [soals, setSoals] = useState<SoalType[]>([])
    const starCountRef = ref(database, 'games/' + title);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        return onValue(starCountRef, (snapshot) => {
            console.log({ snapshot });
            setSoals([])

            snapshot.forEach((value) => {
                let soal: SoalType = value.val() as SoalType
                setSoals((prevData) => [...prevData, soal])
            })

            setLoading(false)
        })
    }, [])
    return (
        <div>
            {
                loading ? <LoadingSoal /> :
                    soals.map((soal, index) => (
                        <Soal soal={soal} index={index} key={index} />
                    ))
            }


        </div>
    )
}
