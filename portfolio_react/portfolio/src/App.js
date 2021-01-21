import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Taskboard from './Components/Taskboard';

function App() {
  return (
    <div className="App">
      <Header branding = 'CTech' /> 
   
    <main>
  <section className='container' style={{backgroundColor:"greenyellow"}}>
    <h3>Sorted names</h3>
    <Taskboard />
   </section>
    </main>
    </div>
  );
}

export default App;
