import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/next">
        <a>Next</a>
      </Link>
    </div>
  )
}

export default Home
