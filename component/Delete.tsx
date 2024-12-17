import { deleteBookmark } from "@/lib/action";
import { TrashIcon } from "lucide-react";
 
export const DeleteButton = ({ 
  id, 
  className 
}: { 
  id: string, 
  className?: string 
}) => {
  const DeleteBookmarkWithId = deleteBookmark.bind(null, id);
  return (
    <form action={DeleteBookmarkWithId}>
      <button 
        type="submit"
        className={`
          flex items-center justify-center space-x-2 
          text-red-600 dark:text-red-300 
          bg-red-100 dark:bg-red-900 
          py-2 px-4 
          rounded-lg 
          hover:bg-red-200 dark:hover:bg-red-800 
          transition-colors
          ${className || 'w-full'}
        `}
      >
        <TrashIcon className="h-5 w-5" />
        <span>Delete</span>
      </button>
    </form>
  );
};