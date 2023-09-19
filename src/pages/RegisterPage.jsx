import { Helmet, HelmetProvider } from "react-helmet-async"
import RegisterForm from "../components/RegisterForm/RegisterForm"

export function RegisterPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterForm />
    </HelmetProvider>
  )
}
