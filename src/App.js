import './App.css';
import { NavBar } from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
    let greeting = 'Bienvenidos!'
    return (
        <div className="App">
            <header className="App-header">
                <NavBar />
                <ItemListContainer greeting={greeting} />
            </header>
        </div>
    );
}

export default App;
