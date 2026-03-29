import ShopComponent from "../components/ShopComponent"

function Shop() {
  return (
    <aside>
      <div className="grid grid-cols-2 gap-6">
        <ShopComponent path="/shopping.webp" title="Chef's Press" />
        <ShopComponent path="/shopping.webp" title="Chef's Press" />
        <ShopComponent path="/shopping.webp" title="Chef's Press" />
        <ShopComponent path="/shopping.webp" title="Chef's Press" />
        <ShopComponent path="/shopping.webp" title="Chef's Press" />
        <ShopComponent path="/shopping.webp" title="Chef's Press" />
      </div>
    </aside>
  )
}

export default Shop