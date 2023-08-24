import './App.css';
import Nav from './components/Nav';
import Note from './components/Note';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <h1>Notes.app</h1>
        <Note />
      </header>
    </div>
  );
}

export default App;
