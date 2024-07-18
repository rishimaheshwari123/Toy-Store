import React, { useEffect, useState } from "react";
import axios from "axios";
import Dropzone from "react-dropzone";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

function AddProduct() {
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const imageUpload = async (data) => {
    let result = [];
    Swal.fire({
      title: "Loading...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      const formData = new FormData();
      for (let i = 0; i < data.length; i++) {
        formData.append("thumbnail", data[i]);
      }
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/image/multi`,
        formData
      );
      if (!response?.data?.success) {
        throw new Error("Could Not Add IMAGE Details");
      }
      Swal.fire({
        icon: "success",
        title: "Image Details Added Successfully",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      result = response?.data?.images;
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
    Swal.close();
    return result;
  };

  const uploadImage = async (acceptedFiles) => {
    const response = await imageUpload(acceptedFiles);
    const uploadedImages = response?.map((image) => ({
      public_id: image.asset_id,
      url: image.url,
    }));
    setImages((prevImages) => [...prevImages, ...uploadedImages]);
  };

  const removeImage = (publicId) => {
    const updatedImages = images.filter(
      (image) => image.public_id !== publicId
    );
    setImages(updatedImages);
  };

  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    subCategory: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    if (name === "category") {
      setSelectedCategory(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", formValues.title);
    formData.append("description", formValues.description);
    formData.append("price", formValues.price);
    formData.append("category", formValues.category);
    formData.append("subCategory", formValues.subCategory);
    formData.append("images", JSON.stringify(images));
    formData.append("type", formValues.type);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/product/create`,
        formData
      );
      if (response?.data?.success) {
        toast.success("PRODUCT Details Added Successfully");
        setFormValues({
          title: "",
          description: "",
          price: "",
          category: "",
          subCategory: "",
          type: "",
        });
        setImages([]);
      } else {
        throw new Error("Could Not Add PRODUCT Details");
      }
      console.log(response.data.news);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/category/all`
      );
      setCategories(response?.data?.categories);
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    console.log("Selected Category:", selectedCategory);

    const filterd = categories.find((sub) => sub._id === selectedCategory);

    setSubCategories(filterd?.subCategories);
  }, [selectedCategory, subCategories]);

  return (
    <div className="max-w-7xl mx-auto pl-10">
      <div className="text-center mb-6 font-bold text-2xl p-5">Add Product</div>
      <form onSubmit={handleSubmit} className="space-y-4 p-5">
        <div>
          <label htmlFor="title" className="block text-gray-700">
            Title
          </label>
          <input
            id="title"
            name="title"
            placeholder="Enter Your Product Name"
            type="text"
            onChange={handleChange}
            value={formValues.title}
            className="form-input mt-1 block w-full rounded-md border-blue-500 ring ring-blue-200 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Enter Your Product description"
            name="description"
            onChange={handleChange}
            value={formValues.description}
            className="form-input mt-1 block w-full rounded-md border-blue-500 ring ring-blue-200 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-gray-700">
            Price
          </label>
          <input
            id="price"
            placeholder="Enter Your Product Price"
            name="price"
            type="number"
            onChange={handleChange}
            value={formValues.price}
            className="form-input mt-1 block w-full rounded-md border-blue-500 ring ring-blue-200 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-gray-700">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formValues.category}
            onChange={(e) => {
              handleChange(e);
              setSelectedCategory(e.target.value);
            }}
            className="form-input mt-1 block w-full rounded-md border-blue-500 ring ring-blue-200 focus:outline-none"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="subCategory" className="block text-gray-700">
            SubCategory
          </label>
          <select
            id="subCategory"
            name="subCategory"
            value={formValues.subCategory}
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-md border-blue-500 ring ring-blue-200 focus:outline-none"
          >
            <option value="">Select SubCategory</option>
            {subCategories
              // .filter((sub) => sub.category === selectedCategory)
              ?.map((subCategory) => (
                <option key={subCategory._id} value={subCategory._id}>
                  {subCategory.name}
                </option>
              ))}
          </select>
        </div>

        <div className="bg-white border-2 border-blue-600 p-6 text-center rounded-lg">
          <Dropzone onDrop={(acceptedFiles) => uploadImage(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div
                  {...getRootProps()}
                  className="p-4 border-dashed border-2 border-gray-400 rounded-md cursor-pointer"
                >
                  <input {...getInputProps()} />
                  <p className="text-gray-600">
                    Drag 'n' drop some files here, or click to select files
                  </p>
                </div>
              </section>
            )}
          </Dropzone>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Submit
        </button>
      </form>

      <div className="flex flex-wrap gap-4 mt-6 justify-center sm:justify-start">
        {images?.map((image, index) => (
          <div className="relative" key={index}>
            <button
              type="button"
              onClick={() => removeImage(image.public_id)}
              className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full shadow-md focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={image.url}
              alt=""
              className="w-40 h-40 object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddProduct;
