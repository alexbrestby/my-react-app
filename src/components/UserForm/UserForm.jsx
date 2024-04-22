import { useState } from 'react';
import './UserForm.sass';

const UserForm = () => {
  const [name, setName] = useState('')

  return (
    <>
      <form >
        <label htmlFor="name">Your name: </label>
        <input
          type='text'
          id='name'
          className='control'
          value={name}
          onChange={(e) => setName(e.target.value)} />
      </form>
      <pre>
        Name: {name}
      </pre>
    </>

  )
}

export default UserForm;