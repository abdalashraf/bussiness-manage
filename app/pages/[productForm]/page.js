'use client'
import Layout from "../../../components/Layout/layout";
import { useForm } from "react-hook-form";
import { FiUpload } from "react-icons/fi";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toast";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";

const ProductForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  let [userFound, setUserFound] = useState(null);
  const router = useRouter();
  const  id  = router.query;

  console.log("Product ID:", id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        setLoading(true);
        try {
          let response = await axios.get(
            "/api/products/get-Single-product?some=" + id
          );

          // let response = await axios.get(`/api/products/get-Single-product?id =${id}`)
          if (response) {
            setLoading(false);

            setUserFound(response.data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [id]);
  useEffect(() => {
    if (userFound) {
      reset(userFound);
    }
  }, [userFound]);
  const [image, setImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState([
    { value: "nature", label: "Nature" },
    { value: "animals", label: "Animals" },
    { value: "food", label: "Food" },
  ]);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleNewCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  const addCategory = () => {
    if (newCategory) {
      const newCategoryObj = {
        value: newCategory.toLowerCase(),
        label: newCategory,
      };
      setCategories([...categories, newCategoryObj]);
      setSelectedCategory(newCategory.toLowerCase());
      setShowModal(false);
    }
  };

  const onSubmit = async (data) => {
    if (id) {
      let response = await axios.put(
        `/api/products/product_update?id=${id}`,
        data
      );
      console.log(response);
      if (response?.data?.success) {
        toast.success("Product   Updated", { backgroundColor: "green" });
        reset();

        router.push("/table");
      } else {
        toast.warn("try agian ");
      }
    } else {
      // let result =  await fetch ("/api/products/addProduct",{
      //   method:"POST",
      //   body:JSON.stringify(data)
      // });
      // result =await result.json();
      const res = await axios.post("/api/products/addProduct", data);
      if (res.data.success) {
        console.log(res);
        toast.success("Product add", { backgroundColor: "green" });
      reset();

      } else {
        toast.warn("try agian ");
      }

      console.log(data);
    }
  };

  return (
    <Layout>
      {loading ? (
        <div className="text-center mt-4">Loading...</div>
      ) : (
        <>
          <div className=" product_form_conainer  ml-1 flex items-center mt-10">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md flex-1">
              <h2 className="text-1xl font-semibold mb-4">
                Add / Manage Product
              </h2>

              <div className="flex items-center space-x-4 mb-4">
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer flex items-center bg-blue-500 text-white px-2 py-1 rounded-md"
                >
                  <FiUpload className="text-blue-200 w-6 h-6 mr-2" />
                  <span>Upload Image</span>
                </label>
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                {image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={image}
                    alt="Uploaded"
                    className="w-32 h-32 object-contain border border-gray-300"
                  />
                )}
              </div>
              <div className="flex items-center space-x-4">
                <label htmlFor="category">Category:</label>
                <select
                  id="category"
                  className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring focus:border-blue-300"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded-md"
                  onClick={() => setShowModal(true)}
                >
                  Add Category
                </button>
              </div>
            </div>

            {/* Modal */}
            {showModal && (
              <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                <div className="bg-white p-4 rounded-md shadow-md">
                  <h2 className="text-lg font-semibold mb-4">
                    Add New Category
                  </h2>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter new category name"
                    value={newCategory}
                    onChange={handleNewCategoryChange}
                  />
                  <div className="flex justify-end mt-4">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                      onClick={addCategory}
                    >
                      Add
                    </button>
                    <button
                      className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className="container mx-auto p-4  product_form_conainer"
            style={{
              backgroundColor: "smokewhite",
            }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Add / Manage Product
            </h2>
            <form
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <label className="block text-gray-700 font-medium">Name</label>

                <input
                  {...register("productName")}
                  type="text"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <label className="block text-gray-700 font-medium">
                  Description
                </label>

                <input
                  {...register("productDescription")}
                  type="text"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <label className="block text-gray-700 font-medium">
                  Quantity
                </label>

                <input
                  {...register("productQunatity")}
                  type="text"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <label className="block text-gray-700 font-medium">Color</label>

                <input
                  {...register("productColor")}
                  type="text"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <label className="block text-gray-700 font-medium">size</label>

                <input
                  {...register("productSize")}
                  type="text"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <label className="block text-gray-700 font-medium">
                  Sale Price
                </label>

                <input
                  {...register("productSalePrice")}
                  type="text"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <label className="block text-gray-700 font-medium">
                  Cost Price
                </label>

                <input
                  {...register("productCostPrice")}
                  type="text"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </Layout>
  );
};

export default ProductForm;

// "use client";
// import axios from "axios";
// import Layout from "../components/Layout/index";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { toast, ToastContainer } from "react-toast";

// const productForm = () => {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [previewImage, setPreviewImage] = useState(null);
//   const {
//     register,
//     handleSubmit,
//     reset,
//     watch,
//     formState: { errors },
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//   } = useForm();
//   const handleProductform = async (data) => {
//     const res = await axios.post("/api/addProduct", data);
//     if (res) {
//       console.log(res);
//       toast.success("Product add", { backgroundColor: "green" });
//     } else {
//       toast.warn("try agian ");
//     }

//     reset();
//     console.log(data);
//   };
//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       setPreviewImage(reader.result);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <Layout>
//       {/* <nav class= " p-0 sm:ml-64 bg-current border-gray-200 dark:bg-gray-900"> */}

//       <div className=" p-0 sm:ml-0 container min-h-screen max-w-screen-lg mx-auto">
//         <div>
//           <div className="bg-white rounded shadow-lg px-4 p-12 md:p-8 mb-6">
//             <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
//               <div className="lg:col-span-2">
//                 <form onSubmit={handleSubmit(handleProductform)}>
//                   <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
//                     <div className="md:col-span-5">
//                       <label htmlFor="full_name">Product Name:</label>
//                       <input
//                         {...register("productName")}
//                         type="text"
//                         className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                         defaultValue=""
//                       />
//                     </div>
//                     <div className="md:col-span-5">
//                       <label htmlFor="email">Product Category:</label>
//                       <input
//                         {...register("productCategory")}
//                         type="text"
//                         className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                         defaultValue=""
//                       />
//                     </div>

//                     <div className="md:col-span-5">
//                       <label htmlFor="email">Product Description:</label>
//                       <input
//                         {...register("productDescription")}
//                         type="text"
//                         className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                         defaultValue=""
//                       />
//                     </div>
//                     <div className="md:col-span-5">
//                       <label htmlFor="country">Product Price:</label>
//                       <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
//                         <input
//                           {...register("productPrice")}
//                           className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
//                           defaultValue=""
//                         />
//                       </div>
//                     </div>
//                     <div className="md:col-span-5">
//                       <label htmlFor="state">Product Qunatity:</label>
//                       <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
//                         <input
//                           {...register("productQunatity")}
//                           className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
//                           defaultValue=""
//                         />
//                       </div>
//                     </div>

//                     <div className="md:col-span-5">
//                       <label htmlFor="full_name">Product image:</label> <br />
//                       <input
//                         type="file"
//                         onChange={handleImageUpload}
//                         accept="image/*"
//                       />
//                       {previewImage && (
//                         // eslint-disable-next-line @next/next/no-img-element
//                         <img
//                           src={previewImage}
//                           alt="Image Preview"
//                           style={{ width: "200px" }}
//                         />
//                       )}
//                     </div>
//                     <div className="md:col-span-5 ">
//                       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                         Submit
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default productForm;
