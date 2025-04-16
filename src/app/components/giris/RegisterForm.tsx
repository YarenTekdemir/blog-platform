"use client";

import { useRouter } from "next/navigation"; 
import React, { useState } from "react";
import { useAuth } from "./AuthContext";

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const { register } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) return alert("Şifreler eşleşmiyor");
  
    console.log("Kayıt işlemi başlıyor..."); // 👈 ekle bunu
    await register({ username, email, password });
    router.push("/anasayfa");
  };
  
  

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="username" className="sr-only">
            Kullanıcı Adı
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-user text-gray-400"></i>
            </div>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              placeholder="Kullanıcı Adı"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
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
              className="block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
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
              autoComplete="new-password"
              required
              className="block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="confirm-password" className="sr-only">
            Şifre Tekrar
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-lock text-gray-400"></i>
            </div>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="new-password"
              required
              className="block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              placeholder="Şifre Tekrar"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <input
          id="agree-terms"
          name="agree-terms"
          type="checkbox"
          className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
          checked={agreeTerms}
          onChange={(e) => setAgreeTerms(e.target.checked)}
          required
        />
        <label htmlFor="agree-terms" className="ml-2 text-sm text-gray-900">
          Kullanım şartlarını ve gizlilik politikasını kabul ediyorum
        </label>
      </div>
      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <i className="fas fa-user-plus text-pink-500 group-hover:text-pink-400"></i>
          </span>
          Kayıt Ol
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
