import React, {useEffect, useState} from 'react'

const User = () => {

    const [users, setUsers]= useState([]);
    const [idValue, setIdValue] = useState(1);

    const fetchUserData =()=>{
        fetch(`https://jsonplaceholder.typicode.com/users?id=${idValue}`)
        .then(response=>{
            return response.json()
        })
        .then(data => {
            setUsers(data)
        })

    }

    useEffect(()=>{
        fetchUserData()
    },[idValue])

    const searchById = event => {

        const newValue = event.target.value;
        setIdValue(newValue)
    };


  return (
    <><div>
        <div>
            <h1>Users</h1>          
        </div>
            <div>
                <label for="id">Search User By Id:</label>
                &nbsp; &nbsp;
                <input type="search" id="search" name="id" onChange={searchById}/>
            </div>
        <div className="container">
        <div >
          {users.length > 0 ? (
            <div className="vertical-table">
              {users.map(user => (
                <div className="vertical-table-row" key={user.id}>
                  <div className="vertical-table-cell">
                    <strong>ID:</strong>
                  </div>
                  <div className="vertical-table-cell">{user.id}</div>
                  <div className="vertical-table-cell">
                    <strong>Name:</strong>
                  </div>
                  <div className="vertical-table-cell">{user.name}</div>
                  <div className="vertical-table-cell">
                    <strong>Username:</strong>
                  </div>
                  <div className="vertical-table-cell">{user.username}</div>
                  <div className="vertical-table-cell">
                    <strong>Email:</strong>
                  </div>
                  <div className="vertical-table-cell">{user.email}</div>
                  <div className="vertical-table-cell">
                    <strong>Address:</strong>
                  </div>
                  <div className="vertical-table-cell">
                    {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                  </div>
                  <div className="vertical-table-cell">
                    <strong>Phone:</strong>
                  </div>
                  <div className="vertical-table-cell">{user.phone}</div>
                  <div className="vertical-table-cell">
                    <strong>Website:</strong>
                  </div>
                  <div className="vertical-table-cell">{user.website}</div>
                  <div className="vertical-table-cell">
                    <strong>Company:</strong>
                  </div>
                  <div className="vertical-table-cell">{user.company.name}</div>
                </div>
              ))}
            </div>
          ) : (
            <p>No User Found for the provided ID</p>
          )}
        </div>
        </div>
        </div>
    </>
  )
}

export default User