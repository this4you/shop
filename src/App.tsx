import './App.css';
import { Header } from 'components';
import { Routes, Route } from 'react-router-dom';
import { CataloguePage, ProductPage } from 'pages';

function App() {
    return (
        <div className="App">
            <div className="wrapp">
                <Header></Header>
                <Routes>
                    <Route path="/product">
                        <Route path=":productId" element={<ProductPage/>} />
                    </Route>
                    <Route path="/">
                        <Route path=":categoryId" element={<CataloguePage/>} />
                        <Route index element={<CataloguePage/>} />
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
