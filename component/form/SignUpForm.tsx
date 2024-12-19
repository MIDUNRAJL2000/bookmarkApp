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
import { useRouter } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'

const formSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match',
  });

const SignUpForm = () => {
    const router = useRouter()
    const toast = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        },
      });

    const onSubmit = async (values: z.infer<typeof formSchema> ) => {
        const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: values.username,
                email: values.email,
                password: values.password,
            })
        })

        if(response.ok){
            router.push('/sign-in')
        } else{
            toast({
                title: 'Error',
                description: "Oops! Something went wrong. Please try again.",
                variant: 'destructive',
            })
        }
    };

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md mx-auto p-4 space-y-6">
    <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                        <Input placeholder="midunraj" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input placeholder="mail@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
        
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

<FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Re-Enter your Password</FormLabel>
                    <FormControl>
                        <Input placeholder="Re-Enter your password" type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        <Button className='w-full' type="submit">Sign up</Button>

        <div className="flex items-center justify-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="mx-3 text-gray-500 text-sm">or</span>
            <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <GoogleSignInButton>Sign up with Google</GoogleSignInButton>

        <p className='text-center text-sm text-gray-600'>
            If you don&apos;t have an account, please&nbsp;
            <Link href="/sign-in" className="text-blue-500 font-bold hover:underline">
                Sign In
            </Link>
        </p>
    </form>
</Form>
  
  )
}

export default SignUpForm