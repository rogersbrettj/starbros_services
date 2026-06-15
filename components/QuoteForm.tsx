"use client";

import { useForm, ValidationError } from "@formspree/react";
import { siteConfig } from "@/config/site";

type QuoteFormFields = {
  name: string;
  email: string;
  phone: string;
  service_address: string;
  message: string;
  _gotcha: string;
  business: string;
  lead_source: string;
};

export default function QuoteForm() {
  const [state, handleSubmit] = useForm<QuoteFormFields>(
    siteConfig.formspreeFormId,
  );
  const fieldHasError = (field: keyof QuoteFormFields) =>
    Boolean(state.errors?.getFieldErrors(field).length);

  if (state.succeeded) {
    return (
      <div
        className="grid min-h-[420px] place-items-center rounded-[2rem] border border-brand-100 bg-brand-50 p-8 text-center"
        role="status"
      >
        <div>
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-500 text-3xl font-black text-white">
            ✓
          </div>
          <h2 className="mt-6 text-2xl font-black text-black">
            Thanks! We received your quote request.
          </h2>
          <p className="mt-3 max-w-sm leading-7 text-slate-600">
            We will reach out soon to learn more about your concrete cleaning
            project.
          </p>
        </div>
      </div>
    );
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-base text-black outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-white p-6 shadow-soft sm:p-9"
    >
      <div className="mb-7">
        <span className="eyebrow">Free, no-pressure quote</span>
        <h2 className="mt-3 text-2xl font-black tracking-tight text-black sm:text-3xl">
          Tell us about your concrete.
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Required fields are marked with an asterisk.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label htmlFor="name" className="text-sm font-bold text-black">
          Name <span aria-hidden="true">*</span>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={fieldHasError("name")}
            aria-describedby={fieldHasError("name") ? "name-error" : undefined}
            className={inputClass}
            placeholder="Your name"
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            id="name-error"
            className="mt-2 text-xs font-semibold text-red-700"
          />
        </label>
        <label htmlFor="email" className="text-sm font-bold text-black">
          Email <span aria-hidden="true">*</span>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={fieldHasError("email")}
            aria-describedby={
              fieldHasError("email") ? "email-error" : undefined
            }
            className={inputClass}
            placeholder="you@example.com"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            id="email-error"
            className="mt-2 text-xs font-semibold text-red-700"
          />
        </label>
        <label htmlFor="phone" className="text-sm font-bold text-black">
          Phone number{" "}
          <span className="font-normal text-slate-500">(optional)</span>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={fieldHasError("phone")}
            aria-describedby={
              fieldHasError("phone") ? "phone-error" : undefined
            }
            className={inputClass}
            placeholder="(555) 555-5555"
          />
          <ValidationError
            prefix="Phone"
            field="phone"
            errors={state.errors}
            id="phone-error"
            className="mt-2 text-xs font-semibold text-red-700"
          />
        </label>
        <label htmlFor="address" className="text-sm font-bold text-black">
          Service address <span aria-hidden="true">*</span>
          <input
            id="address"
            name="service_address"
            type="text"
            autoComplete="street-address"
            required
            aria-invalid={fieldHasError("service_address")}
            aria-describedby={
              fieldHasError("service_address") ? "address-error" : undefined
            }
            className={inputClass}
            placeholder="Street, city, ZIP"
          />
          <ValidationError
            prefix="Service address"
            field="service_address"
            errors={state.errors}
            id="address-error"
            className="mt-2 text-xs font-semibold text-red-700"
          />
        </label>
      </div>
      <label htmlFor="message" className="mt-5 block text-sm font-bold text-black">
        Project details <span aria-hidden="true">*</span>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          aria-invalid={fieldHasError("message")}
          aria-describedby={
            fieldHasError("message") ? "message-error" : undefined
          }
          className={inputClass}
          placeholder="Driveway, sidewalk, patio, approximate size, visible buildup..."
        />
        <ValidationError
          prefix="Project details"
          field="message"
          errors={state.errors}
          id="message-error"
          className="mt-2 text-xs font-semibold text-red-700"
        />
      </label>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="_gotcha">Leave this field empty</label>
        <input
          id="_gotcha"
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <input type="hidden" name="business" value={siteConfig.name} />
      <input type="hidden" name="lead_source" value="Website quote form" />
      <button
        type="submit"
        disabled={state.submitting}
        className="btn-primary mt-6 w-full disabled:cursor-wait disabled:opacity-60"
      >
        {state.submitting
          ? "Sending Your Request..."
          : "Get Your Free Quote Today"}
      </button>
      {state.errors && (
        <div
          className="mt-4 rounded-xl border border-brand-200 bg-brand-50 p-4 text-sm font-semibold leading-6 text-slate-800"
          role="alert"
        >
          <ValidationError errors={state.errors} />
          <p className="mt-2">
            Please try again or{" "}
            <a
              className="font-black text-brand-700 underline"
              href={siteConfig.textHref}
            >
              text {siteConfig.phoneDisplay}
            </a>
            .
          </p>
        </div>
      )}
      <p className="mt-4 text-center text-xs leading-5 text-slate-500">
        No spam. Just a straightforward quote from a local team.
      </p>
    </form>
  );
}
