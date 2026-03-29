import RecipesComponent from "../components/RecipesComponent"
import SearchForm from "../components/SearchForm"

function Recipes() {

  return (
    <aside className="flex items-center flex-col gap-10 justify-center bg-gray-100 p-6">
      <h1 className="text-4xl mt-10">Recipes</h1>

      <SearchForm />
      <div className="grid grid-cols-2 gap-6">
        <RecipesComponent path="/HomeFoodImagejpg.jpg" title="Burger" />
        <RecipesComponent path="/HomeFoodImagejpg.jpg" title="Pizza" />
        <RecipesComponent path="/HomeFoodImagejpg.jpg" title="Pasta" />
        <RecipesComponent path="/HomeFoodImagejpg.jpg" title="Salad" />
        <RecipesComponent path="/HomeFoodImagejpg.jpg" title="Soup" />
        <RecipesComponent path="/HomeFoodImagejpg.jpg" title="Steak" />

      </div>
    </aside>
  )
}

export default Recipes