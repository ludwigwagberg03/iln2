import RecipesLinkComponent from "./RecipesLinkComponent"

function HomeComponent() {
    return (
        <aside className="flex items-center flex-col">
            <img src="/HomeFoodImagejpg.jpg" alt="" className="w-full mb-40" />

            <h1 className="text-4xl mb-10">Good food for good people</h1>
            <RecipesLinkComponent />
        </aside>
    )
}
export default HomeComponent