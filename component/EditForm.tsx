"use client"
import { Input } from '@/components/ui/input'
import type { Bookmark } from '@prisma/client'  
import { updateBookmark } from '@/lib/action'
import React from 'react'
import { useFormState } from 'react-dom'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { BookmarkIcon, PlusCircleIcon } from 'lucide-react'

const EditForm = ({bookmark}: {bookmark: Bookmark}) => {
    const UpdateBookmarkWithId = updateBookmark.bind(null, bookmark.id);
    const [state, formAction] = useFormState(UpdateBookmarkWithId, null);
  return (
    <div>
    <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="bg-[#4A6CF7] text-white py-8 px-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <BookmarkIcon className="h-10 w-10" />
                    <h1 className="text-3xl font-bold">Update Bookmark</h1>
                </div>
                <Avatar className="w-16 h-16 border-4 border-white">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>

            <div className="p-8">
                <form action={formAction} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor='title' className="block text-sm font-medium text-[#1D2B4F] dark:text-white">
                            Bookmark Title
                        </label>
                        <Input 
                            id='title' 
                            name='title' 
                            placeholder='Enter bookmark title' 
                            className="w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-[#4A6CF7] focus:border-[#4A6CF7]"
                            defaultValue={bookmark.title} 
                        />
                        {state?.Error?.title && (
                            <p className="mt-2 text-sm text-red-500">
                                {state.Error.title}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor='description' className="block text-sm font-medium text-[#1D2B4F] dark:text-white">
                            Description
                        </label>
                        <Input 
                            id='description' 
                            name='description' 
                            placeholder='Enter bookmark description' 
                            className="w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-[#4A6CF7] focus:border-[#4A6CF7]"
                            defaultValue={bookmark.description} 
                        />
                        {state?.Error?.description && (
                            <p className="mt-2 text-sm text-red-500">
                                {state.Error.description}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor='Url' className="block text-sm font-medium text-[#1D2B4F] dark:text-white">
                            Image URL
                        </label>
                        <Input 
                            id='Url' 
                            name='Url' 
                            placeholder='Enter image URL' 
                            className="w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-[#4A6CF7] focus:border-[#4A6CF7]" 
                            defaultValue={bookmark.Url}
                        />
                        {state?.Error?.Url && (
                            <p className="mt-2 text-sm text-red-500">
                                {state.Error.Url}
                            </p>
                        )}
                    </div>

                    <div className="pt-4">
                        <Button 
                            type='submit' 
                            className="w-full bg-[#4A6CF7] hover:bg-[#3A5BD7] text-white flex items-center justify-center space-x-2 text-lg py-3"
                        >
                            <PlusCircleIcon className="h-6 w-6 mr-2" />
                            Update Bookmark
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default EditForm