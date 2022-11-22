import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { UserList } from './'

export default {
  component: UserList
} as ComponentMeta<typeof UserList>

export const Index: ComponentStoryObj<typeof UserList> = {
  args: {
    user: [
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
      }
    ]
  }
}
