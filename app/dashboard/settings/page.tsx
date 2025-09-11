import { SignOutButton, UserProfile } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  p-6">
           {/* ✅ Logout button fixed at top right */}
      <div className="absolute top-6 right-24">
        <SignOutButton>
          <button className="px-6 py-2 bg-cyan-400 hover:bg-cyan-300 text-white rounded-lg shadow-md transition cursor-pointer">
            Logout
          </button>
        </SignOutButton>
      </div>
      <div className="w-full max-w-5xl">
        <UserProfile
          routing="hash"
          appearance={{
            variables: {
              colorPrimary: "#06b6d4",
              colorBackground: "#ecfeff",
              colorText: "#0f172a",
              borderRadius: "18px",
              fontFamily: "Inter, sans-serif",
            },
            elements: {
              // Outer wrapper
              rootBox:
                "bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden",

              // SIDEBAR (correct target!)
              profileSection__navigation:
                "bg-gradient-to-b from-cyan-600 to-cyan-500 text-white border-r border-cyan-700 shadow-md p-4",

              // Sidebar items
              profileSection__navigationItem:
                "text-white/90 hover:text-white hover:bg-cyan-700/40 rounded-lg px-3 py-2 transition",

              // Main content
              card:
                "bg-gradient-to-br from-cyan-50 via-white to-cyan-100 rounded-xl shadow-lg p-6 border border-cyan-100",

              headerTitle: "text-2xl font-semibold text-cyan-700",
              headerSubtitle: "text-sm text-gray-600",

              button:
                "bg-cyan-500 px-3 hover:bg-cyan-600 text-white font-medium rounded-lg shadow-md transition",

              formFieldInput:
                "bg-white border border-cyan-200 focus:ring-2 focus:ring-cyan-400 rounded-lg",
            },
          }}
        />
      </div>
    </div>
  );
};

export default page;
