import { Helmet, HelmetProvider } from "react-helmet-async"
import LoginForm from "../components/LoginForm/LoginForm"


export function LoginPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </HelmetProvider>
  )
}
