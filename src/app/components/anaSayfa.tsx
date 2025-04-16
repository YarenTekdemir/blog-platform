"use client";

// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
const anaSayfa: React.FC = () => {
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  // Kullanıcı bilgileri
  const user = {
    name: "Ahmet Yılmaz",
    username: "ahmetyilmaz",
    avatar:
      "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20Turkish%20man%20with%20short%20dark%20hair%20and%20friendly%20smile%2C%20high%20quality%20professional%20headshot%20with%20neutral%20background%2C%20soft%20lighting%2C%20warm%20tones%2C%20realistic&width=100&height=100&seq=user1&orientation=squarish",
    bio: "Blog yazarı ve teknoloji meraklısı. İstanbul'da yaşıyorum ve yazılım geliştirme üzerine çalışıyorum.",
    joinDate: "Nisan 2023",
    blogCount: 24,
    followers: 156,
  };
  // Blog yazıları
  const blogPosts = [
    {
      id: 1,
      title: "React Hooks ile Modern Web Uygulamaları Geliştirme",
      date: "15 Nisan 2025",
      summary:
        "Bu yazıda React Hooks'un temel kullanımını ve modern web uygulamalarında nasıl faydalanabileceğimizi anlatıyorum.",
      likes: 45,
      comments: 12,
      tags: ["React", "JavaScript", "Web Geliştirme"],
    },
    {
      id: 2,
      title: "TypeScript ile Tip Güvenli Kodlama",
      date: "10 Nisan 2025",
      summary:
        "TypeScript kullanarak daha güvenli ve hatasız kod yazmanın yollarını keşfedin. Bu makalede temel kavramları ve pratik örnekleri bulabilirsiniz.",
      likes: 38,
      comments: 8,
      tags: ["TypeScript", "JavaScript", "Programlama"],
    },
    {
      id: 3,
      title: "Tailwind CSS ile Hızlı UI Geliştirme",
      date: "5 Nisan 2025",
      summary:
        "Tailwind CSS kullanarak nasıl hızlı ve etkili bir şekilde modern kullanıcı arayüzleri tasarlayabileceğinizi öğrenin.",
      likes: 62,
      comments: 15,
      tags: ["CSS", "UI Tasarım", "Web Geliştirme"],
    },
    {
      id: 4,
      title: "Node.js ve Express ile RESTful API Oluşturma",
      date: "1 Nisan 2025",
      summary:
        "Backend geliştirme için Node.js ve Express kullanarak nasıl RESTful API oluşturabileceğinizi adım adım anlatıyorum.",
      likes: 29,
      comments: 7,
      tags: ["Node.js", "API", "Backend"],
    },
  ];
  // Popüler blog yazıları
  const popularPosts = [
    {
      id: 101,
      title: "Yapay Zeka ve Geleceğimiz",
      views: 1245,
      author: "Mehmet Kaya",
    },
    {
      id: 102,
      title: "Blockchain Teknolojisi Nedir?",
      views: 982,
      author: "Zeynep Demir",
    },
    {
      id: 103,
      title: "Uzaktan Çalışmanın Püf Noktaları",
      views: 876,
      author: "Ali Yıldız",
    },
    {
      id: 104,
      title: "Siber Güvenlik İçin 10 Altın Kural",
      views: 754,
      author: "Ayşe Çelik",
    },
    {
      id: 105,
      title: "Dijital Pazarlamanın Temelleri",
      views: 698,
      author: "Emre Şahin",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigasyon Çubuğu */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-500">BlogTürk</h1>
            </div>
            {/* Ana Menü */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-blue-500 font-medium">
                Ana Sayfa
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 font-medium"
              >
                Bloglarım
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 font-medium"
              >
                Keşfet
              </a>
              <a
                href="https://readdy.ai/home/c62f60e4-5db6-46fb-9eb0-56e62c721e68/c3fb20ba-ccb4-4c8c-8db8-c2d4ef2f19ba"
                data-readdy="true"
                className="text-gray-600 hover:text-blue-500 font-medium"
              >
                Orijinal Sayfa
              </a>
            </nav>
            {/* Kullanıcı Menüsü */}
            <div className="flex items-center">
              <div className="relative">
                <button
                  className="flex items-center space-x-2 focus:outline-none cursor-pointer"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="hidden md:block text-sm font-medium text-gray-700">
                    {user.name}
                  </span>
                  <i className="fas fa-chevron-down text-xs text-gray-500"></i>
                </button>
                {/* Dropdown Menü */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                    <a
                      href="https://readdy.ai/home/c62f60e4-5db6-46fb-9eb0-56e62c721e68/dcea794f-4e1a-4bc4-97f5-5bf0c92cdb3d"
                      data-readdy="true"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <i className="fas fa-user mr-2"></i> Profilim
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <i className="fas fa-cog mr-2"></i> Ayarlar
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <i className="fas fa-bell mr-2"></i> Bildirimler
                    </a>
                    <div className="border-t border-gray-100 my-1"></div>
                    <a
                      href="https://readdy.ai/home/c62f60e4-5db6-46fb-9eb0-56e62c721e68/c3fb20ba-ccb4-4c8c-8db8-c2d4ef2f19ba"
                      data-readdy="true"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <i className="fas fa-sign-out-alt mr-2"></i> Çıkış Yap
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Ana İçerik */}
      <main className="flex-grow py-8 min-h-[1024px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sol Sütun - Ana İçerik */}
            <div className="w-full md:w-2/3">
              {/* Yeni Blog Yazısı Butonu */}
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Bloglarım</h2>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 flex items-center !rounded-button whitespace-nowrap cursor-pointer"
                  onClick={() => setShowNewPostModal(true)}
                >
                  <i className="fas fa-plus mr-2"></i>
                  Yeni Blog Yazısı
                </button>
              </div>
              {/* Blog Yazıları Listesi */}
              <div className="space-y-6">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-500 cursor-pointer">
                          {post.title}
                        </h3>
                        <div className="flex space-x-2">
                          <button className="text-gray-400 hover:text-blue-500 cursor-pointer">
                            <i className="fas fa-edit"></i>
                          </button>
                          <button className="text-gray-400 hover:text-red-500 cursor-pointer">
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                      <p className="text-gray-600 mb-4">{post.summary}</p>
                      {/* Etiketler */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* Etkileşim */}
                      <div className="flex items-center text-gray-500 text-sm">
                        <div className="flex items-center mr-4">
                          <i className="fas fa-heart text-red-400 mr-1"></i>
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center">
                          <i className="fas fa-comment text-blue-400 mr-1"></i>
                          <span>{post.comments}</span>
                        </div>
                        <div className="ml-auto">
                          <button className="text-blue-500 hover:text-blue-700 font-medium cursor-pointer">
                            Devamını Oku
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Sayfalama */}
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-500 hover:bg-gray-50 cursor-pointer">
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button className="px-3 py-1 rounded-md bg-blue-500 text-white font-medium cursor-pointer">
                    1
                  </button>
                  <button className="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 cursor-pointer">
                    2
                  </button>
                  <button className="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 cursor-pointer">
                    3
                  </button>
                  <span className="px-2 text-gray-500">...</span>
                  <button className="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 cursor-pointer">
                    8
                  </button>
                  <button className="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-500 hover:bg-gray-50 cursor-pointer">
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </nav>
              </div>
            </div>
            {/* Sağ Sütun - Yan Panel */}
            <div className="w-full md:w-1/3 space-y-6">
              {/* Kullanıcı Profil Kartı */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-24"></div>
                <div className="px-6 pb-6">
                  <div className="flex justify-center">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-20 w-20 rounded-full border-4 border-white -mt-10 object-cover"
                    />
                  </div>
                  <div className="text-center mt-3">
                    <h3 className="text-xl font-bold text-gray-800">
                      {user.name}
                    </h3>
                    <p className="text-gray-500 text-sm">@{user.username}</p>
                    <p className="mt-2 text-gray-600">{user.bio}</p>
                  </div>
                  <div className="mt-4 flex justify-center space-x-8">
                    <div className="text-center">
                      <p className="text-xl font-bold text-gray-800">
                        {user.blogCount}
                      </p>
                      <p className="text-gray-500 text-sm">Blog</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-gray-800">
                        {user.followers}
                      </p>
                      <p className="text-gray-500 text-sm">Takipçi</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer"
                      onClick={() => setShowProfileModal(true)}
                    >
                      <i className="fas fa-user-edit mr-2"></i>
                      Profili Düzenle
                    </button>
                  </div>
                </div>
              </div>
              {/* Popüler Blog Yazıları */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    En Çok Okunanlar
                  </h3>
                  <div className="space-y-4">
                    {popularPosts.map((post) => (
                      <div
                        key={post.id}
                        className="flex items-start space-x-3 cursor-pointer group"
                      >
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <h4 className="text-gray-800 group-hover:text-blue-500 font-medium">
                            {post.title}
                          </h4>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <span>{post.author}</span>
                            <span className="mx-2">•</span>
                            <span>{post.views} okuma</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Etiket Bulutu */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    Popüler Etiketler
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full cursor-pointer hover:bg-blue-200">
                      JavaScript
                    </span>
                    <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full cursor-pointer hover:bg-green-200">
                      React
                    </span>
                    <span className="bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full cursor-pointer hover:bg-purple-200">
                      Web Geliştirme
                    </span>
                    <span className="bg-yellow-100 text-yellow-700 text-sm font-medium px-3 py-1 rounded-full cursor-pointer hover:bg-yellow-200">
                      UI/UX
                    </span>
                    <span className="bg-red-100 text-red-700 text-sm font-medium px-3 py-1 rounded-full cursor-pointer hover:bg-red-200">
                      TypeScript
                    </span>
                    <span className="bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full cursor-pointer hover:bg-indigo-200">
                      Node.js
                    </span>
                    <span className="bg-pink-100 text-pink-700 text-sm font-medium px-3 py-1 rounded-full cursor-pointer hover:bg-pink-200">
                      CSS
                    </span>
                    <span className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200">
                      API
                    </span>
                  </div>
                </div>
              </div>
              {/* Takvim */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    Blog Takvimi
                  </h3>
                  <div className="text-center">
                    <div className="flex justify-between items-center mb-4">
                      <button className="text-gray-500 hover:text-blue-500 cursor-pointer">
                        <i className="fas fa-chevron-left"></i>
                      </button>
                      <h4 className="font-medium">Nisan 2025</h4>
                      <button className="text-gray-500 hover:text-blue-500 cursor-pointer">
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-sm">
                      <div className="text-gray-500 font-medium">Pt</div>
                      <div className="text-gray-500 font-medium">Sa</div>
                      <div className="text-gray-500 font-medium">Ça</div>
                      <div className="text-gray-500 font-medium">Pe</div>
                      <div className="text-gray-500 font-medium">Cu</div>
                      <div className="text-gray-500 font-medium">Ct</div>
                      <div className="text-gray-500 font-medium">Pz</div>
                      <div className="text-gray-400">29</div>
                      <div className="text-gray-400">30</div>
                      <div className="text-gray-400">31</div>
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div className="bg-blue-100 text-blue-700 rounded-full">
                        6
                      </div>
                      <div>7</div>
                      <div>8</div>
                      <div>9</div>
                      <div className="bg-blue-100 text-blue-700 rounded-full">
                        10
                      </div>
                      <div>11</div>
                      <div>12</div>
                      <div>13</div>
                      <div>14</div>
                      <div className="bg-blue-500 text-white rounded-full">
                        15
                      </div>
                      <div>16</div>
                      <div>17</div>
                      <div>18</div>
                      <div>19</div>
                      <div>20</div>
                      <div>21</div>
                      <div>22</div>
                      <div>23</div>
                      <div>24</div>
                      <div>25</div>
                      <div>26</div>
                      <div>27</div>
                      <div>28</div>
                      <div>29</div>
                      <div>30</div>
                      <div className="text-gray-400">1</div>
                      <div className="text-gray-400">2</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold text-blue-500">BlogTürk</h2>
              <p className="text-gray-600 text-sm mt-1">
                © 2025 BlogTürk. Tüm hakları saklıdır.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 cursor-pointer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 cursor-pointer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 cursor-pointer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 cursor-pointer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Hakkımızda
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-blue-500"
                  >
                    Şirket
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-blue-500"
                  >
                    Kariyer
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-blue-500"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Destek
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-blue-500"
                  >
                    Yardım Merkezi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-blue-500"
                  >
                    Güvenlik
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-blue-500"
                  >
                    İletişim
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Yasal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-blue-500"
                  >
                    Gizlilik Politikası
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-blue-500"
                  >
                    Kullanım Şartları
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-blue-500"
                  >
                    Çerez Politikası
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Bülten
              </h3>
              <p className="mt-4 text-base text-gray-600">
                En son blog yazılarımız ve güncellemelerimiz için abone olun.
              </p>
              <form className="mt-4">
                <div className="flex">
                  <input
                    type="email"
                    className="min-w-0 flex-1 anaSayfaearance-none border border-gray-300 py-2 px-4 bg-white text-gray-900 placeholder-gray-500 rounded-l-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="E-posta adresiniz"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    Abone Ol
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-500">
              &copy; 2025 BlogTürk, Inc. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 cursor-pointer"
              >
                <i className="fab fa-cc-visa"></i>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 cursor-pointer"
              >
                <i className="fab fa-cc-mastercard"></i>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 cursor-pointer"
              >
                <i className="fab fa-cc-paypal"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* Yeni Blog Yazısı Modal */}
      {showNewPostModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                      Yeni Blog Yazısı
                    </h3>
                    <div className="mt-2 space-y-4">
                      <div>
                        <label
                          htmlFor="title"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Başlık
                        </label>
                        <input
                          type="text"
                          id="title"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          placeholder="Blog başlığını girin"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="tags"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Etiketler
                        </label>
                        <input
                          type="text"
                          id="tags"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          placeholder="Etiketleri virgülle ayırın"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="content"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          İçerik
                        </label>
                        <textarea
                          id="content"
                          rows={6}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          placeholder="Blog içeriğini yazın..."
                        ></textarea>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="draft"
                          type="checkbox"
                          className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="draft"
                          className="ml-2 block text-sm text-gray-700"
                        >
                          Taslak olarak kaydet
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Yayınla
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm !rounded-button whitespace-nowrap cursor-pointer"
                  onClick={() => setShowNewPostModal(false)}
                >
                  İptal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Profil Düzenleme Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                      Profil Düzenle
                    </h3>
                    <div className="mt-2 space-y-4">
                      <div className="flex justify-center mb-4">
                        <div className="relative">
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="h-24 w-24 rounded-full object-cover"
                          />
                          <button className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 shadow-md hover:bg-blue-600 cursor-pointer">
                            <i className="fas fa-camera"></i>
                          </button>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="fullname"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Ad Soyad
                        </label>
                        <input
                          type="text"
                          id="fullname"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          defaultValue={user.name}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Kullanıcı Adı
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">@</span>
                          </div>
                          <input
                            type="text"
                            id="username"
                            className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            defaultValue={user.username}
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="bio"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Biyografi
                        </label>
                        <textarea
                          id="bio"
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          defaultValue={user.bio}
                        ></textarea>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          E-posta
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          defaultValue="ahmet.yilmaz@example.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Kaydet
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm !rounded-button whitespace-nowrap cursor-pointer"
                  onClick={() => setShowProfileModal(false)}
                >
                  İptal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Mobil Menü */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-10">
        <div className="flex justify-around">
          <a href="#" className="flex flex-col items-center py-3 text-blue-500">
            <i className="fas fa-home text-lg"></i>
            <span className="text-xs mt-1">Ana Sayfa</span>
          </a>
          <a href="#" className="flex flex-col items-center py-3 text-gray-500">
            <i className="fas fa-file-alt text-lg"></i>
            <span className="text-xs mt-1">Bloglarım</span>
          </a>
          <a href="#" className="flex flex-col items-center py-3 text-gray-500">
            <i className="fas fa-compass text-lg"></i>
            <span className="text-xs mt-1">Keşfet</span>
          </a>
          <a
            href="https://readdy.ai/home/c62f60e4-5db6-46fb-9eb0-56e62c721e68/c3fb20ba-ccb4-4c8c-8db8-c2d4ef2f19ba"
            data-readdy="true"
            className="flex flex-col items-center py-3 text-gray-500"
          >
            <i className="fas fa-sign-out-alt text-lg"></i>
            <span className="text-xs mt-1">Çıkış</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default anaSayfa;
