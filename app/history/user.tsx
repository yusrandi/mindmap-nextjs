import React from 'react'

interface props {
    userId: string
}
export default function HistoryUser({ userId }: props) {
    return (
        <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{"Name"}</h4>
            <h5 className="text-small tracking-tight text-default-400">{"email"}</h5>
        </div>
    )
}
