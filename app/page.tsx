import { BookmarkIcon, ListChecksIcon, SearchIcon, ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const BookmarksLanding = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-['Inter']">
      <header className="border-b bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <BookmarkIcon className="h-6 w-6 text-[#4A6CF7]" />
            <span className="text-2xl font-bold text-[#1D2B4F]">EasyMark</span>
          </div>
          <Link href="/auth/signin">
            <Button  className="bg-[#4A6CF7] hover:bg-[#3A5BD7] text-white w-[120px] ml-5">Sign In</Button>
          </Link>
        </div>
      </header>

 <div>
        <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
   <div className="container mx-auto px-6 text-center">
   <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-slate-800 dark:text-white tracking-tight">
     Simplify Your Digital Workspace
   </h1>
   <p className="text-xl mb-10 max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
       Effortlessly save, organize, and share your favorite web resources with intelligent bookmark management.
   </p>
  <Link href="/user/create">
  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg flex items-center mx-auto space-x-2 px-8 py-6 text-lg transition-all">
    <span>Get Started</span>
    <ArrowRightIcon className="h-5 w-5" />
  </Button>
  </Link>
  </div>
  </section>
  <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1D2B4F] mb-4">Powerful Features</h2>
              <p className="text-[#6B7280] max-w-2xl mx-auto">
                Designed for professionals who value efficiency and collaboration.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white shadow-md rounded-lg">
                <BookmarkIcon className="h-12 w-12 mx-auto text-[#4A6CF7] mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-[#1D2B4F]">Smart Bookmarking</h3>
                <p className="text-[#6B7280]">
                  Automatically categorize and tag your bookmarks with intelligent metadata extraction.
                </p>
              </div>
              <div className="text-center p-6 bg-white shadow-md rounded-lg">
                <ListChecksIcon className="h-12 w-12 mx-auto text-[#10B981] mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-[#1D2B4F]">Collections</h3>
                <p className="text-[#6B7280]">
                  Create dynamic collections and folders to organize your digital resources effortlessly.
                </p>
              </div>
              <div className="text-center p-6 bg-white shadow-md rounded-lg">
                <SearchIcon className="h-12 w-12 mx-auto text-[#F59E0B] mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-[#1D2B4F]">Advanced Search</h3>
                <p className="text-[#6B7280]">
                  Instantly find what you need with our powerful search functionality that supports keywords and tags.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-[#1D2B4F] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; 2024 Curate. Intelligent Bookmark Management.</p>
        </div>
      </footer>
    </div>
  );
};

 export default BookmarksLanding;