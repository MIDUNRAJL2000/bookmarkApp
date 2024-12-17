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
        <div className="py-16">
            <EditForm bookmark={bookmark} />
            </div>
    )
   
        };
        export default UpdateBookmark;