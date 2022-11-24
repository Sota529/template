export interface Props {
  user: Array<{
    userId: string
    id: string
    title: string
    body: string
  }>
}

export const UserList: React.FC<Props> = ({ user }) => {
  return (
    <>
      {user?.map((u) => {
        return (
          <p key={u.id} data-test-id>
            {u.userId}
          </p>
        )
      })}
    </>
  )
}
