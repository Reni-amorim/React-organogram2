import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario/Formulario';


function App() {

  const [colabs, setColabs] = useState([])

  const newColabAdd = (colab) => {
    console.log(colab)
    setColabs([...colabs, colab])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario colabCadastrado={colab => newColabAdd(colab)}/>
    </div>
  );
}

export default App;
