export const handleClick = (): void => {
  // eslint-disable-next-line no-console
  console.log('hoge')
}

export const fetcher = async (): Promise<any> => {
  await fetch('https:myapi/user').then(async (res) => await res.json())
}
