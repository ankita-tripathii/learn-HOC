import './App.css';

import SquareComponent from './components/learning-1';
import ClickCount from './components/clickCount';

import ClickIncrease from './components/Clickincrease';
import HoverIncrease from './components/Hoverincrease';


function App() {
  return (
    <>
    <SquareComponent/>
    <ClickCount/>
    <ClickIncrease/>
    <HoverIncrease secretWord={"pineapple"}/>
    </>
  );
}

export default App;
