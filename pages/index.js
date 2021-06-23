import Link from 'next/link'

export default function Home() {
  return (
    <div className='page-home'>
     <Link href='other-page'> link to other page</Link>
    </div>
  )
}
