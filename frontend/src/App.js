import './App.css';
import { Form } from '@unform/web';
import Input from './components/Form/Input';

function App() {
  return (
    <div className="App">
      <h1>hellow world</h1>

      <Form>
        <Input name="email"></Input>
      </Form>
    </div>
  );
}

export default App;
