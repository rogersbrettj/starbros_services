"use client";

import { useState } from "react";

export function FAQAccordion({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-white px-5 shadow-card sm:px-8">
      {items.map((item, index) => (
        <div key={item.question}>
          <button
            type="button"
            className="flex w-full items-center justify-between gap-6 py-6 text-left text-base font-black text-black sm:text-lg"
            onClick={() => setOpen(open === index ? null : index)}
            aria-expanded={open === index}
            aria-controls={`faq-panel-${index}`}
            id={`faq-trigger-${index}`}
          >
            {item.question}
            <span
              className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-50 text-xl text-brand-700 transition ${
                open === index ? "rotate-45" : ""
              }`}
              aria-hidden="true"
            >
              +
            </span>
          </button>
          <div
            id={`faq-panel-${index}`}
            role="region"
            aria-labelledby={`faq-trigger-${index}`}
            hidden={open !== index}
          >
            <p className="max-w-3xl pb-6 pr-8 text-sm leading-7 text-slate-600 sm:text-base">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
