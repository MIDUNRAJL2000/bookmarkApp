"use server"
import { revalidatePath } from 'next/cache';
import { db } from "@/lib/prisma";
import { redirect } from 'next/navigation';
import {z} from 'zod'
import { getServerSession } from 'next-auth';
import { authOptions } from './auth';

const BookmarkSchema = z.object({
    title: z.string().min(6, { message: "Title must be at least 6 characters." }),
    description: z.string().min(6, { message: "Description must be at least 6 characters." }),
    Url: z.string().min(2,{ message: "Invalid URL format." }),
  });

export const saveBookmark = async(_prevState: any, formData: FormData) => {
 
    const validatedFields = BookmarkSchema.safeParse(
   Object.fromEntries(formData.entries())
    );

    if(!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        }
    }
 

    try{
    //     const session = await getServerSession(authOptions);
    // if (!session?.user?.id) {
    //   return { message: "User not authenticated." };
    // }
    // console.log('session', session);
        await db.bookmark.create({
            data: {          
                title: validatedFields.data.title,
                description: validatedFields.data.description,
                Url: validatedFields.data.Url,
                userId: '123',
            },
        });
    }
    
    catch (error) {
        return {
            message: 'Database Error: Failed to Create User'
        }
    }
    revalidatePath("/user");
    redirect("/user");
}           

export const getBookmarkList = async (_query: string) =>{
    try{
        const bookmarks = await db.bookmark.findMany({
            select: {
                id: true,
                title: true,
                description: true,
                Url: true,
            }
        });
        return bookmarks;
    } catch (error){
        throw new Error("Failed to fetch bookmark list");
    }
}

export const updateBookmarkById = async (id: string) => {
    try{
        const bookmark = await db.bookmark.findUnique({
            where: {
                id: id,
            },
        });
        return bookmark;
    } catch (error){
        throw new Error("Failed to fetch bookmark list");
    }
}

export const updateBookmark = async(
    id: string,
    _prevState: any,
    formData: FormData
) => {
    const validatedFields = BookmarkSchema.safeParse(
        Object.fromEntries(formData.entries())
    );
    if(!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        }
    }
    try{
        await db.bookmark.update({
            where: {
                id: id,
            },
            data: {
                title: validatedFields.data.title,
                description: validatedFields.data.description,
                Url: validatedFields.data.Url,
            },
        });

    } catch (error) {
        return { message: "Failed to update bookmark" }
    }
    revalidatePath("/user");
    redirect("/user");
}

export const deleteBookmark = async (id: string) => {
    try {
      await db.bookmark.delete({
        where: { id },
      });
    } catch (error) {
      return { message: "Failed to delete Bookmark" };
    }
   
    revalidatePath("/user");
  };