import ShopComponent from "../components/ShopComponent"

function Shop() {
  return (
    <aside>
      <div className="grid grid-cols-2 gap-6">
        <ShopComponent path="https://www.andy-cooks.com/cdn/shop/files/Andy_Cooks_-_Protein_Press_Web_5.png?v=1728446306&width=1080" title="Chef's Press" />
        <ShopComponent path=" https://www.andy-cooks.com/cdn/shop/files/Andy_Cooks_-_Essential_Tote_Web_12.png?v=1728442666&width=720" title="Essential tote" />

      </div>
    </aside>
  )
}

export default Shop