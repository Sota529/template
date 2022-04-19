import Link from 'next/link'
import React from 'react'

interface Props {
  value: string
}

export const Button: React.FC<Props> = (value) => {
  return (
    <Link href="/">
      <a>back</a>
    </Link>
  )
}
