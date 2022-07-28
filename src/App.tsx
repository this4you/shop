import './App.css';
import { Header } from 'components';
import { Routes, Route } from 'react-router-dom';
import { CatalogPage } from 'pages';

function App() {
    return (
        <div className="App">
            <div className="wrapp">
                <Header></Header>
                <Routes>
                    <Route path="/">
                        <Route path=":categoryId" element={<CatalogPage/>} />
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
