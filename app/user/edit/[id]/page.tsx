import EditForm from "@/component/EditForm";
import { updateBookmarkById } from "@/lib/action";
import { notFound } from "next/navigation";

const UpdateBookmark = async ({ params }: { params: { id: string } }) => {
    const id = params.id;
    const bookmark = await updateBookmarkById(id);

    if(!bookmark){
        notFound();
    }

    return(
        <div className="max-w-md mx-auto mt-5">
            <h1 className="text-2xl text-center mb-2">Update Employee</h1>
            <EditForm bookmark={bookmark} />
            </div>
    )
   
        }