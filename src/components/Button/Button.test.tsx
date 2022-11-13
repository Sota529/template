// eslint-disable-next-line simple-import-sort/imports
import '@testing-library/jest-dom/extend-expect'

import { fireEvent, render } from '@testing-library/react'

import { Button } from './Button'
import { handleClick } from 'src/utis'

jest.mock('src/utis', () => {
  return { ...jest.requireActual('./Button'), handleClick: jest.fn() }
})
const handleClickMock = handleClick as jest.MockedFunction<typeof handleClick>

describe('<Button>', () => {
  it('テキストが表示されているか', () => {
    const props = {
      link: {
        href: './',
        value: 'back'
      }
    }
    const { getByTestId } = render(<Button {...props} />)
    expect(getByTestId('button-wrapper')).toHaveTextContent('back')
  })
  it('イベントハンドラが呼ばれるか', () => {
    const props = {
      link: {
        href: './',
        value: 'back'
      }
    }
    const { getByTestId } = render(<Button {...props} />)

    fireEvent.click(getByTestId('button-wrapper'))

    expect(handleClickMock).toHaveBeenCalled()
  })
})
