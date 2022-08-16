import './App.css';
import { Form } from '@unform/web';
import Input from './components/Form/Input';

function App() {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <h1>hellow world</h1>

      <Form onSubmit={handleSubmit}>
          <Input name="name" />
          <Input name="email" />
          <Input name="passaword" />

        <button type="submit">Enviar</button>
      </Form>
    </div>
  );
}

export default App;
