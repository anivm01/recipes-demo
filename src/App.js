import './App.scss';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import RecipesPage from './pages/RecipesPage/RecipesPage';

function App() {
  return (
      <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<RecipesPage />}/>
        <Route path="/recipes/:recipeId" element={<RecipesPage />}/>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
