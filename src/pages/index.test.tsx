import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'
import { server } from 'src/mocks/server'

import Home from './index.page'

beforeAll(() => {
  server.listen()
})
afterAll(() => server.close())
afterAll(() => server.resetHandlers())

describe('<pages/index.tsx>', () => {
  it('loading', async () => {
    render(<Home />)
    expect(await screen.findByText('Next')).toBeInTheDocument()
  })

  it('loading後にNextが表示される', async () => {
    render(<Home />)
    expect(await screen.findByText('Next')).toBeInTheDocument()
  })
})
