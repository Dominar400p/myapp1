import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import First from './components/First';
import Countevehand from './components/Countevehand';
import Message from './components/Message';
import Form1 from './components/Form1';
import Loginform from './components/Loginform';
import Contactapp from './components/Contactapp';
import Contactlist from './components/Contactlist';
import Contactcard from './components/Contactcard';

function App() {
  return (
    <>
    <div className="App">
      <Contactapp/>
      <Contactlist/>
      <Contactcard/>
      <Loginform/>
      <First/>
      <Countevehand/>
      <Message/>
      <Form1/>
      <button className='btn btn-success'>login</button>
    </div>
    </>
  );
}

export default App;
