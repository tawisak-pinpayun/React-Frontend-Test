
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
const schema = yup
  .object({
  firstName: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().required(),
  react: yup.string(),
  next: yup.string(),
  laravel: yup.string(),
  graphQL: yup.string(),
  nest: yup.string(),
  })
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: any) => alert(JSON.stringify(data));
  return (
    <div>
      <div className="topnav">
        <a className="active" href="/register">Register</a>
        <a href="/countries">GraphQL Countries</a>
      </div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} type="text" placeholder="firstName"/>
      <p className="text-red">{errors.firstName?.message}</p>
      
      <input {...register("lastname")} type="text" placeholder="lastname"/>
      <p className="text-red">{errors.lastname?.message}</p>

      <input {...register("email")}  type="email" placeholder="email"/>
      <p className="text-red">{errors.email?.message}</p>

      <input {...register("username")}  type="text" placeholder="username"/>
      <p className="text-red">{errors.username?.message}</p>

      <input {...register("password")} type="password" placeholder="password"/>
      <p className="text-red">{errors.password?.message}</p>

      <div>
      <label className="container">
        <input
          type="checkbox"
          {...register("react")}
        />
         <span className="checkmark"></span>
        React
      </label>
      <label className="container">
        <input type="checkbox"{...register("next")}/>
        Next.js
        <span className="checkmark"></span>
      </label>
      <label className="container">
        <input
          type="checkbox"
          {...register("laravel")}
        />
         <span className="checkmark"></span>
        Laravel
      </label>
      <label className="container">
        <input
          type="checkbox"
          {...register("graphQL")}
        />
         <span className="checkmark"></span>
        GraphQL
      </label>
      <label className="container">
        <input
          type="checkbox"
          {...register("nest")}
        />
         <span className="checkmark"></span>
        Nest.js
      </label>
    </div>
    <button className="button center" type='submit'>Submit</button>
    </form>
    </div>
  )
}
