import AccountMenu from "@/components/AccountMenu";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Header() {
  return (
    <header aria-label="Page Header" className="bg-gray-900">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center sm:justify-between sm:gap-4">
          {/* <SearchBar /> */}

          <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
            <div className="flex gap-4">
              <Link
                href={`/blog`}
                className="block shrink-0 rounded bg-gray-700 p-2.5 text-gray-300 shadow-sm hover:text-gray-500"
              >
                <span className="sr-only">Notifications</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </Link>
            </div>

            <AccountMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
