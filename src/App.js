import React from 'react'
import Select1 from './FormComponents/Select1'
import Input1 from './FormComponents/Input1'
import Radio1 from './FormComponents/Radio1';
import Checkbox1 from './FormComponents/Checkbox1';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [fruta, setFruta] = React.useState('');
  const [linguagens, setLinguagens] = React.useState([]);
  const [termo, setTermo] = React.useState([]);
  return (
    <>
      <h2>Checkbox</h2>
      <Checkbox1 options={["Li e aceito os termos"]} value={termo} setValue={setTermo} />
      <br />
      <Checkbox1 options={["Javascript", "PHP", "Ruby", "Python", "C#"]} value={linguagens} setValue={setLinguagens} />
      <h2>Radio</h2>
      <Radio1 options={["azul", "vermelho", "verde", "amarelo", "cinza", "preto", "branco"]} name="name" value={cor} setValue={setCor} />
      <Radio1 options={["limão", "laranja", "uva"]} name="fruta" value={fruta} setValue={setFruta} />
      <h2>Select</h2>
      <Select1 options={['smartphone', 'tablet']} value={produto} setValue={setProduto} />
      <h2>Tipo Texo</h2>
      <Input1 id="nome" label="Nome" type="text" value={nome} setValue={setNome} required />
      <Input1 id="email" label="Email" type="email" value={email} setValue={setEmail} />
    </>
  )
}

export default App