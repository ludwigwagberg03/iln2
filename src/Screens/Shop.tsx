import ShopComponent from "../components/ShopComponent"

function Shop() {
  return (
    <aside>
      <div className="grid grid-cols-2 gap-6">
        <ShopComponent />
        <ShopComponent />
        <ShopComponent />
        <ShopComponent />
        <ShopComponent />
        <ShopComponent />

      </div>
    </aside>
  )
}

export default Shop