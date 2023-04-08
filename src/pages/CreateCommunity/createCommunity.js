import React, { useState } from 'react';
import { db } from '../../services/firebase';
import { doc, setDoc } from 'firebase/firestore';


function CreateCommunity() {

  const [ideologias, setIdeologias] = useState('');
  const [experiencias, setExperiencias] = useState('');
  const [social, setSocial] = useState('');
  const [afinidades, setAfinidades] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const communityRef = doc(db, "community", "aaWUpkKwir11T06fAQUi");
    setDoc(communityRef, {
                    social: social,
                })   
    .then(() => {
      alert('Interesses adicionados')
      
    })
    .catch((error) => {
      alert(error.message)
    })
    

  };

  return (
    <section><h1>Selecione seus interesses de acordo com o tema</h1>

        <form onSubmit={handleSubmit}>
      <label>
        Ideologias:
        <input 
          
          value={ideologias}
          onChange={(e) => setIdeologias(e.target.value)} />
      </label>
      <br></br>
      <label>
        Experiencias:
        <input 
         value={experiencias} onChange={(e) => setExperiencias(e.target.value)} />
      </label>
      <br></br>
      <label>
        Social:
        <input value={social} onChange={(e) => setSocial(e.target.value)} />
      </label>
      <br></br>
      <label>
        Afinidades:
        <input value={afinidades} onChange={(e) => setAfinidades(e.target.value)} />
      </label>
      <br></br>
      <button type="submit">Enviar</button>
    </form>
    
    </section>
  );
}

export default CreateCommunity;