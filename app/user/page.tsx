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
import React from 'react'

const page = () => {
  return (
    <div className='w-screen py-20 flex justify-center flex-col items-center'>
        <div className='flex justify-between items-center gap-1 mb-5'>
        <TableCaption className="text-3xl">A list of Users.</TableCaption>
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
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead className="">Email Verified</TableHead>
      <TableHead>Image</TableHead>
      <TableHead>Accounts</TableHead>
      <TableHead>Session</TableHead>
      <TableHead>Bookmarks</TableHead>
      <TableHead>Collections</TableHead>
      <TableHead>Shared with</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">1</TableCell>
      <TableCell>Midun</TableCell>
      <TableCell>midun124@gmail.com</TableCell>
      <TableCell className="text-right">Date</TableCell>
      <TableCell>https://images.app.goo.gl/82zBW85F2j8SLd9u5</TableCell>
      <TableCell>Array</TableCell>
      <TableCell>Array</TableCell>
      <TableCell>Array</TableCell>
      <TableCell>Array</TableCell>
      <TableCell>Array</TableCell>
    </TableRow>
  </TableBody>
</Table>


    </div>
    </div>
  )
}

export default page