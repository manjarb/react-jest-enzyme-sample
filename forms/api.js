const urlForUser = id => `https://jsonplaceholder.typicode.com/users/${id}`

export const fetchUser = id => fetch(urlForUser(id)).then(data => data.json())

export const saveUser = (name, email, colour) => {
  // stand in function for what would be an
  // HTTP request in a real app
  return Promise.resolve({ status: 200, userId: 1 })
}
