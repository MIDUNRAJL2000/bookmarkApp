"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { saveUser } from '@/lib/action'
import React from 'react'
import { useFormState } from 'react-dom'

const page = () => {
    const [state, formAction] = useFormState(saveUser, null);
  return (
    <div>
    <div className="flex items-center mt-5 justify-center gap-2">

    <Avatar>
<AvatarImage src="https://github.com/shadcn.png" className='w-30 h-30' />
<AvatarFallback>CN</AvatarFallback>
</Avatar>
<h1 className='text-4xl text-center font-bold '>User</h1>
</div>
    <div className='max-w-md mx-auto mt-5'>

            <div className='flex items-center justify-center'>
            <form action={formAction}>
                <div className='space-y-2 mb-4'>
                    <label htmlFor='name' className='block text-sm font-medium'>Name</label>
                    <Input id='name' placeholder='Enter ur name' name='name' className='w-full max-w-xs' />
                    <div id='name-error' aria-live='polite' aria-atomic='true'>
                        <p className='mt-2 text-sm text-red-500'>{state?.Error?.name}</p>
                    </div>
                </div>
                <div className='space-y-2 mb-4'>
                    <label htmlFor='email' className='block text-sm font-medium'>Email</label>
                    <Input id='email' placeholder='Enter ur email' name='email' className='w-full max-w-xs' />
                    <div id='email-error' aria-live='polite' aria-atomic='true'>
                        <p className='mt-2 text-sm text-red-500'>{state?.Error?.email}</p>
                    </div>
                </div>
                <div className='space-y-2 mb-4'>
                    <label htmlFor='image' className='block text-sm font-medium'>Image</label>
                    <Input id='image' placeholder='Enter url' name='image' className='w-full max-w-xs' />
                    <div id='image-error' aria-live='polite' aria-atomic='true'>
                        <p className='mt-2 text-sm text-red-500'>{state?.Error?.image}</p>
                    </div>
                </div>
               
                <Button type='submit' className=' mt-3'>Submit</Button>

            </form>
        </div>
    </div>
    </div>
  )
}

export default page