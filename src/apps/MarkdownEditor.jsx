import React, { useState } from 'react';
import { Remarkable } from 'remarkable';

import DevWrapper from 'containers/DevWrapper';

const MarkdownEditor = () => {
  const md = new Remarkable({ breaks: true });
  const [text, setText] = useState(
    '### Eu renderizo um h3\n' +
      '*Eu renderizo um texto em tálico* e **eu renderizo um texto em bold!**\n' +
      '- Já nós\n' +
      '- somos\n' +
      '- uma lista não-ordenada\n' +
      '#### Edite o seu código aqui!'
  );

  return (
    <DevWrapper>
      <h1 className='major'>Editor Markdown</h1>
      <p>
        Frequentemente utilizado como tutorial de React, o Editor em Markdown aplica o
        conceito mais básico de React, que é o estado da aplicação.
      </p>
      <section>
        <div className='row'>
          <div className='col-6 col-12-medium'>
            <h3>Entrada</h3>
            <p>Escreva aqui em Markdown...</p>
            <textarea value={text} rows='10' onChange={(e) => setText(e.target.value)} />
          </div>
          <div className='col-6 col-12-medium'>
            <h4>Saída</h4>
            <p>...e veja o resultado em tempo real!</p>
            <hr />
            <p dangerouslySetInnerHTML={{ __html: md.render(text) }} />
          </div>
        </div>
      </section>
    </DevWrapper>
  );
};

export default MarkdownEditor;
