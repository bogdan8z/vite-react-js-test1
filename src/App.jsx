import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Counter from './Counter';
import Greetings from './Greetings';
import FruitList from './FruitList';
import TextInput from './TextInput';
import Timer from './Timer';
import Test from './Test';
import TaskApp from './Tasks/TaskApp';

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Counter />
      <Greetings name="Bogg" />
      <Greetings name="Gtuu" />
      <FruitList />
      <TextInput />
      <Timer />
      <Test />
      <TaskApp></TaskApp>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
