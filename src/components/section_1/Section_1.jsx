import React from "react";

export default function Section_1() {
  return (
    <>
      <div className="px-2 lg:p-0 lg:container  mx-auto mt-2">
        <header className="hidden md:flex items-center justify-between w-full flex-row-reverse">
          <ul className="flex items-center justify-end flex-row-reverse gap-2 text-[11px] text-gray-400">
            <li className="flex items-baseline flex-row-reverse gap-1">
              <p>الصفحة الرئيسية</p>
              <i className="fa-solid fa-angle-left"></i>
            </li>
            <li className="flex items-baseline flex-row-reverse gap-1">
              <p>الفعاليات</p>
              <i className="fa-solid fa-angle-left"></i>
            </li>
            <li className="flex items-baseline flex-row-reverse gap-1">
              <p>دليل الفعاليات العربية</p>
              <i className="fa-solid fa-angle-left"></i>
            </li>
            <li className="flex items-baseline flex-row-reverse gap-1 text-gray-800">
              <p>
                جولة البوم "مكانك" للفنان عمرو دياب في الاتحاد ارينا في ابو ظبي
                2024
              </p>
              <i className="fa-solid fa-angle-left"></i>
            </li>
          </ul>
          <div className="flex items-baseline gap-2 text-gray-600 text-[11px]">
            <p>مشاركة</p>
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
        </header>

        <img
          className="mt-2 md:mt-10 rounded-[10px] sm:rounded-[15px] md:rounded-[20px] lg:rounded-[30px]"
          src="https://cdn.platinumlist.net/upload/event/promo/29533_upload65b204a1c66a0_1706165409-0-en1706165419.jpg"
          alt="عمرو دياب"
        />
      </div>
    </>
  );
}
