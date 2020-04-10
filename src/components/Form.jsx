import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const onSubmit = () => {
    console.log(name, email, msg);
    setName('');
    setEmail('');
    setMsg('');
  };

  return (
    <section>
      <form>
        <div className='fields'>
          <div className='field half'>
            <label htmlFor='name'>Nome</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              name='name'
              id='name'
            />
          </div>
          <div className='field half'>
            <label htmlFor='email'>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              name='email'
              id='email'
            />
          </div>
          <div className='field'>
            <label htmlFor='msg'>Mensagem</label>
            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              name='msg'
              id='msg'
              rows='5'
            />
          </div>
        </div>
        <ul className='actions'>
          <li>
            <button onClick={onSubmit} className='button submit'>
              Enviar Mensagem
            </button>
          </li>
        </ul>
      </form>
    </section>
  );
};

export default Form;
