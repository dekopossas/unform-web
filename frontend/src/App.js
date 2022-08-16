import './App.css';
import { useRef } from 'react';
import { Form } from '@unform/web';
import { Scope } from '@unform/core';

import Input from './components/Form/Input';

const initialData = {
  email: 'andre@possas.com',
  address: {
    city: 'Belo Horizonte',
  },
};

function App() {
  const formRef = useRef(null);

  const handleSubmit = (data, { reset }) => {
    if (data.name === '') {
      formRef.current.setErrors({
        name: 'O nome é Obrigatório',
        address: {
          city: 'A Cidade é obrigatória',
        },
      });
    }
    console.log(data);

    reset();
  };

  return (
    <div className="App">
      <h1>hellow world</h1>

      <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
        <Input name="name" placeholder="nome" />
        <Input type="email" name="email" placeholder="email" />
        <Input type="password" name="passaword" placeholder="senha" />

        <Scope path="address">
          <Input name="street" placeholder="rua" />
          <Input name="neighborhood" placeholder="bairro" />
          <Input name="city" placeholder="cidade" />
          <Input name="state" placeholder="estado" />
          <Input name="number" placeholder="numero" />
        </Scope>

        <button type="submit">Enviar</button>
      </Form>
    </div>
  );
}

export default App;
