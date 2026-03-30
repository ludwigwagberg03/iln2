import { Link } from "react-router-dom"

function Headercomponent() {
    return (
        <header className="flex items-center justify-between bg-gray-900 text-white">
        <Link to="/" className='p-6 text-5xl'>COOKS</Link>
  
        <nav className="flex gap-6 p-6 items-center">
          <Link to="/shop">Shop</Link>
          <Link to="recipes">Recipes</Link>
          <img src="../public/basket-svgrepo-com.svg" alt="" className='h-10 w-10' />
        </nav>
      </header>
    )
}
export default Headercomponent