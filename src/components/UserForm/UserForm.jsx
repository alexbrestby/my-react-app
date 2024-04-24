import { useState } from 'react';
import './UserForm.sass';
import Button from '../Button/Button';

const UserForm = () => {

  const [form, setForm] = useState({
    name: '',
    hasError: false,
  })

  const handleChangeName = (event) => {
    setForm(prev => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }))
  }

  return (
    <>
      <form >
        <label htmlFor="name">Your name: </label>
        <input
          type='text'
          id='name'
          className='control'
          value={form.name}
          onChange={handleChangeName}
          style={{ border: form.hasError ? '2px solid red' : null }}
        />
      </form>
      <Button disabled={form.hasError}>Send</Button >
      <pre>
        Name: {form.name}
      </pre>
    </>

  )
}

export default UserForm;