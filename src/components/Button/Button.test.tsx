import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'

import { Button } from './Button'
import { handleClick } from 'src/utis'
jest.mock('src/utis', () => {
  return { ...jest.requireActual('./Button'), handleClick: jest.fn() }
})
const handleClickMock = handleClick as jest.MockedFunction<typeof handleClick>

describe('<Button>', () => {
  const props = {
    link: {
      href: './',
      value: 'back'
    }
  }
  it('should render correctly', () => {
    const { container } = render(<Button {...props} />)
    expect(container).toMatchSnapshot()
  })
  it('テキストが表示されているか', () => {
    const { getByTestId } = render(<Button {...props} />)
    expect(getByTestId('button-wrapper')).toHaveTextContent('back')
  })
  it('イベントハンドラが呼ばれるか', () => {
    const { getByTestId } = render(<Button {...props} />)

    fireEvent.click(getByTestId('button-wrapper'))

    expect(handleClickMock).toHaveBeenCalled()
  })
})
