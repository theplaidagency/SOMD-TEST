"use client";

import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

export default function FaqItem({ blok }: { blok: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div {...storyblokEditable(blok)} className="border-t border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-ubuntu text-lg font-semibold text-somd-dark pr-4 group-hover:text-somd-red transition-colors">
          {blok.question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-transform ${
            isOpen ? "rotate-45 bg-somd-red border-somd-red" : ""
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className={isOpen ? "text-white" : "text-somd-dark"}
          >
            <path
              d="M7 1v12M1 7h12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="font-inter text-gray-600 leading-relaxed">{blok.answer}</p>
      </div>
    </div>
  );
}
