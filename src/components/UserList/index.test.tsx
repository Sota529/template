import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'

import { UserList } from '.'

export interface Respnse {
  user: Array<{
    userId: string
    id: string
    title: string
    body: string
  }>
}

describe('UserList', () => {
  it('propsから渡されたものが表示されているか', async () => {
    const props = {
      user: [
        {
          userId: 'uuid-1',
          id: 'Red',
          title: 'title',
          body: 'body'
        }
      ]
    }
    await render(<UserList {...props} />)
    expect(await screen.findByText(props.user[0].userId)).toBeInTheDocument()
  })
})
