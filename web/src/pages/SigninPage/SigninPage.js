// src/pages/SigninPage/SigninPage.js
import { Form, TextField, PasswordField, Submit } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

const SigninPage = () => {
  const { logIn } = useAuth()
  const [error, setError] = React.useState(null)

  const onSubmit = (data) => {
    setError(null)
    logIn({ email: data.email, password: data.password, remember: true })
      .then(() => navigate(routes.home()))
      .catch((error) => setError(error.message))
  }

  return (
    <Form onSubmit={onSubmit}>
      {error && <p>{error}</p>}
      <TextField name="email" placeholder="email" />
      <PasswordField name="password" placeholder="password" />
      <Submit>Sign In</Submit>
    </Form>
  )
}

export default SigninPage
