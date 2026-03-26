import { storyblokEditable } from "@storyblok/react/rsc";

export default function ContactSection({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)} className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left: Contact Info */}
        <div>
          {blok.heading && (
            <h2 className="font-ubuntu text-3xl md:text-4xl font-bold text-somd-dark mb-4">
              {blok.heading}
            </h2>
          )}
          {blok.description && (
            <p className="font-inter text-gray-600 mb-8 leading-relaxed">
              {blok.description}
            </p>
          )}
          <div className="space-y-4 font-inter text-somd-dark">
            {blok.email && (
              <div>
                <span className="font-semibold text-sm uppercase tracking-wide text-gray-500 block mb-1">Email</span>
                <a href={`mailto:${blok.email}`} className="text-somd-red hover:underline">
                  {blok.email}
                </a>
              </div>
            )}
            {blok.address && (
              <div>
                <span className="font-semibold text-sm uppercase tracking-wide text-gray-500 block mb-1">Address</span>
                <p className="whitespace-pre-line">{blok.address}</p>
              </div>
            )}
            {blok.toll_free && (
              <div>
                <span className="font-semibold text-sm uppercase tracking-wide text-gray-500 block mb-1">Toll Free</span>
                <a href={`tel:${blok.toll_free}`} className="hover:text-somd-red transition-colors">
                  {blok.toll_free}
                </a>
              </div>
            )}
            {blok.phone && (
              <div>
                <span className="font-semibold text-sm uppercase tracking-wide text-gray-500 block mb-1">Phone</span>
                <a href={`tel:${blok.phone}`} className="hover:text-somd-red transition-colors">
                  {blok.phone}
                </a>
              </div>
            )}
            {blok.fax && (
              <div>
                <span className="font-semibold text-sm uppercase tracking-wide text-gray-500 block mb-1">Fax</span>
                <span>{blok.fax}</span>
              </div>
            )}
            {blok.tty && (
              <div>
                <span className="font-semibold text-sm uppercase tracking-wide text-gray-500 block mb-1">TTY</span>
                <span>{blok.tty}</span>
              </div>
            )}
          </div>
        </div>

        {/* Right: Image + Form */}
        <div>
          {blok.image?.filename && (
            <img
              src={blok.image.filename}
              alt={blok.heading || "Contact"}
              className="w-full rounded-lg mb-8 object-cover max-h-64"
            />
          )}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-inter text-sm font-medium text-gray-700 block mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded px-4 py-2 font-inter text-sm focus:outline-none focus:ring-2 focus:ring-somd-red focus:border-transparent"
                />
              </div>
              <div>
                <label className="font-inter text-sm font-medium text-gray-700 block mb-1">Organization</label>
                <input
                  type="text"
                  placeholder="Your organization"
                  className="w-full border border-gray-300 rounded px-4 py-2 font-inter text-sm focus:outline-none focus:ring-2 focus:ring-somd-red focus:border-transparent"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-inter text-sm font-medium text-gray-700 block mb-1">Phone</label>
                <input
                  type="tel"
                  placeholder="Your phone"
                  className="w-full border border-gray-300 rounded px-4 py-2 font-inter text-sm focus:outline-none focus:ring-2 focus:ring-somd-red focus:border-transparent"
                />
              </div>
              <div>
                <label className="font-inter text-sm font-medium text-gray-700 block mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border border-gray-300 rounded px-4 py-2 font-inter text-sm focus:outline-none focus:ring-2 focus:ring-somd-red focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="font-inter text-sm font-medium text-gray-700 block mb-1">Message</label>
              <textarea
                rows={4}
                placeholder="Your message"
                className="w-full border border-gray-300 rounded px-4 py-2 font-inter text-sm focus:outline-none focus:ring-2 focus:ring-somd-red focus:border-transparent resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-somd-red hover:bg-red-700 text-white font-inter font-semibold px-8 py-3 rounded transition-colors duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
