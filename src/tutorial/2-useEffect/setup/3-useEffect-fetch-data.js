import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const renderedUsers = users.map((user) => {
    return (
      <li style={{ listStyle: 'none' }} key={user.id}>
        {' '}
        <img style={{ width: '200px' }} src={user.avatar_url} alt='user' />
        <h2 style={{ fontSize: '20px' }}>Login: {user.login}</h2>{' '}
      </li>
    );
  });

  console.log(users);

  return (
    <React.Fragment>
      <h2>Github Users</h2>
      {renderedUsers}
    </React.Fragment>
  );
};

export default UseEffectFetchData;
