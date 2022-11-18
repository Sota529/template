import '@testing-library/jest-dom/extend-expect'

import {
  render,
  screen,
  waitForElementToBeRemoved
} from '@testing-library/react'
import { server } from 'src/mocks/server'

import Home from '.'

beforeAll(() => {
  server.listen()
})
afterAll(() => server.close())
afterAll(() => server.resetHandlers())

describe('<pages/index.tsx>', () => {
  it('loading', async () => {
    render(<Home />)
    expect(await screen.findByText('loading')).toBeInTheDocument()
  })

  it('loading後にNextが表示される', async () => {
    render(<Home />)
    await waitForElementToBeRemoved(() => screen.getByText('loading'))
    expect(await screen.findByText('Next')).toBeInTheDocument()
  })
})
