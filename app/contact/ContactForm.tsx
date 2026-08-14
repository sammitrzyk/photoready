"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Check } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormState {
  name: string;
  email: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function encode(data: Record<string, string>) {
    const params = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => params.append(key, value));
    return params.toString();
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...form }),
      });
      setSubmitted(true);
    } catch {
      setError(true);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white border border-[#D5CABE] rounded-xl p-7 md:p-8 flex flex-col items-center justify-center text-center gap-4 min-h-[320px]">
        <div className="h-14 w-14 rounded-full bg-[#159AD6]/10 flex items-center justify-center">
          <Check className="h-7 w-7 text-[#159AD6]" aria-hidden="true" />
        </div>
        <h2 className="font-display text-2xl font-bold text-[#0B1F3A]">
          Request received!
        </h2>
        <p className="text-[#5A6472] max-w-sm">
          Thanks! We&rsquo;ll be in touch within one business day to talk
          through your project and next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      name="contact"
      data-netlify="true"
      className="bg-white border border-[#D5CABE] rounded-xl p-7 md:p-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&rsquo;t fill this out if you&rsquo;re human: <input name="bot-field" />
        </label>
      </p>

      {/* Name */}
      <div className="flex flex-col gap-1.5 mb-5">
        <Label htmlFor="name" className="text-sm font-medium text-[#0B1F3A]">
          Name <span className="text-[#159AD6]">*</span>
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Jane Smith"
          value={form.name}
          onChange={handleChange}
          className="border-[#D5CABE] focus-visible:border-[#159AD6] focus-visible:ring-[#159AD6]/30 h-10"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5 mb-6">
        <Label htmlFor="email" className="text-sm font-medium text-[#0B1F3A]">
          Email <span className="text-[#159AD6]">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jane@example.com"
          value={form.email}
          onChange={handleChange}
          className="border-[#D5CABE] focus-visible:border-[#159AD6] focus-visible:ring-[#159AD6]/30 h-10"
        />
      </div>

      {error && (
        <p className="mb-4 text-sm text-red-600 text-center">
          Something went wrong submitting your request. Please try again or
          call us directly.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#159AD6] hover:bg-[#0E7AAF] text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#159AD6] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
      >
        Send
      </button>

      <p className="mt-4 text-xs text-[#5A6472] text-center">
        We typically respond within one business day.
      </p>
    </form>
  );
}
