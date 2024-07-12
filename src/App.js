import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Screens/HomePage';
import Flashcards from './Screens/FlashCards';
import Vocabulary from './Screens/Vocabulary';
import Grammar from './Screens/Grammar';
import Pronunciation from './Screens/Pronounciation';
import Reading from './Screens/Reading';
import FlashCardLevel1 from './SubScreens/FlashCards/FlashCardLevel1';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/flashCards' element={<Flashcards />} />
        <Route exact path='/vocabulary' element={<Vocabulary />} />
        <Route exact path='/grammar' element={<Grammar />} />
        <Route exact path='/pronunciation' element={<Pronunciation />} />
        <Route exact path='/reading' element={<Reading />} />

        {/*flashcard levels*/}
        <Route exact path='/flashCardLevel1' element={<FlashCardLevel1 />} />

      </Routes>
    </div>
  );
}

export default App;
