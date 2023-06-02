import React,{useState} from 'react';

function Cart(){
    const[cartItems,setCartItems]=useState([]);

    const addToCart=(product)=>{
        setCartItems([...cartItems,product]);
    };

    const removeFromCart=(product)=>{
        const updateCartItems=cartItems.filter((item)=>item.id!==product.id)
        setCartItems(updateCartItems);
    }

    return(
        <div className='cart'>
            <h1 className='cartText1'>CART</h1>
            {cartItems.length === 0 ? (
            <p className='cartText2'>장바구니가 비어 있습니다.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - {item.price}
                  <button onClick={() => removeFromCart(item)}>제거</button>
                </li>
              ))}
            </ul>
          )}
    
          <h2 className='cartText1'>상품목록</h2>
          <ul>
            <li>
              상품 1 - $10
              <button onClick={() => addToCart({ id: 1, name: '상품 1', price: 10 })}>장바구니에 추가</button>
            </li>
            <li>
              상품 2 - $20
              <button onClick={() => addToCart({ id: 2, name: '상품 2', price: 20 })}>장바구니에 추가</button>
            </li>
            <li>
              상품 3 - $30
              <button onClick={() => addToCart({ id: 3, name: '상품 3', price: 30 })}>장바구니에 추가</button>
            </li>
          </ul>
        </div>
    );
}


          
export default Cart;

