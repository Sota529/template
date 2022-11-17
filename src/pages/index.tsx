import type { NextPage } from 'next'
import Link from 'next/link'
import useSWR from 'swr'

type Respnse = Array<{
  userId: string
  id: string
  title: string
  body: string
}>

const Home: NextPage = () => {
  const { data: user } = useSWR<Respnse>(
    'api/user',
    async () => await fetch('api/user').then(async (res) => await res.json())
  )
  if (user === undefined) return <>loading</>
  return (
    <div>
      <Link href="/next">
        <a>Next</a>
      </Link>
    </div>
  )
}

export default Home
