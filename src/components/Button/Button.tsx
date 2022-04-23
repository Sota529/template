import Link from 'next/link'
import { handleClick } from 'src/utis'

interface Props {
  link: {
    href: string
    value: string
  }
}

export const Button: React.FC<Props> = ({ link }) => {
  return (
    <div data-testid="button-wrapper" onClick={handleClick}>
      <Link href={link.href}>
        <a>{link.value}</a>
      </Link>
    </div>
  )
}
