import CartButton from "./CartButton";

function ShopComponent() {
    return (
        <div className="flex flex-col items-center justify-center">
          <img src="public/HomeFoodImagejpg.jpg" alt="" className="w-200 h-100" />
          <h3 className="text-3xl">few</h3>
          <CartButton />
        </div>
    )
}
export default ShopComponent