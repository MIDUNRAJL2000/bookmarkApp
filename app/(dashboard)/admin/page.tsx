
import { BookmarkIcon, ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import React from 'react';

const AdminPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return (
      <h2 className="text-2xl text-center mt-20">
        Please login to see this admin page.
      </h2>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-['Inter']">
      
      <header className="border-b bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <BookmarkIcon className="h-6 w-6 text-[#4A6CF7]" />
            <span className="text-2xl font-bold text-[#1D2B4F]">Admin Panel</span>
          </div>
        </div>
      </header>

      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-slate-800 dark:text-white tracking-tight">
            Welcome {session.user.username || session.user.name}
          </h1>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
            Manage your bookmarks and digital workspace with ease.
          </p>
          <Link href="/">
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg flex items-center mx-auto space-x-2 px-8 py-6 text-lg transition-all"
            >
              <span>Go to Bookmark Landing</span>
              <ArrowRightIcon className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <footer className="bg-[#1D2B4F] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; 2024 EasyMark. Intelligent Bookmark Management.</p>
        </div>
      </footer>
    </div>
  );
};

export default AdminPage;
