import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [message, setMessage] = useState('')

  const findErrors = () => {
    const errors = []

    if (!email || !password || !passwordConfirm) {
      if ([... email].filter(i => i === '@').length !== 1) errors.push('Email must contain an @')
      if (password.length < 8) errors.push('Password must be at least 8 characters')
      if (password !== passwordConfirm) errors.push('Passwords do not match')
    }

    return errors
  }

  const handleSubit = e => {
    e.preventDefault() // prevent page refresh

    const errors = findErrors()
    setMessage(
      errors.length 
        ? errors.join(', ') // if errors, join them with commas
        : 'User created'
    )
  }

  return (
    <form onSubmit={handleSubit}>
      <h2>Sign Up!</h2>
      {message}
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        //required
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
        //required
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        //required
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      <input type='submit' value='Submit' />
    </form>
  )
}
