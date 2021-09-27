import { useState } from 'react';

const Recipes = () => {
    const crayRecipe = {
        candy: 3,
        vodka: 1,
        appleJuice: 2
    }
    
    const crayCrayRecipe = {
        ...crayRecipe,
        blood: 4,
        appleJuice: 3
    }

    const [recipe, setRecipe] = useState({});
    
    return (
        <>
            <h3>Test List</h3>
            <p className="lorem_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, assumenda! Eaque iusto esse nemo hic asperiores dolor explicabo amet tempora!</p>
            <button onClick={() => setRecipe(crayRecipe)}>
                Test1
            </button>
            <button onClick={() => setRecipe(crayCrayRecipe)}>
                Test2
            </button>

            <ul>
                {Object.keys(recipe).map((ingredient, index) => (
                    <li key={index}>
                        {ingredient}: {recipe[ingredient]}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Recipes;