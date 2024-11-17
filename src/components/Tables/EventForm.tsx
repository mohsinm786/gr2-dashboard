import React, { useState } from "react";

const EventForm = () => {
  const [formData, setFormData] = useState({
    image: null,
    title: "",
    text: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  const submitFormData = async () => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const formPayload = new FormData();
      formPayload.append("image", formData.image!);
      formPayload.append("title", formData.title);
      formPayload.append("text", formData.text);

      // Replace this with your API call
      await fetch("YOUR_API_ENDPOINT_HERE", {
        method: "POST",
        body: formPayload,
      });

      setSuccess(true);
      setFormData({ image: null, title: "", text: "" }); // Reset form on success
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Failed to submit the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.image || !formData.title || !formData.text) {
      setError("All fields are required.");
      return;
    }
    await submitFormData();
  };

  return (
    <form
      className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md dark:bg-dark-2"
      onSubmit={handleSubmit}
    >
      {/* Image Input */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-dark dark:text-white" htmlFor="image">
          Upload Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        {formData.image && (
          <div className="mt-4">
            <img
              src={URL.createObjectURL(formData.image)}
              alt="Uploaded Preview"
              className="h-24 w-24 object-cover rounded-lg shadow"
            />
          </div>
        )}
      </div>

      {/* Title Input */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-dark dark:text-white" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter title"
          className="block w-full px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg dark:bg-dark-3 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          required
        />
      </div>

      {/* Text Input */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-dark dark:text-white" htmlFor="text">
          Text
        </label>
        <textarea
          id="text"
          name="text"
          value={formData.text}
          onChange={handleInputChange}
          placeholder="Enter text"
          rows={4}
          className="block w-full px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg dark:bg-dark-3 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          required
        ></textarea>
      </div>

      {/* Error Message */}
      {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

      {/* Success Message */}
      {success && <p className="text-sm text-green-500 mb-4">Form submitted successfully!</p>}

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className={`w-full px-4 py-2 text-sm font-medium text-white rounded-lg ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          }`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default EventForm;
