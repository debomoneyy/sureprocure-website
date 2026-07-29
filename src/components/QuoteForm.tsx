"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { services } from "@/lib/services";
import Button from "./Button";

const inputClasses =
  "w-full rounded-[var(--radius-default)] border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none";

const labelClasses = "text-sm font-medium text-[var(--color-text-primary)]";

type FormState = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  category: string;
  projectDetails: string;
  engagementModel: string;
  logistics: string;
  timeline: string;
  budget: string;
  contactMethod: string;
};

const initialState: FormState = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  category: "",
  projectDetails: "",
  engagementModel: "",
  logistics: "",
  timeline: "",
  budget: "",
  contactMethod: "",
};

export default function QuoteForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("category") ?? "";

  const [form, setForm] = useState<FormState>({
    ...initialState,
    category: preselected,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.companyName.trim()) next.companyName = "Enter your company name.";
    if (!form.contactName.trim()) next.contactName = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.phone.trim()) next.phone = "Enter a phone number.";
    if (!form.category) next.category = "Select a category.";
    if (!form.projectDetails.trim()) next.projectDetails = "Describe your project or requirement.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // Submission wiring (email delivery via a transactional email service)
    // is a backend integration step — see Phase 10 development plan.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-8 text-center">
        <h2 className="text-xl font-semibold text-[var(--color-primary)]">
          Request Received
        </h2>
        <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
          Thank you, {form.contactName || "there"}. We&apos;ve received your
          request and will respond within 1-2 business days with a
          quotation or a request for more detail.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="companyName">Company Name</label>
          <input
            id="companyName"
            className={inputClasses}
            value={form.companyName}
            onChange={(e) => update("companyName", e.target.value)}
          />
          {errors.companyName && <p className="mt-1 text-xs text-[var(--color-error)]">{errors.companyName}</p>}
        </div>

        <div>
          <label className={labelClasses} htmlFor="contactName">Contact Name</label>
          <input
            id="contactName"
            className={inputClasses}
            value={form.contactName}
            onChange={(e) => update("contactName", e.target.value)}
          />
          {errors.contactName && <p className="mt-1 text-xs text-[var(--color-error)]">{errors.contactName}</p>}
        </div>

        <div>
          <label className={labelClasses} htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className={inputClasses}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
          {errors.email && <p className="mt-1 text-xs text-[var(--color-error)]">{errors.email}</p>}
        </div>

        <div>
          <label className={labelClasses} htmlFor="phone">Phone</label>
          <input
            id="phone"
            className={inputClasses}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
          {errors.phone && <p className="mt-1 text-xs text-[var(--color-error)]">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor="category">Service Category</label>
        <select
          id="category"
          className={inputClasses}
          value={form.category}
          onChange={(e) => update("category", e.target.value)}
        >
          <option value="">Select a category</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>{s.name}</option>
          ))}
        </select>
        {errors.category && <p className="mt-1 text-xs text-[var(--color-error)]">{errors.category}</p>}
      </div>

      <div>
        <label className={labelClasses} htmlFor="projectDetails">Project Details</label>
        <textarea
          id="projectDetails"
          rows={5}
          className={inputClasses}
          value={form.projectDetails}
          onChange={(e) => update("projectDetails", e.target.value)}
        />
        {errors.projectDetails && <p className="mt-1 text-xs text-[var(--color-error)]">{errors.projectDetails}</p>}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="engagementModel">Preferred Engagement Model</label>
          <select
            id="engagementModel"
            className={inputClasses}
            value={form.engagementModel}
            onChange={(e) => update("engagementModel", e.target.value)}
          >
            <option value="">No preference / not sure</option>
            <option value="procurement-only">Procurement Only</option>
            <option value="procurement-installation">Procurement + Installation</option>
          </select>
        </div>

        <div>
          <label className={labelClasses} htmlFor="logistics">Preferred Logistics</label>
          <select
            id="logistics"
            className={inputClasses}
            value={form.logistics}
            onChange={(e) => update("logistics", e.target.value)}
          >
            <option value="">No preference / not sure</option>
            <option value="air-freight">Air Freight</option>
            <option value="standard-shipment">Standard Shipment</option>
          </select>
        </div>

        <div>
          <label className={labelClasses} htmlFor="timeline">Timeline</label>
          <select
            id="timeline"
            className={inputClasses}
            value={form.timeline}
            onChange={(e) => update("timeline", e.target.value)}
          >
            <option value="">Select a timeline</option>
            <option value="urgent">Urgent</option>
            <option value="1-3-months">1-3 months</option>
            <option value="3-6-months">3-6 months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>

        <div>
          <label className={labelClasses} htmlFor="budget">Budget Range (optional)</label>
          <select
            id="budget"
            className={inputClasses}
            value={form.budget}
            onChange={(e) => update("budget", e.target.value)}
          >
            <option value="">Prefer not to say</option>
            <option value="under-1m">Under ₦1,000,000</option>
            <option value="1m-5m">₦1,000,000 - ₦5,000,000</option>
            <option value="5m-20m">₦5,000,000 - ₦20,000,000</option>
            <option value="20m-plus">₦20,000,000+</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor="file">Attachments (spec sheets, drawings, BOQs)</label>
        <input id="file" type="file" className={`${inputClasses} py-2`} multiple />
      </div>

      <div>
        <label className={labelClasses} htmlFor="contactMethod">Preferred Contact Method</label>
        <select
          id="contactMethod"
          className={inputClasses}
          value={form.contactMethod}
          onChange={(e) => update("contactMethod", e.target.value)}
        >
          <option value="">Select a method</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="whatsapp">WhatsApp</option>
        </select>
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        Submit Request
      </Button>
    </form>
  );
}
