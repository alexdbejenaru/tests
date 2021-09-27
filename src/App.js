import "./styles/index.scss";
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <>
            <main className="App">
                <Navbar />
                <div className="content">
                <Home />
                </div>
            </main>
        </>
    )
}

export default App;