import './App.css';
import Block from './components/Blocks';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
    <Header/>

  <div class="block">
    <Block/>
    <Block/>
    <Block/>
    <Block/>
    <Block/>
  </div>
  </div>
  );
}
export default App;