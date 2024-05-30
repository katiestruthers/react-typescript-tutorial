import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Status } from './components/Status';

function App() {
  return (
    <div className="App">
      <Status status='loading' />
      <Heading>This is a heading</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo!</Heading>
      </Oscar>
      <Greet name='Katie' isLoggedIn={true} />
    </div>
  );
}

export default App;
