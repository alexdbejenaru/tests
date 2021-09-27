import "./styles/index.scss";
import Recipes from './components/Recipes';

const App = () => {
    return (
        <>
            <main>
                <section>
                    <h1 className="title">Title</h1>
                </section>
                <Recipes />
            </main>
        </>
    )
}

export default App;