'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod"
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import GoogleSignInButton from '../GoogleSignInButton'

const formSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
  });

const SignInForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
          },
    })

    const onSubmit = (values: z.infer<typeof formSchema> ) => {
        console.log(values)
    }

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md mx-auto p-4 space-y-6">
        {/* Email Field */}
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input placeholder="mail@examole.com" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
        
        {/* Password Field */}
        <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <Input type="password" placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        {/* Sign In Button */}
        <Button className='w-full' type="submit">Sign in</Button>

        {/* Divider */}
        <div className="flex items-center justify-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="mx-3 text-gray-500 text-sm">or</span>
            <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <GoogleSignInButton>Sign in with Google</GoogleSignInButton>

        <p className='text-center text-sm text-gray-600'>
            If you don&apos;t have an account, please&nbsp;
            <Link href="/sign-up" className="text-blue-500 font-bold hover:underline">
                Sign up
            </Link>
        </p>
    </form>
</Form>
  
  )
}

export default SignInForm