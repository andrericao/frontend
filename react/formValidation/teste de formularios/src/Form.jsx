import {useForm} from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import './App.css'

const schema = Yup.object().shape({

  password: Yup.string().min(6).required('Campo Obrigatório'),

  confirmPassword: Yup.string()
  .oneOf([Yup.ref('password'), null], 'Senhas devem ser idênticas!')
  .required('Campo Obrigatório')

})

const Form = () => {

  const { register, handleSubmit, formState, reset } = useForm({
    mode: "all",
    resolver: yupResolver(schema), // usa o schema -> linha 6
    defaultValues: {
      password: '',
      confirmPassword: ''
    }
  });

  const { errors, isDirty, isValid } = formState;

  console.log("errors", errors)

  const handleSubmitData = (data) => {
    console.log('submit', data)

    reset(); // volta pro defaultvalues -> linha 18
  }

  return (
    <>

    <form onSubmit={handleSubmit(handleSubmitData)}>
      <h2>Formulários</h2>

      <input {...register('password')}
      type="password" 
      placeholder='Digite sua senha'/>
      {errors.password && <small>{errors.password.message}</small>}

      <input {...register('confirmPassword')}
      type="password" 
      placeholder='Confirme a senha'/>
      {errors.confirmPassword && <small>{errors.confirmPassword.message}</small>}

      <button type="submit" disabled={!isDirty || !isValid}>Enviar</button>
    </form>

    </>
  )
}

export default Form
