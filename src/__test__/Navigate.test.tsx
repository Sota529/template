import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event' // ユーザーにクリックさせるため必要
import { getPage, initTestHelpers } from 'next-page-tester'
import { server } from 'src/mocks/server'

initTestHelpers()
beforeAll(() => {
  server.listen()
})
afterAll(() => server.close())
afterAll(() => server.resetHandlers())

describe('遷移テスト', () => {
  it('初期ページから/nextへのテスト', async () => {
    const { page } = await getPage({
      route: '/index'
    })
    render(page)
    userEvent.click(screen.getByText('Next'))
    expect(await screen.findByText('back')).toBeInTheDocument()
  })
})
