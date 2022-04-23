import { NextPage } from 'next'
import React from 'react'
import { Button } from 'src/components/Button'

const next: NextPage = () => {
  return (
    <div>
      <Button link={{ href: '/next', value: 'back' }} />
    </div>
  )
}

export default next
