import { FormEvent, useState} from 'react';


import { auth } from '../Services/firebase';


export function Login() {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('');

    function handleLogin(e:FormEvent){
      e.preventDefault();
      signInWithEmailAndPassword(auth, usuario, senha)
    }
  
  return (
    <>
    <form>
      <div>
      <label> Usuário: </label>
      <input onChange={(e) => setUsuario(e.target.value)} value={usuario}/>
      </div>
  
      <div>
        <label>Senha: </label>
        <input onChange={(e) => setSenha(e.target.value)} value={senha} type="password"/>
        </div>

        <div>
          <button type='submit'>Acessar</button>
          </div>
          <div>Ainda não tem conta?
          <button>Que tal criar uma!</button>
          </div>
    </form>
    </>
  )
}