import { storyblokEditable } from "@storyblok/react/rsc";

export default function StatCard({ blok }: { blok: any }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-somd-gray rounded-2xl p-10 text-left relative overflow-hidden"
    >
      <div className={`absolute top-0 left-0 right-0 h-1 ${blok.highlight ? "bg-somd-red" : "bg-gray-300"}`} />
      <div className="text-somd-red mb-4">
        <img
          src={blok.icon?.filename || ""}
          alt=""
          className="w-8 h-8"
        />
      </div>
      <p className="font-ubuntu text-[64px] font-bold text-somd-black leading-none mb-2">
        {blok.number || "0"}
      </p>
      <p className="text-somd-black/70 font-medium text-base">
        {blok.label || "Label"}
      </p>
      <div className="w-8 h-0.5 bg-gray-300 mt-4" />
    </div>
  );
}
