import { fetchUser } from './api'
import fetchMock from 'fetch-mock'

const dummyUser = {
  id: 1,
  name: 'Jack Franklin',
  website: 'https://javascriptplayground.com',
}

describe('fetchUser', () => {
  it('fetches the user', async () => {
    const url = 'https://jsonplaceholder.typicode.com/users/1'

    fetchMock.get(url, {
      status: 200,
      body: dummyUser,
    })
    const user = await fetchUser(1)
    expect(user).toEqual(dummyUser)
  })
})
