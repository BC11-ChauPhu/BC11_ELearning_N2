import React, { useEffect, useState } from 'react'

const UserInfo = () => {
  const [user, setUser] = useState([])
  useEffect(() => {
    let getResult = localStorage.getItem('LoggedInUser')
    setUser(JSON.parse(getResult))
  }, [])
  console.log(user)
  return (
    <section id="userInfo">
      <div className="container">
        <h1>Your Profile</h1>
        <div className="userInfo-content">
          <div>
            <p>Name: {user.hoTen}</p>
          </div>
          <div>
            <p>Email: {user.email}</p>
          </div>
          <div>
            <p>Phone: {user.soDT}</p>
          </div>
          <div>
            <p>User Type: {user.maLoaiNguoiDung}</p>
          </div>
        </div>
        <button>Update Profile</button>

      </div>
    </section>
  )
}

export default UserInfo