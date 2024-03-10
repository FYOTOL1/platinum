import React, { useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  const [Search, setSearch] = useState("");
  const [IsLang, setIsLang] = useState(false);
  const [IsCoin, setIsCoin] = useState(false);
  const [IsAvatar, setIsAvatar] = useState(false);
  const [Coin, setCoin] = useState("");
  const [Lang, setLang] = useState("");

  const coins_type = [
    "SAR",
    "USD",
    "EG",
    "EUR",
    "OMR",
    "KWD",
    "BHD",
    "MAD",
    "TRY",
    "QAR",
    "AED",
  ];

  const ActiveCoin = () => {
    setIsCoin(!IsCoin);
    setIsLang(false);
    setIsAvatar(false);
  };
  const ActiveLang = () => {
    setIsLang(!IsLang);
    setIsCoin(false);
    setIsAvatar(false);
  };
  const ActiveAvatar = () => {
    setIsAvatar(!IsAvatar);
    setIsLang(false);
    setIsCoin(false);
  };

  return (
    <>
      <header className="lg:container mx-auto w-full sticky top-0 bg-white z-20">
        <div className="flex items-center justify-between flex-row-reverse w-full py-3 px-1 sm:px-2 overflow-x-scroll overflow-y-visible md:overflow-visible">
          {/* Logo */}
          <img
            className="w-24 sm:w-32 md:w-40 lg:w-56"
            src="/logo.svg"
            alt="Logo"
          />
          {/* Search Bar */}
          <div className="relative w-full min-w-[125px] max-w-[800px] h-[25px] sm:h-[35px] md:h-[45px] lg:h-[50px] sm:text-xs md:text-base">
            <label
              className="absolute right-2 md:right-6 top-[50%] translate-y-[-50%] text-[12px] sm:text-[14px]"
              htmlFor="search"
            >
              <i className="fa-solid fa-magnifying-glass fa-fw text-gray-400"></i>
            </label>
            <input
              id="search"
              onChange={(e) => setSearch(e.target.value)}
              value={Search}
              className="pe-6 md:pe-14 ps-[30px] sm:ps-14 md:ps-16 h-full w-full text-end text-sm rounded-full [box-shadow:_0_2px_4px_rgba(0,0,0,.04),_0_0_4px_rgba(0,0,0,.06)] outline-none"
              type="text"
              placeholder={`${
                window.innerWidth <= 640
                  ? "البحث"
                  : "البحث عن الفعالية او الفئة"
              }`}
            />
            {Search !== "" && (
              <label
                className="absolute left-1 sm:left-4 md:left-5 top-[50%] translate-y-[-55%] text-xs sm:text-sm md:text-base"
                htmlFor="search"
              >
                <button
                  onClick={() => setSearch("")}
                  className="text-blue-500 transition-all hover:text-blue-300"
                >
                  <p>مسح</p>
                </button>
              </label>
            )}
          </div>
          {/* options */}
          <div className="flex items-center sm:justify-between flex-row-reverse gap-2 sm:gap-4 md:gap-6 me-2 sm:me-4 md:me-6 lg:me-8 md:w-full">
            {/* Date */}
            <label
              className="hidden sm:block text-lg md:text-xl lg:text-2xl"
              htmlFor="date"
            >
              <i className="fa-regular fa-calendar"></i>
            </label>
            {/* Language */}
            <div className="Lang hidden sm:block">
              <button
                className={`relative flex items-baseline flex-row-reverse gap-1 text-[9px] sm:text-[12px] md:text-sm transition-all ${
                  IsLang ? "text-blue-500" : "text-gray-500"
                }`}
                onClick={() => ActiveLang()}
              >
                <i className="fa-solid fa-globe ms-1"></i>
                <p className="capitalize">{Lang || "english"}</p>
                <i
                  className={`fa-solid fa-angle-down transition-all duration-300 ${
                    IsLang ? "rotate-180" : "rotate-0"
                  }`}
                ></i>

                {IsLang ? (
                  <div className="absolute mt-10 left-[-150px] w-[250px] p-3 bg-white shadow-md outline outline-1 outline-gray-100 rounded-xl">
                    <ul className="flex flex-col text-lg text-end">
                      <li
                        onClick={() => setLang("english")}
                        className={`w-full py-3 transition-all ${
                          Lang == "english" ? "text-blue-600" : "text-gray-500"
                        } font-semibold hover:bg-blue-100 hover:text-blue-600 px-4 rounded-lg `}
                      >
                        English
                      </li>
                      <li
                        onClick={() => setLang("عربية")}
                        className={`w-full py-3 transition-all ${
                          Lang == "عربية" ? "text-blue-600" : "text-gray-500"
                        } font-semibold hover:bg-blue-100 hover:text-blue-600 px-4 rounded-lg `}
                      >
                        عربية
                      </li>
                      <li
                        onClick={() => setLang("Türkçe")}
                        className={`w-full py-3 transition-all ${
                          Lang == "Türkçe" ? "text-blue-600" : "text-gray-500"
                        } font-semibold hover:bg-blue-100 hover:text-blue-600 px-4 rounded-lg `}
                      >
                        Türkçe
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </button>
            </div>
            {/* Money Type */}
            <div className="Money hidden sm:block">
              <button
                className={`relative flex items-baseline flex-row-reverse gap-1 text-[9px] sm:text-[12px] md:text-sm transition-all ${
                  IsCoin ? "text-blue-500" : "text-gray-500"
                }`}
                onClick={() => ActiveCoin()}
              >
                <i className="fa-solid fa-globe ms-1"></i>
                <p className="capitalize">{Coin || "USD"}</p>
                <i
                  className={`fa-solid fa-angle-down transition-all duration-300 ${
                    IsCoin ? "rotate-180" : "rotate-0"
                  }`}
                ></i>

                {IsCoin ? (
                  <div className="absolute mt-10 left-[-175px] w-[250px] p-3 bg-white shadow-md outline outline-1 outline-gray-100 rounded-xl">
                    <ul className="flex flex-col text-lg text-end">
                      {coins_type &&
                        coins_type.map((e) => (
                          <li
                            onClick={() => setCoin(e)}
                            className={`w-full py-3 transition-all ${
                              Coin == e ? "text-blue-600" : "text-gray-500"
                            } font-semibold hover:bg-blue-100 hover:text-blue-600 px-4 rounded-lg `}
                          >
                            {e}
                          </li>
                        ))}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </button>
            </div>
            {/* Avatar */}
            <button
              onClick={(e) => ActiveAvatar()}
              className="relative flex items-baseline flex-row-reverse gap-2 sm:gap-3 p-1 px-1 sm:px-2 shadow-md outline outline-1 outline-gray-100 rounded-full text-[10px] sm:text-sm md:text-xl lg:text-2xl"
            >
              <div className="flex items-center justify-center h-4 sm:h-6 md:h-8 lg:h-10 w-4 sm:w-6 md:w-8 lg:w-10 bg-gray-300 rounded-full text-white">
                <i className="fa-regular fa-user"></i>
              </div>
              <i className="fa-solid fa-ellipsis text-gray-600"></i>
            </button>

            {/* Popup md+ screen */}
            {IsAvatar ? (
              <div className="hidden sm:block absolute mt-96 left-[10px] w-[350px] p-3 bg-white shadow-md outline outline-1 outline-gray-100 rounded-xl text-gray-600">
                <ul className="flex flex-col text-lg text-end">
                  <li
                    className={`w-full py-3 transition-all font-semibold hover:bg-blue-100 hover:text-blue-600 px-4 rounded-lg `}
                  >
                    Login
                  </li>
                  <hr className="my-1" />
                  <li
                    className={`w-full py-3 transition-all font-semibold hover:bg-blue-100 hover:text-blue-600 px-4 rounded-lg mt-2`}
                  >
                    Get The App
                  </li>
                  <li
                    className={`w-full py-3 transition-all font-semibold hover:bg-blue-100 hover:text-blue-600 px-4 rounded-lg`}
                  >
                    Contact Support
                  </li>
                  <li
                    className={`w-full py-3 transition-all font-semibold hover:bg-blue-100 hover:text-blue-600 px-4 rounded-lg mb-2`}
                  >
                    We Are Hiring
                  </li>
                  <hr />
                  <li
                    className={`w-full py-3 transition-all font-semibold hover:bg-blue-100 hover:text-blue-600 px-4 rounded-lg mt-3`}
                  >
                    Sell Your Event With Us
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}

            {/* Avatar Popup md- screen */}
            {IsAvatar ? (
              <div className="block sm:hidden absolute top-0 right-0 w-full p-3 pt-0 bg-white shadow-md outline outline-1 outline-gray-100 rounded-xl text-gray-600">
                <nav className="flex items-center justify-between">
                  <div className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full text-white text-xl">
                    <i className="fa-regular fa-user"></i>
                  </div>
                  <img className="w-36" src="/logo.svg" alt="Logo" />
                  <button onClick={() => setIsAvatar(false)}>
                    <i className="fa-solid fa-angle-right text-lg text-blue-400"></i>
                  </button>
                </nav>

                <ul className="flex flex-col text-lg text-end">
                  <li
                    className={`w-full py-3 transition-all font-semibold hover:bg-blue-100 hover:text-blue-600 px-4 rounded-lg `}
                  >
                    Login
                  </li>
                  <hr className="my-1" />
                  <li
                    className={`w-full py-3 transition-all font-semibold hover:bg-blue-100 hover:text-blue-600 px-4 rounded-lg mt-2`}
                  >
                    Get The App
                  </li>
                  <li
                    className={`w-full py-3 transition-all font-semibold hover:bg-blue-100 hover:text-blue-600 px-4 rounded-lg`}
                  >
                    Contact Support
                  </li>
                  <li
                    className={`w-full py-3 transition-all font-semibold hover:bg-blue-100 hover:text-blue-600 px-4 rounded-lg mb-2`}
                  >
                    We Are Hiring
                  </li>
                  <hr />
                  <li
                    className={`w-full py-3 transition-all font-semibold hover:bg-blue-100 hover:text-blue-600 px-4 rounded-lg mt-3`}
                  >
                    Sell Your Event With Us
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <Navbar />
        <hr />
      </header>
    </>
  );
}
