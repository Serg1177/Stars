
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routesConfig from '../../routes/routesConfig'
// import Header from '../../Header';
import Header from '../../components/Header/Header'
import HomePage from '../HomePage';
import PeoplePage from '../PeoplePage';
import NotFoundePage from '../NotFoundPage';
import PersonPage from '../PersonPage/PersonPage';
import FavoritesPage from '../../containers/FavoritesPage/FavoritesPage'
import SearchPage from '../SearchPage/SearchPage'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Vlasov from '../../components/Vlasov/Vlasov';
import s from './App.module.css';



const App = () => {

  return (
    
   <BrowserRouter>
<div className={s.wrapper}>
      <Header/>
      






      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/people"  element={<PeoplePage/>} />
        <Route path="/people/:id" element={<PersonPage/>} />  
        <Route path="/favorites" element={<FavoritesPage/>} />  
        <Route path="/search" element={<SearchPage/>} />  
        <Route path="/fail" element={<ErrorMessage/>} />  
        <Route path="/Vlasov" element={<Vlasov/>} />  

        <Route path="/people/:id" element={<PersonPage/>} />  
        <Route path="/*"  element={<NotFoundePage/>} />
      </Routes>
</div>

    </BrowserRouter>
    
  )
}

export default App;


