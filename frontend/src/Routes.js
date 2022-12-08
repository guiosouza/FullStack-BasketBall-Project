import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Equipe from './pages/equipe';

const Routes = () => {
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path="/equipes" exact>
                <Equipe/>
            </Route>
        </Switch>
    </BrowserRouter>
}

export default Routes;