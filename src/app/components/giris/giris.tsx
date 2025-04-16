"use client";

import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
const giris: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">BlogYaren</h2>
            <p className="mt-2 text-sm text-gray-600"> 
              Modern blog platformuna hoş geldiniz
            </p>
          </div>
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setActiveTab("login")}
              className={`${
              activeTab === "login" ? "bg-pink-500 text-white" : "text-pink-500"
              } px-4 py-2 rounded-l-md cursor-pointer`}
            >
              Giriş Yap
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`${
                activeTab === "register" ? "bg-pink-500 text-white" : "text-pink-500"
              } px-4 py-2 rounded-r-md cursor-pointer`}
            >
              Kayıt Ol
            </button>
          </div>
          {activeTab === "login" ? (
            <LoginForm />
          ) : (
            <RegisterForm />
          )}
        </div>
      </div>
    </div>
  );
}
export default giris;
