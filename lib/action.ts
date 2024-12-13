"use server"
import { revalidatePath } from 'next/cache';
import { prisma} from "@/lib/prisma";
import { redirect } from 'next/navigation';
import {z} from 'zod'

const BookmarkSchema = z.object({
    title: z.string().min(6, {message: 'Name is required'}),
    description: z.string().min(6,{message: 'Invalid email address'}),
    imageUrl: z.string().min(2, {message: 'Invalid URL'}),
});

export const saveBookmark = async(prevState: any, formData: FormData) => {
 
    const validatedFields = BookmarkSchema.safeParse(
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
                imageUrl: validatedFields.data.imageUrl,
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

export const getBookmarkList = async (query: string) =>{
    try{
        const bookmarks = await prisma.Bookmark.findMany({
            select: {
                id: true,
                title: true,
                description: true,
                imageUrl: true,
            }
        });
        return bookmarks;
    } catch (error){
        throw new Error("Failed to fetch bookmark list");
    }
}

export const updateBookmarkById = async (id: string) => {
    try{
        const bookmark = await prisma.Bookmark.findUnique({
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
    prevState: any,
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
        await prisma.Bookmark.update({
            where: {
                id: id,
            },
            data: {
                title: validatedFields.data.title,
                description: validatedFields.data.description,
                imageUrl: validatedFields.data.imageUrl,
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
      await prisma.Bookmark.delete({
        where: { id },
      });
    } catch (error) {
      return { message: "Failed to delete Bookmark" };
    }
   
    revalidatePath("/user");
  };