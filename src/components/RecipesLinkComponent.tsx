import { Link } from "react-router-dom"

function RecipesLinkComponent() {
    return (
        <div className="flex gap-2 items-center justify-center">
            <Link to="recipes">View all Recipes</Link>
            <img src="public/right-arrow-svgrepo-com.svg" alt="" className="h-4 w-4 items-center justify-center" />
        </div>
    )
}
export default RecipesLinkComponent