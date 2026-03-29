import SearchForm from "../components/SearchForm"

function Recipes() {

  return (
    <aside className="flex items-center flex-col gap-10 justify-center bg-gray-100 p-6">
      <h1 className="text-4xl mt-10">Recipes</h1>

      <SearchForm />
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col items-center justify-center">
          <img src="public/HomeFoodImagejpg.jpg" alt="" className="w-200 h-100" />
          <h3 className="text-3xl">few</h3>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img src="public/HomeFoodImagejpg.jpg" alt="" className="w-200 h-100" />
          <h3 className="text-3xl">few</h3>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <img src="public/HomeFoodImagejpg.jpg" alt="" className="w-200 h-100" />
          <h3 className="text-3xl">few</h3>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <img src="public/HomeFoodImagejpg.jpg" alt="" className="w-200 h-100" />
          <h3 className="text-3xl">few</h3>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <img src="public/HomeFoodImagejpg.jpg" alt="" className="w-200 h-100" />
          <h3 className="text-3xl">few</h3>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <img src="public/HomeFoodImagejpg.jpg" alt="" className="w-200 h-100" />
          <h3 className="text-3xl">few</h3>
        </div>

      </div>
    </aside>
  )
}

export default Recipes