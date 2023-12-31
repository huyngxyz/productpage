/* eslint-disable react/prop-types */
import img1 from "../assets/images/image-product-1.jpg";
import { motion } from "framer-motion";

export default function Cart({ cartItem, onCartChange, numberOfItems }) {
  const handleRemoveItem = (index) => {
    const updatedItems = [...cartItem];
    const item = updatedItems[index];
  
    if (item && item.quantity > 1) {
      item.quantity -= 1;
    } else if (item && item.quantity === 1) {
      updatedItems.splice(index, 1);
    }
  
    onCartChange(updatedItems);
    numberOfItems(prevCount => prevCount - 1); // Update the cart counter when removing an item
  };


  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1,
      }}
      className="absolute z-50 left-3 bg-white shadow-2xl w-[95vw] md:w-80 md:right-2 md:left-auto -bottom-60 md:-translate-x-0 rounded-md"
    >
      <p className="p-4 border-b  border-b-light-gray-blue font-bold">Cart</p>
      <div className="p-5 space-y-4">
        {cartItem.length > 0 ? (
          cartItem.map((item, index) => (
            <div key={index} className="flex space-x-4 w-full justify-between">
              <div className="flex items-center space-x-2">
                <img className="w-16 aspect-square" src={img1} alt="" />
                <div>
                  <div>
                    <span>{item.title}</span>
                  </div>
                  <div className="space-x-2">
                    <span>
                      ${item.price.toFixed(2)} x {item.quantity}
                    </span>
                    <span className="font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <button onClick={() => handleRemoveItem(index)}>
                <svg
                  className=" pointer-events-none"
                  width="14"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <path
                      d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                      id="a"
                    />
                  </defs>
                  <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
                </svg>
              </button>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center">
            <h2 className="font-bold text-xl py-5">Your Cart Is Empty</h2>
          </div>
        )}
        <button className="flex space-x-2 items-center bg-orange w-full justify-center rounded-md px-4 text-white py-3">
          Checkout
        </button>
      </div>
    </motion.div>
  );
}
