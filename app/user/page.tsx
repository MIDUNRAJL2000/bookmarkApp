import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
import Link from 'next/link'
import { getBookmarkList } from '@/lib/action';
import { DeleteButton } from "@/component/Delete";
import React from 'react'

const page = async({
  query
}: {
  query: string
}) => {
  const bookmarks = await getBookmarkList(query);
  return (
    <div className='w-screen py-20 flex justify-center flex-col items-center'>
        <div className='flex justify-between items-center gap-1 mb-5'>
        <TableCaption className="text-3xl">List of Bookmarks.</TableCaption>
        </div>
        <div className=''>
            <div className='mb-2 w-full text-right'>
                <Link href='/user/create' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-3 px-4 rounded'>Create</Link>
            </div>

            <Table className="mt-4">
  <TableCaption>A list of Users.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Id</TableHead>
      <TableHead>Title</TableHead>
      <TableHead>Description</TableHead>
      <TableHead>Image Url</TableHead>
      <TableHead>Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {bookmarks.map((rs, index) => {
       <TableRow key={rs.id}>
        <TableCell className="font-medium">{index + 1}</TableCell>
        <TableCell>{rs.title}</TableCell>
        <TableCell>{rs.description}</TableCell>
        <TableCell>{rs.imageUrl}</TableCell>
        <TableCell className="flex justify-center gap-1 py-3">
          <Link href={`/user/edit/${rs.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Edit 
          </Link>
          <DeleteButton id={rs.id}/>
          </TableCell>
      </TableRow>

    })}
   
    
  </TableBody>
</Table>


    </div>
    </div>
  )
}

export default page