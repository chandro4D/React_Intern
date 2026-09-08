import { useEffect, useState } from "react";
import { ShoppingBag, Trash } from "lucide-react";
import { RotatingLines } from "react-loader-spinner";

const Ecommerce = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(12);
  const [cart, setCart] = useState([]);

  console.log("🚀 ~ Ecommerce ~ cart:", cart);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, [limit]);

  // useEffect(()=>{
  //     const countTotal =  cart?.map(item=> total + item?.price)
  // },[cart])
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const clearCart = () => {
    setCart([]);
    // setTotal(0);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center min-h-[600px]">
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div className="max-w-[1320px]  lg:px-0 px-5 mx-auto py-20 flex gap-10">
          <div className="grid grid-cols-3 gap-10">
            {products?.map((item) => (
              <div className="border w-fit p-5 rounded-xl">
                <img src={item?.thumbnail} alt="" />
                <h1>{item?.title}</h1>
                <p>{item?.price}</p>
                {/* {cart?.length === 0 && (
                  <button
                    onClick={() => addToCart(item)}
                    className="px-3 py-2 bg-orange-400 text-lg font-semibold rounded-xl w-full mt-4 cursor-pointer"
                  >
                    + Add to Cart
                  </button>
                )} */}

                {cart.some((c) => c.id === item.id) ? (
                  <button
                    disabled
                    className="px-3 py-2 bg-gray-400 text-lg font-semibold rounded-xl w-full mt-4 cursor-not-allowed"
                  >
                    Product Added
                  </button>
                ) : (
                  <button
                    onClick={() => addToCart(item)}
                    className="px-3 py-2 bg-orange-400 text-lg font-semibold rounded-xl w-full mt-4 cursor-pointer"
                  >
                    + Add to Cart
                  </button>
                )}

                {/* {cart?.map((c) => (
                  <div>
                    {c?.id == item?.id ? (
                      <button className="px-3 py-2 bg-gray-400 text-lg font-semibold rounded-xl w-full mt-4 cursor-not-allowed">
                        + Product Added
                      </button>
                    ) : (
                      <button
                        onClick={() => addToCart(item)}
                        className="px-3 py-2 bg-orange-400 text-lg font-semibold rounded-xl w-full mt-4 cursor-pointer"
                      >
                        + Add to Cart
                      </button>
                    )}
                  </div>
                ))} */}
              </div>
            ))}
          </div>

          <div className="min-w-[350px] border h-fit p-5 rounded-xl sticky top-0">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">Your Cart</h1>
              <p className="bg-orange-400 px-4 py-2 text-lg rounded-full h-fit">
                {cart?.length}
              </p>
            </div>

            {cart?.length === 0 ? (
              <div className="bg-gray-200 py-12 flex flex-col items-center rounded-xl mt-5">
                <ShoppingBag />
                <h4 className="mt-2">Your cart is empty</h4>
                <p>Add a product to see it here.</p>
              </div>
            ) : (
              <div className="max-h-[500px] overflow-y-scroll">
                {cart?.map((item) => (
                  <div className="p-5 bg-slate-200 rounded-xl flex gap-4 mt-5">
                    <img
                      src={item?.thumbnail}
                      alt=""
                      className="w-[64px] h-[64px]"
                    />
                    <div>
                      <h1 className="text-xl font-bold">{item?.title}</h1>
                      <p className="text-base text-orange-500">
                        ${item?.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="bg-indigo-800 p-5 text-white rounded-xl mt-5">
              <p className="text-lg font-bold">Total amount</p>
              <div className="flex justify-between items-end">
                <h1 className="font-bold text-3xl">${total?.toFixed(2)}</h1>
                <p>{cart?.length} items</p>
              </div>
            </div>
            <button
              onClick={() => clearCart()}
              className="mt-5 flex gap-3 bg-gray-100 rounded-xl py-3 w-full justify-center cursor-pointer"
            >
              <Trash className="text-red-500" />
              <p>Clear Cart</p>
            </button>
          </div>
          {/* {
                products.map(item=> (
                    <div>
                        <h1>Title: {item.title}</h1>
                    </div>
                ))
            } */}

          {/* <button onClick={()=>setLimit(limit+12)} className="mt-10 border p-3 rounded text-lg">Show More</button> */}
        </div>
      )}
    </div>
  );
};

export default Ecommerce;
