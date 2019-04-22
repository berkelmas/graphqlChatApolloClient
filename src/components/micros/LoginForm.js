import React from 'react'

export const LoginForm = (props) => {
    return (
      <form class="user-form">
          <label>
              <input type="text" placeholder="username" />
          </label>
          <label>
              <input type="password" placeholder="password" />
          </label>
          <label>
              <button>Login</button>
          </label>
      </form>
    )
}
