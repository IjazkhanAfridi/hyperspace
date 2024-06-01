import Link from "next/link";
import Modal from "../components/Popup"

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Page({ searchParams }: SearchParamProps) {
  // const data = await getData()
  const show = searchParams?.show;

  return (
    <>
     <div className={`min-h-screen w-full flex items-center justify-center`}>
      <Link href="/?show=true" className="bg-blue-700 hover:bg-blue-800 rounded-full px-4 py-2 text-sm text-white shadow-lg">
        Open Modal
      </Link>
      {show &&<Modal />}
     </div>
    </>
  );
}

// async function getData() {
//   const res = await fetch('https://api.example.com/...')
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
//   return res.json()
// }