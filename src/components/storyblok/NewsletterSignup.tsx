import { storyblokEditable } from "@storyblok/react/rsc";

export default function NewsletterSignup({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)} className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        {blok.heading && (
          <h2 className="font-ubuntu text-3xl md:text-4xl font-bold text-somd-dark mb-8">
            {blok.heading}
          </h2>
        )}
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          action="#"
        >
          <input
            type="email"
            placeholder={blok.placeholder_text || "Enter your email"}
            className="flex-1 border border-gray-300 rounded px-4 py-3 font-inter text-sm focus:outline-none focus:ring-2 focus:ring-somd-red focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-somd-red hover:bg-red-700 text-white font-inter font-semibold px-8 py-3 rounded transition-colors duration-200 whitespace-nowrap"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
