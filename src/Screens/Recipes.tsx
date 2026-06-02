import RecipesComponent from "../components/RecipesComponent"
import SearchForm from "../components/SearchForm"

function Recipes() {

  return (
    <aside className="flex items-center flex-col gap-10 justify-center bg-gray-100 p-6">
      <h1 className="text-4xl mt-10">Recipes</h1>

      <SearchForm />
      <div className="grid grid-cols-2 gap-6">
        
        <RecipesComponent path="https://cdn.prod.website-files.com/6744d2d124649f6ecd466f50/69c2e10836b5d32dd85b09d0_v4-p-2000.jpg" title="Short Ribs" />
        <RecipesComponent path="https://cdn.prod.website-files.com/6744d2d124649f6ecd466f50/69b4229750049903c096f48f_v3-p-2000.jpg" title="Jianbing" />
        <RecipesComponent path="https://cdn.prod.website-files.com/6744d2d124649f6ecd466f50/69b1d538e32b0ecf0bffd64d_SF%20Thumbs-1%20(1)-p-1600.jpg" title="Air Fryer Pasta Chips" />
        <RecipesComponent path="https://cdn.prod.website-files.com/6744d2d124649f6ecd466f50/69b0e7772b8615274bc645e6_notext-p-1600.jpg" title="Bun Cha Hanoi" />
        <RecipesComponent path="https://cdn.prod.website-files.com/6744d2d124649f6ecd466f50/69a85f32301f0f9bf52ec389_SF%20Thumbs-3-v2-bright-p-1600.jpeg" title="Mac & Cheese" />
        <RecipesComponent path="https://cdn.prod.website-files.com/6744d2d124649f6ecd466f50/69a7af376fd665d9da324407_notext%20(2)-p-1600.jpg" title="Breakfast Sandwich" />

      </div>
    </aside>
  )
}

export default Recipes