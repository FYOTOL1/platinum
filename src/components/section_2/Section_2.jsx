import React from "react";

export default function Section_2() {
  let roles = [
    "الحفل مخصص فقط للأفراد الذين تتجاوز أعمارهم 8 سنوات.",
    "لا يُسمح للأفراد الذين تقل أعمارهم عن 8 سنوات بدخول المكان.",
    "يجب أن يكون مع الأفراد الذين تقل أعمارهم عن 18 سنة راشد يبلغ من العمر 21 عامًا على الأقل.",
    "يجب أن يكون عمرك 12 عامًا أو أكثر لتتمكن من شراء تذكرة في فئة الوقوف على الأرض العامة وفئة الـ Fanpit Floor Standing.",
    "يمنع منعًا باتًا الدخول مرة أخرى بعد الخروج.",
    "جميع مبيعات التذاكر نهائية، والتذاكر غير قابلة للاسترداد وغير قابلة للتحويل وغير قابلة للصرف، وهي للاستخدام الشخصي فقط.",
    "قد يُطلب التحقق من هوية حامل التذكرة عند البوابة، ويمكن أن يكون ذلك على شكل بطاقة هوية صالحة مع صورة وبطاقة الائتمان المستخدمة للشراء.",
    "يجب المحافظة على التذكرة الإلكترونية معك في جميع الأوقات وعرضها عند الطلب من قبل موظفي القاعة.",
    "في حالة إلغاء أو تأجيل الحفل، يخضع استرداد قيمة هذه التذكرة الإلكترونية لشروط وأحكام منظم الحفل.",
    "قد يؤدي السلوك غير المنضبط، وعدم الامتثال لتدابير الأمان، وانتهاك أي قواعد أو سياسات أو لوائح، أو الاستخدام غير المصرح به لهذه التذكرة إلى رفض",
    "الدخول أو إخراج حامل التذكرة من الاتحاد أرينا.",
    "تخضع هذه التذكرة الإلكترونية لشروط وأحكام مدرجة على موقع etihadarena.ae.",
    "لا يُسمح بحمل حقائب تزيد أبعادها عن 30x30x15 سنتيمتر، ولا تتوفر وسائل تخزين أو خدمات غرفة البخار.",
    "لا يُسمح بحمل كاميرات احترافية.",
  ];

  return (
    <>
      <div className="relative px-2 lg:px-0 md:container flex justify-between flex-col lg:flex-row-reverse gap-10 mx-auto mt-10 w-full">
        <div className="Right text-end w-full">
          <h1 className="text-3xl font-bold text-gray-600">
            جولة ألبوم “مكانك” للفنان عمرو دياب في الاتحاد أرينا في أبوظبي
            <br /> 2024
          </h1>
          <p className="mt-2 text-xs text-gray-500">
            انضموا إلينا في الاحتفال بنجاح اجدد ألبومات الفنان المحبوب عمرو
            دياب!
          </p>

          {/* Location */}
          <div className="flex items-baseline justify-end mt-5 text-blue-400 gap-3">
            <p>الاتحاد ارينا</p>
            <i class="fa-solid fa-location-dot"></i>
          </div>

          {/* Rate */}
          <div className="flex items-center flex-row-reverse gap-5 mt-5">
            <p className="bg-green-500 px-2 rounded-sm text-white">4.5</p>
            <div className="flex items-center gap-1 text-yellow-400">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p className="underline text-blue-500 cursor-pointer transition-all hover:text-blue-700">
              تقيمات {231}
            </p>
          </div>
          <h2 className="text-xl text-gray-600 font-bold mt-3">
            الفعاليات القادمة
          </h2>

          {/* Big Sell */}
          <div className="relative ms-auto mt-4 w-full lg:w-fit">
            <img
              className="rounded-lg w-full"
              src="https://cdn.platinumlist.net/upload/event/amr_diab_live_at_al_dana_amphitheatre_2024_may_20_al_dana_amphitheatre_90759-middle-en1706004078.jpg"
              alt="الافضل مبيعا"
            />
            <p className="absolute bg-yellow-400 p-2 text-xs font-bold top-2 right-2 rounded-full">
              الافضل مبيعا
            </p>
            <i class="fa-regular fa-heart absolute left-2 top-1 text-2xl text-white"></i>
          </div>
          <h2 className="mt-3 text-lg font-bold text-gray-600">
            عمرو دياب في مسرح الداننة في البحرين
          </h2>

          {/* Price */}
          <p className="mt-2 text-gray-600">USD {22.8}</p>

          {/* Date */}
          <p className="mt-1 text-gray-400">الجمعة 26 ابريل</p>

          {/* Information */}
          <p className="mt-5 text-[12px] text-gray-500">
            بعد نجاح ألبوم عمرو دياب الأخير "مكانك"، المتاح حصريًا على أنغامي،
            يقدم أنغامي سبوتلايت بفخر جولة ألبوم عمرو دياب "مكانك". تبدأ الجولة
            في أبوظبي في 2 مارس في الاتحاد أرينا، جزيرة ياس، تليها حفلات في
            المدن الرئيسية في المنطقة.
          </p>
          <p className="mt-5 text-[12px] text-gray-500">
            تتوفر مقاعد لأصحاب الهمم - يرجى التواصل على 115 511 600
          </p>

          {/* Date List */}
          <h1 className="text-xl text-gray-600 font-bold mt-8">
            الجدول الزمني
          </h1>
          <p className="mt-5 text-[12px] text-gray-500">
            تفتح الأبواب الساعة 18:00 ويبدأ الحفل الساعة 19:00 مما يضمن لك
            متسعًا من الوقت للاستعداد له.
          </p>

          {/* roles */}
          {/* 1 */}
          <hr className="mt-5" />
          <h1 className="text-xl text-gray-600 font-bold mt-8">سياسات الحفل</h1>
          <ul className="Roles flex flex-col gap-2 text-xs text-gray-500">
            <br />
            {roles && roles.map((e) => <li>{e}</li>)}
          </ul>
          {/* 2 */}
          <hr className="mt-5" />
          <h1 className="text-xl text-gray-600 font-bold mt-8">
            الشروط والاحكام
          </h1>
          <ul className="Roles flex flex-col gap-2 text-xs text-gray-500">
            <br />
            {roles && roles.map((e) => <li>{e}</li>)}
          </ul>
          {/* 3 */}
          <hr className="mt-5" />
          <h1 className="text-xl text-gray-600 font-bold mt-8">
            كيف تصل الى الموقع
          </h1>
          <ul className="Roles flex flex-col gap-5 text-xs text-gray-500">
            <li className="mt-5">
              <span className="text-gray-800 font-bold">بالسيارة: </span>يقع
              الاتحاد أرينا في قلب أبوظبي، ويمكن الوصول إليه عبر الطرق السريعة
              والطرق الرئيسية، فإن كنت قادمًا من وسط أبوظبي يمكنك السفر على طريق
              الشيخ زايد ومتابعة الإشارات إلى المكان.
            </li>
            <li>
              <span className="text-gray-800 font-bold">
                بوسائل النقل العام:{" "}
              </span>
              يمكن الوصول بسهولة إلى الاتحاد أرينا بواسطة الحافلة، حيث أقرب محطة
              حافلات هي محطة القديم المطار القديم، والتي تقع على بُعد حوالي 800
              متر.
            </li>
            <li>
              <span className="text-gray-800 font-bold">بسيارة الأجرة:</span>
              يمكنك أيضًا استخدام سيارة أجرة للوصول إلى الاتحاد أرينا، لأنها
              وجهة شهيرة ومعظم السائقين سيكونون على دراية بموقعها.
            </li>
          </ul>

          {/* Song */}
          <hr className="mt-5" />
          <h1 className="text-xl text-gray-600 font-bold my-3 mt-8">
            اللاين اب
          </h1>
          <div className="flex items-center justify-between flex-row-reverse w-full p-3 lg:p-6 rounded-md">
            <div className="flex items-center flex-row-reverse gap-5 text-end">
              <div className="relative w-20 h-20 rounded-md overflow-hidden">
                <img
                  className="object-cover h-full w-full"
                  src="https://cdn.platinumlist.net/upload/artist/amr_diab_27-thumb1706108799.jpeg"
                  alt="Error"
                />
                <i class="fa-solid fa-play absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[20px] text-gray-50 opacity-75"></i>
              </div>
              <div className="">
                <p className="text-[100%]">عمرو دياب</p>
                <p className="text-xs text-gray-600">الفنان</p>
              </div>
            </div>
            <div className="flex items-center gap-3 md:text-2xl lg:text-3xl text-gray-300">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-solid fa-chart-simple"></i>
            </div>
          </div>

          {/* Map */}
          <hr className="mt-5" />
          <h1 className="text-2xl mt-5 font-bold text-gray-700">الموقع</h1>
          <div className="flex flex-row-reverse gap-10 mt-5 rounded-lg bg-gray-50">
            <div className="flex items-center p-2 lg:py-3 lg:px-1 flex-col text-center text-sm w-[108px] bg-white shadow-md outline outline-1 outline-gray-200 rounded-lg">
              <i class="fa-solid fa-location-dot flex items-center justify-center mx-auto h-7 w-7 text-white bg-blue-500 rounded-full"></i>
              <h1 className="text-[13px]">مكان اقامة الفعالية</h1>
              <p className="text-gray-500 text-xs">الموقع</p>
            </div>
            <div className="py-3">
              <p className="text-blue-500">الاتحاد ارينا</p>
              <p className="text-sm text-gray-600">
                Yas Dr - Yas Island - Abu Dhabi - United Arab Emirates
              </p>
              <div className="flex items-baseline flex-row-reverse gap-2 text-sm text-blue-500">
                <p>اطلع على الخريطة لمعرفة الاتجاه الصحيح</p>
                <i class="fa-solid fa-angle-left"></i>
              </div>
            </div>
          </div>
          <img className="mt-5 rounded-lg" src="/map.webp" alt="Map Location" />

          {/* Maybe You Like */}
          <hr className="my-5" />
          <h1 className="text-xl text-gray-600 font-bold my-6">
            قد يعجبك ايضا
          </h1>
          <div className="flex items-center justify-between gap-4 w-full">
            <div className="relative w-1/2 h-56 shadow-sm ">
              <img
                className="h-full w-full object-cover rounded-lg"
                src="/amr-1.jpg"
                alt="Error"
              />

              <p className="absolute top-2 right-2 flex items-center justify-center bg-yellow-400 rounded-full h-7 w-14 text-xs font-bold">
                حصري
              </p>
              <p className="absolute left-2 top-1 text-2xl text-white">
                <i class="fa-regular fa-heart"></i>
              </p>

              {/* Info */}
              <p className="mt-3 font-bold text-lg text-gray-600">
                حفلة عمرو دياب في السعودية
              </p>
              <p className="mt-1 text-md text-gray-600">22.82 USD</p>
              <p className="mt-1 text-base text-gray-400">السبت 22 ابريل</p>
            </div>
            <div className="relative w-1/2 h-56 shadow-sm">
              <img
                className="h-full w-full object-cover rounded-lg"
                src="/amr-2.jpg"
                alt="Error"
              />

              <p className="absolute top-2 right-2 flex items-center justify-center bg-yellow-400 rounded-full h-7 w-14 text-xs font-bold">
                حصري
              </p>
              <p className="absolute left-2 top-1 text-2xl text-white">
                <i class="fa-regular fa-heart"></i>
              </p>

              {/* Info */}
              <p className="mt-3 font-bold text-lg text-gray-600">
                حفلة عمرو دياب في الغردقة
              </p>
              <p className="mt-1 text-md text-gray-600">29.82 USD</p>
              <p className="mt-1 text-base text-gray-400">الاحد 15 فبراير</p>
            </div>
          </div>
        </div>

        {/* Left Side */}
        <div className="Left w-1/2 hidden lg:block">
          <div className="sticky w-full min-w-[200px] top-44">
            {/* Date */}
            <div className="outline outline-1 outline-blue-500 rounded-lg p-5 z-20 w-full">
              <div className="flex items-end lg:items-center justify-between flex-col lg:flex-row-reverse gap-2 lg:gap-0">
                <div className="flex items-baseline gap-2">
                  <p className="text-gray-500">السبت,مارس 02</p>
                  <i class="fa-regular fa-calendar-days text-blue-400"></i>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-gray-500">تفتح الابواب 18:00</p>
                  <i class="fa-regular fa-clock text-blue-400"></i>
                </div>
              </div>
              <hr className="my-4" />
              <p className="text-end text-2xl font-bold text-gray-500">
                انتهت هذه الفعالية
              </p>
            </div>
            {/* Song */}
            <div className="flex items-center justify-between flex-row-reverse w-full mt-10 outline outline-1 outline-gray-50 shadow-md p-3 lg:p-6 rounded-md">
              <div className="flex items-center flex-row-reverse gap-5 text-end">
                <div className="relative w-20 h-20 rounded-md overflow-hidden">
                  <img
                    className="object-cover h-full w-full"
                    src="https://cdn.platinumlist.net/upload/artist/amr_diab_27-thumb1706108799.jpeg"
                    alt="Error"
                  />
                  <i class="fa-solid fa-play absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[20px] text-gray-50 opacity-75"></i>
                </div>
                <div className="">
                  <p className="text-[100%]">عمرو دياب</p>
                  <p className="text-xs text-gray-600">الفنان</p>
                </div>
              </div>
              <div className="flex items-center gap-3 md:text-2xl lg:text-3xl text-gray-300">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-chart-simple hidden lg:block"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
