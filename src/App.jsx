import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onsubmit = (data) => {
   alert("Registered Successfully!")
  }

  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className='contain'>
          <div><input type="text" placeholder='First name' {...register('firstName', { required: "Enter a first name" })} />
            <p>{errors?.firstName?.message}</p>
          </div>
          <div><input type="text" placeholder='Last name' {...register('lastName', { required: "Enter a last name" })} />
            <p>{errors?.lastName?.message}</p>
          </div>
          <div><input type="email" placeholder='Email'  {...register('email',  {required: "Enter a valid email" },{pattern : {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}, message: "Enter a valid email"})} />
            <p>{errors?.email?.message}</p>
          </div>
          <div><input type="password" placeholder='Password' {...register('password', {required: "Enter a password" ,  minLength:{value: 5, message: "Password must be at least 5 characters"}
           ,maxLength : {value: 20, message: "Password must be at most 20 characters" }})} />
            <p>{errors?.password?.message}</p>
          </div>
          <button type='submit'>Submit</button>
        </div>
        
      </form>
    </>
  )
}

export default App