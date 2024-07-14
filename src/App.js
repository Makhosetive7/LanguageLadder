import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Screens/HomePage';
import Flashcards from './Screens/FlashCards';
import Vocabulary from './Screens/Vocabulary';
import Grammar from './Screens/Grammar';
import Expressions from './Screens/Expressions';
import Reading from './Screens/Reading';
import FlashCardLevel1 from './SubScreens/FlashCards/FlashCardLevel1';
import GreetingAndPoliteness from './SubScreens/Expressions/GreetingAndPotliteness';
import BasicDescription from './SubScreens/Expressions/BasicDescription';
import AskForHelp from './SubScreens/Expressions/AskForHelp';
import DailyRoutine from './SubScreens/Expressions/DailyRoutine';
import JuniorReading from './SubScreens/Reading/JuniorReading';
import MidReading from './SubScreens/Reading/MidReading';
import ExpectReading from './SubScreens/Reading/ExpectReading';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/flashCards' element={<Flashcards />} />
        <Route exact path='/vocabulary' element={<Vocabulary />} />
        <Route exact path='/grammar' element={<Grammar />} />
        <Route exact path='/expressions' element={<Expressions />} />
        <Route exact path='/reading' element={<Reading />} />

        {/*EXPRESSIONS */}
        <Route exact path='/socialInteraction' element={<GreetingAndPoliteness/>} />
        <Route exact path='//basicDescription' element={<BasicDescription/>} />
        <Route exact path='/askingHelp' element={<AskForHelp/>} />
        <Route exact path='/dailyRoutine' element={<DailyRoutine/>} />

        {/*FLASHCARDS */}
        <Route exact path='/flashCardLevel1' element={<FlashCardLevel1 />} />

        {/*READING */}
        <Route exact path='/juniorReading' element={<JuniorReading/>} />
        <Route exact path='/midReading' element={<MidReading/>} />
        <Route exact path='/expectReading' element={<ExpectReading/>} />

      </Routes>
    </div>
  );
}

export default App;
