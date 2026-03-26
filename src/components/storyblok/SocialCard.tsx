import { storyblokEditable } from "@storyblok/react/rsc";

export default function SocialCard({ blok }: { blok: any }) {
  const links = blok.links
    ? blok.links.split("\n").filter((link: string) => link.trim())
    : [];

  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
    >
      {blok.platform_name && (
        <h3 className="font-ubuntu font-bold text-xl text-somd-dark mb-1">
          {blok.platform_name}
        </h3>
      )}
      {blok.handle && (
        <p className="font-inter text-sm text-gray-500 mb-3">{blok.handle}</p>
      )}
      {blok.description && (
        <p className="font-inter text-gray-600 text-sm leading-relaxed mb-4">
          {blok.description}
        </p>
      )}
      {links.length > 0 && (
        <ul className="space-y-1">
          {links.map((link: string, index: number) => (
            <li key={index}>
              <a
                href={link.trim()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-sm text-somd-red hover:underline break-all"
              >
                {link.trim()}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
