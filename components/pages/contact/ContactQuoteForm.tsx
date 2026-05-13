"use client";

import type { FormEvent } from "react";
import { FaLock, FaPaperPlane } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import type { ContactCopy } from "./contact-copy";

type ServiceOption = { value: string; label: string };

type Props = {
  copy: ContactCopy;
  serviceOptions: ServiceOption[];
};

export default function ContactQuoteForm({ copy, serviceOptions }: Props) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form
      id="quote-form"
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
      noValidate
    >
      <div className="flex items-start gap-4">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#4B6F28] text-white shadow-md"
          aria-hidden
        >
          <FaPaperPlane className="h-5 w-5" />
        </span>
        <div>
          <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] sm:text-2xl">
            {copy.quoteTitle}
          </h2>
          <p className="mt-1 text-sm text-slate-600 sm:text-base">
            {copy.quoteSubtitle}
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-first-name" className="text-sm font-semibold text-[#1A1A1A]">
            {copy.firstName}
          </label>
          <input
            id="contact-first-name"
            name="firstName"
            type="text"
            autoComplete="given-name"
            placeholder="Jane"
            className="rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#1A1A1A] outline-none ring-[#4B6F28]/30 placeholder:text-slate-400 focus:border-[#4B6F28] focus:ring-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-last-name" className="text-sm font-semibold text-[#1A1A1A]">
            {copy.lastName}
          </label>
          <input
            id="contact-last-name"
            name="lastName"
            type="text"
            autoComplete="family-name"
            placeholder="Doe"
            className="rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#1A1A1A] outline-none ring-[#4B6F28]/30 placeholder:text-slate-400 focus:border-[#4B6F28] focus:ring-2"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className="text-sm font-semibold text-[#1A1A1A]">
            {copy.email}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#1A1A1A] outline-none ring-[#4B6F28]/30 placeholder:text-slate-400 focus:border-[#4B6F28] focus:ring-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-phone" className="text-sm font-semibold text-[#1A1A1A]">
            {copy.phone}
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(819) 555-0100"
            className="rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#1A1A1A] outline-none ring-[#4B6F28]/30 placeholder:text-slate-400 focus:border-[#4B6F28] focus:ring-2"
          />
        </div>
      </div>

      <fieldset className="flex flex-col gap-3 border-0 p-0">
        <legend className="text-sm font-semibold text-[#1A1A1A]">
          {copy.contactMethodLabel}
        </legend>
        <div className="flex flex-wrap gap-6">
          <label className="flex cursor-pointer items-center gap-2 text-sm text-[#1A1A1A]">
            <input
              type="radio"
              name="contactMethod"
              value="phone"
              defaultChecked
              className="h-4 w-4 border-[#E5E7EB] text-[#4B6F28] focus:ring-[#4B6F28]"
            />
            {copy.contactMethodPhone}
          </label>
          <label className="flex cursor-pointer items-center gap-2 text-sm text-[#1A1A1A]">
            <input
              type="radio"
              name="contactMethod"
              value="email"
              className="h-4 w-4 border-[#E5E7EB] text-[#4B6F28] focus:ring-[#4B6F28]"
            />
            {copy.contactMethodEmail}
          </label>
        </div>
      </fieldset>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-service" className="text-sm font-semibold text-[#1A1A1A]">
          {copy.serviceLabel}
        </label>
        <select
          id="contact-service"
          name="service"
          defaultValue=""
          className="rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#1A1A1A] outline-none ring-[#4B6F28]/30 focus:border-[#4B6F28] focus:ring-2"
        >
          <option value="" disabled>
            {copy.servicePlaceholder}
          </option>
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-details" className="text-sm font-semibold text-[#1A1A1A]">
          {copy.projectLabel}
        </label>
        <textarea
          id="contact-details"
          name="details"
          rows={5}
          placeholder={copy.projectPlaceholder}
          className="resize-y rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#1A1A1A] outline-none ring-[#4B6F28]/30 placeholder:text-slate-400 focus:border-[#4B6F28] focus:ring-2"
        />
      </div>

      <button
        type="submit"
        className={cn(
          "inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition hover:bg-[#3d5b22] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B6F28]",
          "bg-[#4B6F28]",
        )}
      >
        <FaPaperPlane className="h-4 w-4" aria-hidden />
        {copy.submit}
      </button>

      <p className="flex items-start gap-2 text-xs text-slate-500 sm:text-sm">
        <FaLock className="mt-0.5 h-4 w-4 shrink-0 text-[#4B6F28]" aria-hidden />
        <span>{copy.privacy}</span>
      </p>
    </form>
  );
}
