import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={ handleSubmit(data => saveData(data))}>
      <h1>4.community</h1>
      <label>E-mail:</label>
      <input name="email" placeholder="ex: voce@email.com" ref={register} />
      <label>Primeiro nome:</label>
      <input name="firstName" placeholder="ex: João" ref={register} />
      <label>Sobrenome:</label>
      <input name="lastName" placeholder="ex: Santana" ref={register} />
      <label>Data de Nascimento:</label>
      <input name="date" type="date" ref={register} />
      <label>Senha:</label>
      <input name="password" ref={register} />
      <input type="submit" />
    </form>
  )
}