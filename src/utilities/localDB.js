import Swal from "sweetalert2";

// use local storage to manage cart data
const addToDB = id =>{
    let cart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = cart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        cart[id] = newQuantity;
    }

    else{
        cart[id] = 1;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

const getStoredCart = () =>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('cart', JSON.stringify(shoppingCart));
        }
        Swal.fire(
            'Product Removed!',
            'You have removed a Product!',
            'info'
          )
    }
      setTimeout(() => window.location.reload(), 1000);
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('cart');
    window.location.reload();
}

export {
    // addToDB as addToDb,
    addToDB,
    getStoredCart,
    removeFromDb,
    deleteShoppingCart
}