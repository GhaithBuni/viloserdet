"use client";

import { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFeedback(null);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/send-confirmation/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setFeedback({
          type: "success",
          message: "Meddelande skickat framgångsrikt!",
        });
        setFormData({ name: "", email: "", number: "", message: "" }); // Reset form
      } else {
        setFeedback({
          type: "error",
          message: "Det gick inte att skicka meddelandet.",
        });
      }
    } catch (error) {
      setFeedback({
        type: "error",
        message: "Det gick inte att skicka meddelandet. Försök igen senare.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#F5F5F5] text-black min-h-screen py-24">
      {/* Header Section */}
      <div className="relative bg-white px-6 md:px-12 pt-24 md:pt-32 pb-32 h-[55vh] flex items-center">
        <h1 className="container mx-auto px-6 md:px-12 text-4xl md:text-6xl font-bold text-[#0D3F53] text-center relative after:block after:w-full after:h-1 after:bg-[#DEB82D] after:mt-2">
          Kontakta oss
        </h1>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Contact Form & Info Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="bg-[#0D3F53] p-4 rounded-full">
                <a
                  href="https://www.google.com/maps?q=59.8586,17.6389"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📍
                </a>
              </span>
              <p className="text-lg text-black font-bold">
                Uppsala, Enköping, Stockholm, karlstads,Västerås{" "}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-[#0D3F53] p-4 rounded-full">
                {" "}
                <a href="mailto:info@viloserdet.se">✉️</a>
              </span>
              <p className="text-lg text-black font-bold">info@viloserdet.se</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-[#0D3F53] p-4 rounded-full cursor-pointer">
                {" "}
                <a href="tel:0722677774">📞</a>
              </span>
              <p className="text-lg text-black font-bold">+46722-677774</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg text-black"
          >
            <div className="mb-6">
              <label className="block text-lg font-semibold text-[#0D3F53] mb-2">
                Namn
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ditt namn"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBD60]"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-semibold text-[#0D3F53] mb-2">
                Nummer
              </label>
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Ditt telefonnummer"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBD60]"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-semibold text-[#0D3F53] mb-2">
                E-post
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Din e-postadress"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBD60]"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-semibold text-[#0D3F53] mb-2">
                Meddelande
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Skriv ditt meddelande här..."
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBD60]"
                required
              />
            </div>
            {feedback && (
              <div
                className={`mb-4 p-3 rounded-lg ${
                  feedback.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {feedback.message}
              </div>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#0D3F53] text-white text-lg font-semibold py-3 rounded-lg shadow-md hover:bg-[#DEB82D] transition-all disabled:bg-gray-400"
            >
              {isLoading ? "Skickar..." : "Skicka Meddelande"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
