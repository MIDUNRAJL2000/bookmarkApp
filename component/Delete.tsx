import { deleteBookmark } from "@/lib/action";
 
export const DeleteButton = ({ id }: { id: string }) => {
  const DeleteBookmarkWithId = deleteBookmark.bind(null, id);
  return (
    <form action={DeleteBookmarkWithId}>
      <button className="btn btn-error">
        Delete
      </button>
    </form>
  );
};