import { useState } from 'react';
import './UserForm.sass';
import Button from '../Button/Button';

const UserForm = () => {
  const [name, setName] = useState('')
  const [hasError, setHasError] = useState(false)
  const handleChangeName = (event) => {
    setName(event.target.value);
    setHasError(event.target.value.trim().length === 0)
  }

  return (
    <>
      <form >
        <label htmlFor="name">Your name: </label>
        <input
          type='text'
          id='name'
          className='control'
          value={name}
          onChange={handleChangeName}
          style={{ border: hasError ? '2px solid red' : null }}
        />
      </form>
      <Button disabled={hasError}>Send</Button >
      <pre>
        Name: {name}
      </pre>
    </>

  )
}

export default UserForm;