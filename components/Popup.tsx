import Link from "next/link";

export default function Modal() {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-25 overflow-y-auto h-full w-full flex items-center justify-center" style={{backdropFilter:'blur(2px)'}}>
        <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">Hey There!</h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-sm text-gray-500">Want To go to animation page</p>
            </div>
            <div className="flex justify-center gap-3 mt-4">
              <Link
                href="/"
                className="px-6 py-1 bg-red-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                No
              </Link>
              <Link
                href="/second-page"
                className="px-6 py-1 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Yes
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }