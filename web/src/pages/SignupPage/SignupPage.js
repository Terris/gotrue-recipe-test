// src/pages/SignupPage/SignupPage.js
import { Form, TextField, PasswordField, Submit } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { routes, navigate } from '@redwoodjs/router'

const SignupPage = () => {
  const { client } = useAuth()
  const [error, setError] = React.useState(null)

  const onSubmit = (data) => {
    setError(null)
    client
      .signup(data.email, data.password)
      .then(() => navigate(routes.signin()))
      .catch((error) => setError(error.message))
  }

  return (
    <Form onSubmit={onSubmit}>
      {error && <p>{error}</p>}
      <TextField name="email" placeholder="email" />
      <PasswordField name="password" placeholder="password" />
      <Submit>Sign Up</Submit>
    </Form>
  )
}

export default SignupPage
