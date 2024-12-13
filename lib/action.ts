"use server"
import { revalidatePath } from 'next/cache';
import { prisma} from "@/lib/prisma";
import { redirect } from 'next/navigation';
import {z} from 'zod'

const EmployeeSchema = z.object({
    title: z.string().min(6, {message: 'Name is required'}),
    description: z.string().min(6,{message: 'Invalid email address'}),
    image: z.string().min(2, {message: 'Invalid URL'}),
});

export const saveBookmark = async(prevState: any, formData: FormData) => {
 
    const validatedFields = EmployeeSchema.safeParse(
   Object.fromEntries(formData.entries())
    );

    if(!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        }
    }
 

    try{
        await prisma.Bookmark.create({
            data: {
                title: validatedFields.data.title,
                description: validatedFields.data.description,
                imageUrl: validatedFields.data.image,
            },
        });
    }
    
    catch (error) {
        console.log(error)
        return {
            message: 'Database Error: Failed to Create User'
        }
    }
    revalidatePath("/user");
    redirect("/user");
}           
