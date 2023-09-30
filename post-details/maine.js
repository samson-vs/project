const userId = new URL(location.href).searchParams.get('userId')
const foo = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    const users = await res.json();
    console.log(users);
    // const id = `${userId}`
    console.log(users.find(user => user.id ));

}

void foo()