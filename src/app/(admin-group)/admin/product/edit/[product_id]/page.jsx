"use client";

import { useEffect, useRef, useState } from "react";
import { getcategories, getColors, getBrands, getproducts } from "@/library/api-call";
import { AxiosInstance, generateSlug, notify, getCookie } from "@/library/helper";
import { useRouter } from "next/navigation";
import Select from "react-select";
import TextEditor from "@/components/admin/TextEditor";

export default function EditProduct({ params }) {
  const token = getCookie('admin_token')
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [color, setColor] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [longDescription, setLongDescription] = useState("");
  const [product, setProduct] = useState(null);

  // Refs
  const nameRef = useRef();
  const slugRef = useRef();
  const shortDescRef = useRef();
  const originalPriceRef = useRef();
  const discountPercentageRef = useRef();
  const finalPriceRef = useRef();
  const categoryRef = useRef();
  const brandRef = useRef();

  // Fetch categories, brands, colors
  async function getData() {
    const Category = await getcategories();
    setCategory(Category.data);
    const Brand = await getBrands();
    setBrand(Brand.data);
    const Color = await getColors();
    setColor(Color.data);
  }

  // Fetch product by id
  async function getProductById() {
    try {
      const productJSON = await getproducts(params.product_id);
      const prod = productJSON.data;

      setProduct(prod);

      // Pre-fill values
      nameRef.current.value = prod.name;
      slugRef.current.value = prod.slug;
      shortDescRef.current.value = prod.shortDescription;
      originalPriceRef.current.value = prod.originalPrice;
      discountPercentageRef.current.value = prod.discountPercentage;
      finalPriceRef.current.value = prod.finalPrice;
      setLongDescription(prod.longDescription);
      setSelectedColor(prod.colors || []);
    } catch (err) {
      console.error(err, "error");
      notify("Data fetching product", 0);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
    if (params.product_id) {
      getProductById();
    }
  }, [params.product_id]);

  // Slug auto-generate
  const slugCreate = () => {
    const slug = generateSlug(nameRef.current.value);
    slugRef.current.value = slug;
  };

  // Auto final price
  const finalPriceCalculate = () => {
    let discountPercentage = discountPercentageRef.current.value;
    let originalPrice = originalPriceRef.current.value;
    let finalPrice = originalPrice - (originalPrice * discountPercentage) / 100;
    finalPriceRef.current.value = finalPrice;
  };

  // Submit handler
  function submitHandler(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", nameRef.current.value);
    formData.append("slug", slugRef.current.value);
    formData.append("shortDescription", shortDescRef.current.value);
    formData.append("longDescription", longDescription);
    formData.append("originalPrice", originalPriceRef.current.value);
    formData.append("discountPercentage", discountPercentageRef.current.value);
    formData.append("finalPrice", finalPriceRef.current.value);
    formData.append("categoryId", categoryRef.current.props.value?.value || product.categoryId);
    formData.append("brandId", brandRef.current.props.value?.value || product.brandId);
    formData.append("colors", JSON.stringify(selectedColor));

    if (e.target.thumbnail.files[0]) {
      formData.append("thumbnail", e.target.thumbnail.files[0]);
    }

    AxiosInstance.put(`product/update/${product._id}`, formData, {
      headers: {
        Authorization: token
      }
    })
      .then((response) => {
        notify(response.data.message, response.data.success);
        if (response.data.success) {
          router.push("/admin/product");
        }
      })
      .catch((error) => {
        console.error(error);
        notify("Something went wrong...", 0);
      });
  }

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 max-w-6xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6">
        Edit Product
      </h2>

      <form onSubmit={submitHandler} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name + Slug + Short Description */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
            <input type="text" ref={nameRef} onChange={slugCreate}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Slug</label>
            <input type="text" ref={slugRef} readOnly
              className="w-full px-4 py-2 border rounded-lg bg-gray-100" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Short Description</label>
            <textarea ref={shortDescRef}
              className="w-full px-4 py-2 border rounded-lg resize-none" />
          </div>
        </div>

        {/* Long Description */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-600 mb-1">Long Description</label>
          <TextEditor placeholder="Enter detailed description"
            value={longDescription} onChangeHandler={setLongDescription} />
        </div>

        {/* Prices */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Original Price</label>
            <input type="number" ref={originalPriceRef} onChange={finalPriceCalculate}
              className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Discount %</label>
            <input type="number" ref={discountPercentageRef} onChange={finalPriceCalculate}
              className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Final Price</label>
            <input type="number" ref={finalPriceRef} readOnly
              className="w-full px-4 py-2 border rounded-lg bg-gray-100" />
          </div>
        </div>

        {/* Category + Brand + Colors */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Category</label>
            <Select ref={categoryRef}
              defaultValue={category.find(cat => cat._id === product.categoryId) ? {
                value: product.categoryId, label: category.find(cat => cat._id === product.categoryId).name
              } : null}
              options={category.map(cat => ({ value: cat._id, label: cat.name }))} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Brand</label>
            <Select ref={brandRef}
              defaultValue={brand.find(b => b._id === product.brandId) ? {
                value: product.brandId, label: brand.find(b => b._id === product.brandId).name
              } : null}
              options={brand.map(b => ({ value: b._id, label: b.name }))} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Colors</label>
            <Select isMulti
              defaultValue={color.filter(c => (product.colors || []).includes(c._id))
                .map(c => ({ value: c._id, label: c.name }))}
              onChange={(data) => setSelectedColor(data.map(d => d.value))}
              options={color.map(c => ({ value: c._id, label: c.name }))} />
          </div>
        </div>

        {/* Thumbnail */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Thumbnail</label>
          <input type="file" name="thumbnail"
            className="w-full border rounded-lg px-3 py-2" />
          {product.thumbnail && (
            <img src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/product/${product.thumbnail}`}
              alt="Product thumbnail"
              className="mt-3 w-40 h-28 object-cover rounded border" />
          )}
        </div>

        {/* Submit */}
        <div className="md:col-span-2 flex justify-end">
          <button type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-all">
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
}
