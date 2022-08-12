import React from 'react';

const List = ({users,removeUser,selectUser}) => {
    return (
        <div>
        <div className='users'>
            {
                users.map(user=>(
                    <div className='user-card' key={user.id}>
                        <ul>
                            <li>
                                <p><b>E-mail: </b>{user.email}</p>
                            </li>
                            <li>
                                <p><b>Password: </b>{user.password}</p>
                            </li>
                            <li>
                                <p><b>First Name: </b>{user.first_name}</p>
                            </li>
                            <li>
                                <p><b>Last Name: </b>{user.last_name}</p>
                            </li>
                            <li>
                                <p><b>Birthaday: </b>{user.birthday}</p>
                            </li>
                        </ul>
                        <button onClick={()=>removeUser(user.id)}>remover</button>
                        <button onClick={()=>selectUser(user)}>selecionar</button>
                    </div>
                ))
            }
        </div>
        </div>
    );
};

export default List;