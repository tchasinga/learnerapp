import { SignIn } from '@clerk/nextjs'
import React from 'react'

export default function page() {
    return <div className="flex items-center justify-center p-4"><SignIn /></div> 
}
