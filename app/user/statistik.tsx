'use client'
import { HistoryType } from '@/types/HistoryType';
import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import UserCart from './cart';
interface props {
    userId: string
}
export default function UserStatistik({ userId }: props) {
    const [isLoading, setIsLoading] = useState(true)
    const [histories, setHistories] = useState<HistoryType[]>([])


    const db = getDatabase();

    useEffect(() => {
        return onValue(ref(db, '/histories/' + userId), (snapshot) => {
            setHistories([])
            console.log(snapshot.val());
            snapshot.forEach(element => {
                const history: HistoryType = element.val() as HistoryType
                setHistories((prevData) => [
                    ...prevData, history
                ])
            });
            setIsLoading(false)

            // ...
        }, {
            onlyOnce: true
        });
    }, [])
    return (
        <div>

            {
                isLoading ? <p>....</p> : <UserCart items={histories} />
            }
        </div>
    )
}
