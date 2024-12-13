"use client"
import { Input } from '@/components/ui/input'
import type { Bookmark } from '@prisma/client'  
import { updateBookmark } from '@/lib/action'
import React from 'react'
import { useFormState } from 'react-dom'

const EditForm = ({bookmark}: {bookmark: Bookmark}) => {
    const UpdateBookmarkWithId = updateBookmark.bind(null, bookmark.id);
    const [state, formAction] = useFormState(UpdateBookmarkWithId, null);
  return (
    <div>
        <form action={formAction}>
        <div className='space-y-2 mb-4'>
                    <label htmlFor='title' className='block text-sm font-medium'>Give the book title</label>
                    <Input id='title' placeholder='Enter ur name' name='title' className='w-full max-w-xs' defaultValue={bookmark.title} />
                    <div id='title-error' aria-live='polite' aria-atomic='true'>
                        <p className='mt-2 text-sm text-red-500'>{state?.Error?.title}</p>
                    </div>
                  
                </div>
                <div className='space-y-2 mb-4'>
                    <label htmlFor='description' className='block text-sm font-medium'>Description</label>
                    <Input id='description' placeholder='Enter ur email' name='description' className='w-full max-w-xs' defaultValue={bookmark.description} />
                    <div id='description-error' aria-live='polite' aria-atomic='true'>
                        <p className='mt-2 text-sm text-red-500'>{state?.Error?.description}</p>
                    </div>
                    
                </div>
                <div className='space-y-2 mb-4'>
                    <label htmlFor='image' className='block text-sm font-medium'>Image URL</label>
                    <Input id='image' placeholder='Enter url' name='image' className='w-full max-w-xs' defaultValue={bookmark.imageUrl} />
                    <div id='image-error' aria-live='polite' aria-atomic='true'>
                        <p className='mt-2 text-sm text-red-500'>{state?.Error?.image}</p>
                    </div>
                 
                </div>
                <button className=''>Update</button>
        </form>
    </div>
  )
}

export default EditForm