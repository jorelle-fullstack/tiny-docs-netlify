import Link from 'next/link'
import "../services/firebase"
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  const authorized = false

  /*
  useEffect(() => {
    router.push('/login')
  }, [])
*/

  return (
    <div className='page-home'>
      <Link href='/login'> Login page</Link>
      <button onClick={e => router.push('/login')}>login</button>
    </div>
  )
}
