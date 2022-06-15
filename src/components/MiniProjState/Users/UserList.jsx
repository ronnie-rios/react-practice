import React from 'react'

export default function UserList(props) {
  return (
    <div>
        {props.users.map((user) => (
            <div>
                <h3>{user.username}'s</h3>
                <h4>favorite animal is {user.animal}</h4>
            </div>
        ))}
    </div>
  )
}
