//import logo from './logo.svg';
import './App.css';
import Header from "./components/Test";

function App() {
  const name = "facebook";
  return (
    <div className="App">
      <Header title={name} />
    </div>
  );
}

export default App;
