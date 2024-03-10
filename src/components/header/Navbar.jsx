import React from "react";

export default function Navbar() {
  return (
    <>
      <ul className="flex items-center flex-row-reverse gap-4 w-full lg:container py-3 text-xs sm:text-sm text-gray-900 overflow-x-scroll lg:[overflow:unset]">
        <li className="flex items-baseline flex-row-reverse gap-2 transition-all hover:text-blue-500 cursor-pointer text-nowrap">
          <p>الفعاليات</p>
          <i className="fa-solid fa-angle-down transition-all duration-300"></i>
        </li>
        <li className="flex items-baseline flex-row-reverse gap-2 transition-all hover:text-blue-500 cursor-pointer text-nowrap">
          <p>المغامرات والتجارب</p>
          <i className="fa-solid fa-angle-down transition-all duration-300"></i>
        </li>
        <li className="transition-all hover:text-blue-500 cursor-pointer text-nowrap">
          افضل عروض المعالم السياحية
        </li>
        <li className="transition-all hover:text-blue-500 cursor-pointer text-nowrap">
          الفعاليات العربية
        </li>
        <li className="transition-all hover:text-blue-500 cursor-pointer text-nowrap">
          الحفلات الغنائية
        </li>
        <li className="transition-all hover:text-blue-500 cursor-pointer text-nowrap">
          العروض المسرحية
        </li>
        <li className="transition-all hover:text-blue-500 cursor-pointer text-nowrap">
          مناسب للاطفال
        </li>
        <li className="transition-all hover:text-blue-500 cursor-pointer text-nowrap">
          دليل الفعاليات والمعالم
        </li>
      </ul>
    </>
  );
}
