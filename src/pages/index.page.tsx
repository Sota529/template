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
  const { data: user, error } = useSWR<Respnse>(
    'api/user',
    async () =>
      await fetch('https:myapi/user').then(async (res) => await res.json())
  )
  if (error instanceof Error) return <p>error</p>
  if (user === undefined) return <p>loading</p>
  return (
    <div>
      <Link href="/next">
        <a>Next</a>
      </Link>
    </div>
  )
}

export default Home
