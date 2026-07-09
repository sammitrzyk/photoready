"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Check } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FormState {
  name: string;
  phone: string;
  email: string;
  address: string;
  role: string;
  timeline: string;
  services: string[];
  message: string;
}

const SERVICE_OPTIONS = [
  "Home Cleanout",
  "Painting & Touch-Ups",
  "Flooring & Carpet",
  "Move-Out Cleaning",
  "Curb Appeal & Landscaping",
  "Minor Repairs",
] as const;

const ROLE_OPTIONS = [
  { value: "homeowner", label: "Homeowner" },
  { value: "agent", label: "Real Estate Agent" },
  { value: "investor", label: "Investor" },
  { value: "property-manager", label: "Property Manager" },
] as const;

const TIMELINE_OPTIONS = [
  { value: "flexible", label: "Flexible (1–2 months)" },
  { value: "2-3-weeks", label: "2–3 weeks" },
  { value: "1-2-weeks", label: "1–2 weeks" },
  { value: "asap", label: "ASAP / Under a week" },
] as const;

const INITIAL_STATE: FormState = {
  name: "",
  phone: "",
  email: "",
  address: "",
  role: "",
  timeline: "",
  services: [],
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleServiceToggle(service: string) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
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

  const selectBase =
    "w-full rounded-lg border border-[#D5CABE] bg-transparent px-3 py-2 text-sm text-[#1F2A35] outline-none transition-colors focus:border-[#159AD6] focus:ring-1 focus:ring-[#159AD6] disabled:cursor-not-allowed disabled:opacity-50 h-9 appearance-none";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-[#D5CABE] rounded-xl p-7 md:p-8"
    >
      {/* Name */}
      <div className="flex flex-col gap-1.5 mb-5">
        <Label htmlFor="name" className="text-sm font-medium text-[#0B1F3A]">
          Full Name <span className="text-[#159AD6]">*</span>
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

      {/* Phone */}
      <div className="flex flex-col gap-1.5 mb-5">
        <Label htmlFor="phone" className="text-sm font-medium text-[#0B1F3A]">
          Phone <span className="text-[#159AD6]">*</span>
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="(717) 555-0100"
          value={form.phone}
          onChange={handleChange}
          className="border-[#D5CABE] focus-visible:border-[#159AD6] focus-visible:ring-[#159AD6]/30 h-10"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5 mb-5">
        <Label htmlFor="email" className="text-sm font-medium text-[#0B1F3A]">
          Email{" "}
          <span className="text-[#5A6472] font-normal">(optional)</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="jane@example.com"
          value={form.email}
          onChange={handleChange}
          className="border-[#D5CABE] focus-visible:border-[#159AD6] focus-visible:ring-[#159AD6]/30 h-10"
        />
      </div>

      {/* Property Address */}
      <div className="flex flex-col gap-1.5 mb-5">
        <Label
          htmlFor="address"
          className="text-sm font-medium text-[#0B1F3A]"
        >
          Property Address / Town
        </Label>
        <Input
          id="address"
          name="address"
          type="text"
          autoComplete="street-address"
          placeholder="123 Main St, Harrisburg, PA"
          value={form.address}
          onChange={handleChange}
          className="border-[#D5CABE] focus-visible:border-[#159AD6] focus-visible:ring-[#159AD6]/30 h-10"
        />
      </div>

      {/* Role + Timeline row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Role */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="role" className="text-sm font-medium text-[#0B1F3A]">
            Your Role
          </Label>
          <div className="relative">
            <select
              id="role"
              name="role"
              value={form.role}
              onChange={handleChange}
              className={selectBase}
            >
              <option value="" disabled>
                Select…
              </option>
              {ROLE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#5A6472]"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="timeline"
            className="text-sm font-medium text-[#0B1F3A]"
          >
            Timeline
          </Label>
          <div className="relative">
            <select
              id="timeline"
              name="timeline"
              value={form.timeline}
              onChange={handleChange}
              className={selectBase}
            >
              <option value="" disabled>
                Select…
              </option>
              {TIMELINE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#5A6472]"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Services Needed */}
      <div className="flex flex-col gap-2 mb-5">
        <p className="text-sm font-medium text-[#0B1F3A]">Services Needed</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {SERVICE_OPTIONS.map((service) => {
            const checked = form.services.includes(service);
            const id = `service-${service.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;
            return (
              <label
                key={service}
                htmlFor={id}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <span
                  className={[
                    "h-4 w-4 shrink-0 rounded border transition-colors flex items-center justify-center",
                    checked
                      ? "bg-[#159AD6] border-[#159AD6]"
                      : "border-[#D5CABE] bg-white group-hover:border-[#159AD6]",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  {checked && (
                    <svg
                      viewBox="0 0 10 8"
                      fill="none"
                      className="h-2.5 w-2.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 4l2.5 2.5L9 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
                <input
                  id={id}
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  onChange={() => handleServiceToggle(service)}
                />
                <span className="text-sm text-[#1F2A35]">{service}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5 mb-6">
        <Label
          htmlFor="message"
          className="text-sm font-medium text-[#0B1F3A]"
        >
          What needs done?
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about the property — what needs done, the approximate size, and anything we should know about the timeline."
          value={form.message}
          onChange={handleChange}
          className="border-[#D5CABE] focus-visible:border-[#159AD6] focus-visible:ring-[#159AD6]/30 min-h-[120px] resize-y"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#159AD6] hover:bg-[#0E7AAF] text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#159AD6] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
      >
        Send Estimate Request
      </button>

      <p className="mt-4 text-xs text-[#5A6472] text-center">
        We typically respond within one business day.
      </p>
    </form>
  );
}
