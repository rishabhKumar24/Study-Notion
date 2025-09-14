import login from "../assets/login.png"
import Template from "../components/Template"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back!"
      desc1="Build Skills for Today, Tomorrow and Beyond"
      desc2="Education is the key to unlocking the world, a passport to freedom."
      image={login}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
