import './App.css';
import { Form } from '@unform/web';
import Input from './components/Form/Input';

const initialData = {
  email: 'andre@possas.com',
}

function App() {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <h1>hellow world</h1>

      <Form initialData={initialData} onSubmit={handleSubmit}>
          <Input name="name" />
          <Input type="email" name="email" />
          <Input type="password" name="passaword" />

        <button type="submit">Enviar</button>
      </Form>
    </div>
  );
}

export default App;
