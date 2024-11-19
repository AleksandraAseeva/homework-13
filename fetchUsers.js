const url = 'https://jsonplaceholder.typicode.com/users';

export async function fetchUsers() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw response.error
    }
    const users = await response.json();
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    return undefined;
  }
}

export async function printUsers() {
  const users = await fetchUsers();
  users.forEach(user => {
    console.log(user.name)
  });
}
