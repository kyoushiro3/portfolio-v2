"use client";

import { CircleChevronRight } from "lucide-react";
import { useState } from "react";

export default function CallBookingForm() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    try {
      const res = await fetch("/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
      >
          <div className="flex items-center justify-between px-6 py-2 lg:p-4 text-sm text-white font-medium font-mono border-r border-white/15 uppercase">
           Book a call
            <CircleChevronRight />
          </div>
      </button>

{open && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 max-w-md w-full relative border border-[#b1c5ce]/30">

      <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-4 text-[#394247] hover:opacity-70 transition"
      >
        ✕
      </button>

      <h2 className="text-sm uppercase font-bold text-[#394247] mb-6 tracking-wide">
        Book a Call
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="
            w-full
            bg-[#b1c5ce]/20
            text-[#394247]
            text-sm
            rounded-2xl
            px-4 py-3
            outline-none
            focus:bg-[#b1c5ce]/40
            transition-all duration-300
          "
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="
            w-full
            bg-[#b1c5ce]/20
            text-[#394247]
            text-sm
            rounded-2xl
            px-4 py-3
            outline-none
            focus:bg-[#b1c5ce]/40
            transition-all duration-300
          "
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
          className="
            w-full
            bg-[#b1c5ce]/20
            text-[#394247]
            text-sm
            rounded-2xl
            px-4 py-3
            outline-none
            focus:bg-[#b1c5ce]/40
            transition-all duration-300
          "
        />

        <button
          type="submit"
          className="
            w-full
            bg-[#b1c5ce]/40
            text-[#394247]
            text-sm
            uppercase font-bold
            rounded-2xl
            py-3
            transition-all duration-300
            hover:bg-[#b1c5ce]
          "
        >
          Submit
        </button>

        {status === "success" && (
          <p className="text-sm text-green-600 mt-2">
            Form submitted successfully!
          </p>
        )}

        {status === "error" && (
          <p className="text-sm text-red-600 mt-2">
            Something went wrong. Try again.
          </p>
        )}
      </form>
    </div>
  </div>
)}
    </>
  );
}