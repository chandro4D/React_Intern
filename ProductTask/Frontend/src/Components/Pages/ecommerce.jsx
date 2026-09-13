import { useEffect, useState } from "react";
import { ShoppingBag, Trash, Pencil, X } from "lucide-react";
import { RotatingLines } from "react-loader-spinner";
import Swal from "sweetalert2";

const emptyForm = { name: "", price: "", image: "", category: "" };

const Ecommerce = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(12);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  // ---For  CRUD Operations ---
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);

  const fetchProducts = () => {
    setLoading(true);
    fetch(`http://localhost:5000/api/products?limit`)
      .then((res) => res.json())
      .then((data) => {
        const list = Array.isArray(data) ? data : data.products || [];
        setProducts(list);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
        Swal.fire("Error", "Failed to load products.", "error");
      });
  };

  useEffect(() => {
    fetchProducts();
  }, [limit]);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const clearCart = () => {
    setCart([]);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
    Swal.fire({
      icon: "success",
      title: "Added to cart",
      text: `${item.name} added to your cart.`,
      timer: 1200,
      showConfirmButton: false,
    });
  };

  // --- CRUD handlers ---
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const openCreateForm = () => {
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(true);
  };

  const openEditForm = (product) => {
    setForm({
      name: product.name || "",
      price: product.price || "",
      image: product.image || "",
      category: product.category || "",
    });
    setEditingId(product._id);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setForm(emptyForm);
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    const payload = { ...form, price: Number(form.price) };
    const url = editingId
      ? `http://localhost:5000/api/products/${editingId}`
      : `http://localhost:5000/api/products`;
    const method = editingId ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.message || "Request failed");
      }

      closeForm();
      fetchProducts();
      Swal.fire({
        icon: "success",
        title: editingId ? "Product updated" : "Product created",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (err) {
      console.error("Save failed:", err);
      Swal.fire("Error", err.message || "Failed to save product.", "error");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete this product?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      confirmButtonColor: "#d33",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.message || "Delete failed");
      }

      setCart((prev) => prev.filter((c) => c._id !== id));
      fetchProducts();
      Swal.fire({
        icon: "success",
        title: "Product deleted",
        timer: 1200,
        showConfirmButton: false,
      });
    } catch (err) {
      console.error("Delete failed:", err);
      Swal.fire("Error", err.message || "Failed to delete product.", "error");
    }
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
        <div className="max-w-[1320px] lg:px-0 px-5 mx-auto py-20 flex flex-col gap-10">
          {/* --- Add product button + form --- */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Products</h1>
            <button
              onClick={openCreateForm}
              className="bg-orange-400 px-4 py-2 rounded-xl font-semibold cursor-pointer"
            >
              + Add Product
            </button>
          </div>

          {showForm && (
            <form
              onSubmit={handleSubmit}
              className="border rounded-xl p-5 flex flex-wrap gap-3 items-center bg-slate-50"
            >
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="border p-2 rounded flex-1 min-w-[180px]"
                required
              />
              <input
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Price"
                type="number"
                step="0.01"
                className="border p-2 rounded w-32"
                required
              />
              <input
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="Image URL"
                className="border p-2 rounded flex-1 min-w-[220px]"
              />
              <input
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Category"
                className="border p-2 rounded w-40"
              />
              <button
                type="submit"
                disabled={saving}
                className="bg-indigo-800 text-white px-4 py-2 rounded-xl font-semibold cursor-pointer disabled:opacity-50"
              >
                {saving ? "Saving..." : editingId ? "Update" : "Create"}
              </button>
              <button
                type="button"
                onClick={closeForm}
                className="p-2 rounded-xl border cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </form>
          )}

          <div className="flex gap-10">
            <div className="grid grid-cols-3 gap-10">
              {products.length === 0 ? (
                <p className="text-gray-500">No products found.</p>
              ) : (
                products.map((item) => (
                  <div
                    key={item._id}
                    className="border w-fit p-5 rounded-xl relative"
                  >
                    <div className="absolute top-3 right-3 flex gap-2">
                      {/* <button
                        onClick={() => openEditForm(item)}
                        className="bg-white p-1.5 rounded-full border cursor-pointer"
                      >
                        <Pencil className="w-4 h-4 text-blue-500" />
                      </button> */}
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-white p-1.5 rounded-full border cursor-pointer"
                      >
                        <Trash className="w-4 h-4 text-red-500" />
                      </button>
                    </div>

                    <img
                      src={item?.image}
                      alt={item?.name}
                      className="w-[200px] h-[200px] object-cover rounded"
                    />
                    <h1 className="font-semibold mt-2">{item?.name}</h1>
                    <p className="text-orange-500">${item?.price}</p>

                    {cart.some((c) => c._id === item._id) ? (
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
                  </div>
                ))
              )}
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
                  {cart?.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-slate-200 rounded-xl flex gap-4 mt-5"
                    >
                      <img
                        src={item?.image}
                        alt=""
                        className="w-[64px] h-[64px] object-cover rounded"
                      />
                      <div>
                        <h1 className="text-xl font-bold">{item?.name}</h1>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Ecommerce;
