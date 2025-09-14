import signup from '../assets/signup.png'
import Template from '../components/Template'

const SignUp = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build Skills for Today, Tomorrow and Beyond"
      desc2="Education is the key to unlocking the world, a passport to freedom."
      image={signup}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default SignUp
