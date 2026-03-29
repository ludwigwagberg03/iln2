import CartButton from "./CartButton";

function ShopComponent({ path, title }: { path:string, title: string }) {
    return (
        <div className="flex flex-col items-center justify-center">
          <img src={path} alt={title} className="w-200 h-100" />
          <h3 className="text-3xl">{title}</h3>
          <CartButton />
        </div>
    )
}
export default ShopComponent