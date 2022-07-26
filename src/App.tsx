import './App.css';
import { Header } from 'components';
import { Routes, Route, useParams } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <div className="wrapp">
                <Header></Header>
                <Routes>
                    <Route path="/">
                        <Route path=":categoryId" element={<Test/>} />
                    </Route>
                </Routes>
            </div>
        </div>
    );
}


const Test = () => {
    let { categoryId } = useParams();
    return <h1>{categoryId}</h1>
}
export default App;
