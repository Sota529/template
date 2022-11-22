import type { NextPage } from 'next'
import Link from 'next/link'
import { UserList } from 'src/components/UserList'
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
    async () =>
      await fetch('https:myapi/user').then(async (res) => await res.json())
  )
  return (
    <div>
      <Link href="/next">
        <a>Next</a>
      </Link>
      <h2>CSR FETCH</h2>
      {user === undefined ? <div>loading</div> : <UserList user={user} />}
    </div>
  )
}

export default Home
