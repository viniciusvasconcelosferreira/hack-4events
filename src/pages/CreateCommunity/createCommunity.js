import React, { useState } from 'react';

function CreateCommunity() {

  const [ideologias, setIdeologias] = useState('');
  const [experiencias, setExperiencias] = useState('');
  const [social, setSocial] = useState('');
  const [afinidades, setAfinidades] = useState('');
  const [geografico, setGeograficos] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // insira o código de inserção de dados aqui
  };

  return (
    <section><h1>Selecione seus interesses de acordo com o tema</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Ideologias:
        <input type="text" value={ideologias} onChange={(event) => setIdeologias(event.target.value)} />
      </label>
      <label>
        Experiencias:
        <input type="text" value={experiencias} onChange={(event) => setExperiencias(event.target.value)} />
      </label>
      <label>
        Social:
        <input type="select" value={social} onChange={(event) => setSocial(event.target.value)} />
      </label>
      <label>
        Afinidades:
        <input type="select" value={afinidades} onChange={(event) => setAfinidades(event.target.value)} />
      </label>
      <button type="submit">Enviar</button>
    </form>
    </section>
  );
}

export default CreateCommunity;