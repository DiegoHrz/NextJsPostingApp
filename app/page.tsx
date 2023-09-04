import Link from "next/link"

export default function Home() {
  return (
    <main className="py-8 px-40">
      <Link className='bg-red-700 font-medium text-black py-2 px-4 rounded-md' href={'/dashboard'}>Go to the dashboard</Link>
    </main>
  )
}
