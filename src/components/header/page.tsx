import Image from "next/image"
import Link from "next/link";
import { AlignStartVertical } from 'lucide-react';

export default function Header() {
  return (

    <div className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end ">
           
            <a href="https://www.instagram.com" className="flex ms-2 md:me-24">
              <AlignStartVertical className=" h-8 me-2" />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Dreamteam</span>
            </a>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ms-3">
              <div>
                <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                  <span className="sr-only">Open user menu</span>
                  <Image
                    src="/images/profile/profile.jpg"
                    alt="Landscape picture"
                    width={50}
                    height={50}
                    className=" rounded-full"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
