// resources/js/Components/InquiryForm.tsx
import { router } from "@inertiajs/react";
import React, { useState } from "react";

const InquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.post("/inquiries", formData);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto my-12">
      <h2 className="text-3xl font-bold text-center mb-6">Inquiry Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg h-32"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg font-bold">
          Submit Inquiry
        </button>
      </form>
    </div>
  );
};

export default InquiryForm;
