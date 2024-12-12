import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {z} from 'zod'

const EmployeeSchema = z.object({
    name: z.string().min(1, {message: 'Name is required'}),
    email: z.string().email({message: 'Invalid email address'}),
    image: z.string().url({message: 'Invalid URL'}),
});

export const saveUser = async(prevState: any, formData: FormData) => {
    const validatedFields = EmployeeSchema.safeParse(
   Object.fromEntries(formData.entries())
    );

    if(!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        }
    }

    try{}
    catch (error) {
        return {
            message: 'Database Error: Failed to Create User'
        }
    }
    revalidatePath("/user");
    redirect("/user");
}           
