'use client'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import React from 'react'

const UserAccountnav = () => {
  return (
    <Button onClick={() => signOut({
        redirect: true,
        callbackUrl: `${window.location.origin}/sign-in`,
    })} variant='destructive'>
        Sign Out
    </Button>
  )
}

export default UserAccountnav;