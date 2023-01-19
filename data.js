// Sample data (not used)

// Recipes
const recipes = [
    {
        id: '1',
        name: 'spaghetti',
        description: 'Noodles and tomatoe sauce.',
        meal: 'dinner',
    },
    {
        id: '2',
        name: 'cereal',
        description: 'Cereal and milk.',
        meal: 'breakfast'
    }
] 

// Ingredients
const ingredients = [
    {
        id: '1',
        name: 'milk',
        refrigerated: true
    },
    {
        id: '2',
        name: 'cereal',
        refrigerated: false
    },
    {
        id: '3',
        name: 'noodles',
        refrigerated: false
    },
    {
        id: '4',
        name: 'tomatoe sauce',
        refrigerated: false
    }
]

module.exports = { recipes, ingredients };