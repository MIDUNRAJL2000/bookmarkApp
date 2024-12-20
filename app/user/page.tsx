import React from 'react';
import Link from 'next/link';
import { BookmarkIcon, EditIcon } from 'lucide-react';
import { getBookmarkList } from '@/lib/action';
import { DeleteButton } from '@/component/Delete';

const BookmarksPage = async ({ query }: { query: string }) => {
  const bookmarks = await getBookmarkList(query);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-['Inter'] py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center space-x-3">
            <BookmarkIcon className="h-8 w-8 text-[#4A6CF7]" />
            <h1 className="text-4xl font-bold text-[#1D2B4F] dark:text-white">My Bookmarks</h1>
          </div>
          <Link href='/user/create'>
            <button className="bg-[#4A6CF7] hover:bg-[#3A5BD7] text-white font-bold py-3 px-6 rounded-lg flex items-center space-x-2 transition-colors">
              <span>Create New Bookmark</span>
              <BookmarkIcon className="h-5 w-5" />
            </button>
          </Link>
        </div>

        {bookmarks.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <BookmarkIcon className="h-16 w-16 mx-auto text-[#4A6CF7] mb-4" />
            <p className="text-xl text-[#6B7280] dark:text-gray-300">
              No bookmarks yet. Start saving your favorite resources!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookmarks.map((bookmark: { id: string; title: string; description: string; Url: string }) => (
              <div
                key={bookmark.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all hover:shadow-xl hover:-translate-y-2"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-[#1D2B4F] dark:text-white mb-3">{bookmark.title}</h2>
                  <p className="text-[#6B7280] dark:text-gray-300 mb-3">{bookmark.description}</p>
                  <a
                    href={bookmark.Url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4A6CF7] dark:text-blue-300 underline mb-6 block"
                  >
                    {bookmark.Url}
                  </a>
                  <div className="flex space-x-3">
                    <Link
                      href={`/user/edit/${bookmark.id}`}
                      className="flex-1 bg-blue-100 dark:bg-blue-900 text-[#4A6CF7] dark:text-blue-300 py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                    >
                      <EditIcon className="h-5 w-5" />
                      <span>Edit</span>
                    </Link>

                    <DeleteButton id={bookmark.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookmarksPage;
