import LoginForm from '@form/LoginForm'
import Layout from '@organism/Layout'

const Login = () => (
  <div className="container max-w-lg lg:my-16">
    <LoginForm />
  </div>
)

Login.getLayout = Layout

export default Login
