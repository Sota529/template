import { rest } from 'msw'

export const handlers = [
  rest.get('api/user', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          userId: 'uuid-1',
          id: 'Red',
          title: 'title',
          body: 'body'
        },
        {
          userId: 'uuid-2',
          id: 'Orange',
          title: 'title',
          body: 'body'
        },
        {
          userId: 'uuid-3',
          id: 'Yellow',
          title: 'title',
          body: 'body'
        },
        {
          userId: 'uuid-4',
          id: 'Green',
          title: 'title',
          body: 'body'
        }
      ])
    )
  })
]
