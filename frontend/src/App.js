import './App.css';
import { useRef } from 'react';
import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import * as Yup from 'yup';

import Input from './components/Form/Input';

const initialData = {
  email: 'andre@possas.com',
  address: {
    city: 'Belo Horizonte',
  },
};

function App() {
  const formRef = useRef(null);

  const handleSubmit = async (data, { reset }) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
        address: Yup.object().shape({
          city: Yup.string().min(3, 'No mínimo 3 caracteres').required('A cidade é obrigatória'),
        }),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);

      formRef.current.setErrors({});

      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  };

  return (
    <div className="App">
      <h1>hellow world</h1>

      <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
        <Input name="name" placeholder="nome" />
        <Input name="email" placeholder="email" />
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
