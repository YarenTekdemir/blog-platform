"use client";

import React, { useState } from "react";
import { useAuth } from "../giris/AuthContext";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(email, password);
    router.push("/anasayfa"); 
  };
  
  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      {/* E-posta ve şifre input alanları */}
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">
            E-posta Adresi
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-envelope text-gray-400"></i>
            </div>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              placeholder="E-posta Adresi"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Şifre
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-lock text-gray-400"></i>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* Diğer form elemanları */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="remember-me" className="ml-2 text-sm text-gray-900">
            Beni hatırla
          </label>
        </div>
        <div className="text-sm">
          <a href="#" className="font-medium text-pink-600 hover:text-pink-500">
            Şifreni mi unuttun?
          </a>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 cursor-pointer"
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <i className="fas fa-sign-in-alt text-pink-500 group-hover:text-pink-400"></i>
          </span>
          Giriş Yap
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
