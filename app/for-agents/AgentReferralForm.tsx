"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Check } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface FormState {
  name: string;
  email: string;
  phone: string;
  brokerage: string;
  clientVolume: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  phone: "",
  brokerage: "",
  clientVolume: "",
  message: "",
};

const CLIENT_VOLUME_OPTIONS = [
  { value: "", label: "Select an option" },
  { value: "1 client", label: "Just 1 client right now" },
  { value: "2-3 clients", label: "2-3 clients" },
  { value: "4-6 clients", label: "4-6 clients" },
  { value: "7+ clients / ongoing", label: "7+ clients / ongoing referrals" },
];

export function AgentReferralForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
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
        body: encode({ "form-name": "agent-referral", ...form }),
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
          Thanks for reaching out!
        </h2>
        <p className="text-[#5A6472] max-w-sm">
          We&rsquo;ll follow up within one business day to talk through how we
          can support your listings.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      name="agent-referral"
      data-netlify="true"
      className="bg-white border border-[#D5CABE] rounded-xl p-7 md:p-8"
    >
      <input type="hidden" name="form-name" value="agent-referral" />
      <p className="hidden">
        <label>
          Don&rsquo;t fill this out if you&rsquo;re human:{" "}
          <input name="bot-field" />
        </label>
      </p>

      {/* Name */}
      <div className="flex flex-col gap-1.5 mb-5">
        <Label htmlFor="agent-name" className="text-sm font-medium text-[#0B1F3A]">
          Name <span className="text-[#159AD6]">*</span>
        </Label>
        <Input
          id="agent-name"
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
      <div className="flex flex-col gap-1.5 mb-5">
        <Label htmlFor="agent-email" className="text-sm font-medium text-[#0B1F3A]">
          Email <span className="text-[#159AD6]">*</span>
        </Label>
        <Input
          id="agent-email"
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

      {/* Phone + Brokerage */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="agent-phone" className="text-sm font-medium text-[#0B1F3A]">
            Phone
          </Label>
          <Input
            id="agent-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(717) 555-0100"
            value={form.phone}
            onChange={handleChange}
            className="border-[#D5CABE] focus-visible:border-[#159AD6] focus-visible:ring-[#159AD6]/30 h-10"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="agent-brokerage" className="text-sm font-medium text-[#0B1F3A]">
            Brokerage
          </Label>
          <Input
            id="agent-brokerage"
            name="brokerage"
            type="text"
            autoComplete="organization"
            placeholder="Keller Williams"
            value={form.brokerage}
            onChange={handleChange}
            className="border-[#D5CABE] focus-visible:border-[#159AD6] focus-visible:ring-[#159AD6]/30 h-10"
          />
        </div>
      </div>

      {/* Client volume */}
      <div className="flex flex-col gap-1.5 mb-5">
        <Label htmlFor="agent-client-volume" className="text-sm font-medium text-[#0B1F3A]">
          How many clients do you have that need prep services right now?{" "}
          <span className="text-[#159AD6]">*</span>
        </Label>
        <select
          id="agent-client-volume"
          name="clientVolume"
          required
          value={form.clientVolume}
          onChange={handleChange}
          className="h-10 w-full rounded-lg border border-[#D5CABE] bg-transparent px-2.5 text-sm text-[#1F2A35] outline-none transition-colors focus-visible:border-[#159AD6] focus-visible:ring-3 focus-visible:ring-[#159AD6]/30"
        >
          {CLIENT_VOLUME_OPTIONS.map((option) => (
            <option key={option.value} value={option.value} disabled={option.value === ""}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5 mb-6">
        <Label htmlFor="agent-message" className="text-sm font-medium text-[#0B1F3A]">
          Anything else we should know?
        </Label>
        <Textarea
          id="agent-message"
          name="message"
          placeholder="Property address, timeline, or specific prep needs"
          value={form.message}
          onChange={handleChange}
          className="border-[#D5CABE] focus-visible:border-[#159AD6] focus-visible:ring-[#159AD6]/30 min-h-24"
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
        Partner With PhotoReady
      </button>

      <p className="mt-4 text-xs text-[#5A6472] text-center">
        We typically respond within one business day.
      </p>
    </form>
  );
}
