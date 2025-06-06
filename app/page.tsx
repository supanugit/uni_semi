import Link from "next/link";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="flex gap-6">
        {[
          { label: "IT", to: "it" },
          { label: "ET", to: "et" },
          { label: "BST", to: "bt" },
        ].map((e, i) => (
          <Link key={i} href={e.to}>
            <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-2xl shadow-md hover:bg-indigo-600 hover:text-white transition-all duration-300 ease-in-out active:scale-95">
              {e.label}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
