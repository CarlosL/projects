import './App.css';
import Nav from './components/Nav';
import NotesForm from './components/NotesForm';

function App() {
  return (
    <div className="App">
      <Nav />
      <section className="App-header">
      <NotesForm />
      </section>
    </div>
  );
}

export default App;
