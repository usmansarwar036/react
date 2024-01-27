import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  useEffect(() => {
   
  });
  const submit = ()=>{
    if(email !== '' && pass !==''){
      localStorage.setItem('email',email)
      localStorage.setItem('pass',pass)
      navigate("/home");
    }
  }
  return (
    <>
      <div className="w-100 flex justify-center align-center">
        <div className='p-5 bg-blue-200 rounded'>
          <h1 className='text-2xl'>Learning with Mubashir</h1>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='block w-100 p-2 my-2 rounded mx-auto' type="email" placeholder="Enter Email" />
          <input onChange={(e) => setPass(e.target.value)} value={pass} className='block w-100 p-2 my-2 rounded mx-auto' type="password" placeholder="Enter Password" />
          <button onClick={submit} type="button" className='mx-auto block px-2 rounded py-1 bg-blue-500 text-white font-bold'>Submit</button>
        </div>
      </div>
    </>
  )
}

export default Login
