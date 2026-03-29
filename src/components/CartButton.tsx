import { useEffect, useRef, useState } from 'react'

function CartButton() {
    const [state, setState] = useState(0);
    const renderCount = useRef(0);
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    return (
        <div className='flex gap-1'>
            <button onClick={() => setState(state + 1)}>Add To Cart:</button>
            <div>{state}</div>
        </div>
    );
}
export default CartButton