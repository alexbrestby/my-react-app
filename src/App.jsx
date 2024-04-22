import { useState } from 'react';
import './App.sass'
import Button from './components/Button/Button'
import Header from './components/Header/Header';
import UserForm from './components/UserForm/UserForm';

const App = () => {
  const [content, changeContent] = useState('Нажми на кнопку');
  function handleClick(type) {
    type ? changeContent(type) : changeContent('кнопка не определена');
  }

  return (
    <div className='wrapper'>
      <Header />
      <h1>hello</h1>
      <Button isActive={content == 'button-1'} onClick={() => handleClick('button-1')}>button-1</Button>
      <Button isActive={content == 'button-2'} onClick={() => handleClick('button-2')}>button-2</Button>
      <Button isActive={content == 'button-3'} onClick={() => handleClick()}>button-3</Button>
      <p>{content}</p>
      <UserForm />
    </div >
  )
}

export default App