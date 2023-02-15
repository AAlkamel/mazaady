<template>
  <div class="flex gap-1">
    <div class="flex gap-0.5 flex-col w-16">
      <div
        @click="selected >0 ? selected -=1:selected = imgs.length-1 "
        class="
          hover:bg-slate-200
          rounded
          aspect-[3/2]
          flex
          items-center
          justify-center
        "
      >
        <fa class="text-gray-500 text-xs h-5 w-5" icon="chevron-up" />
      </div>
      <img
        @click="selected = i - 1"
        v-for="i in 6"
        :key="i"
        :class="`rounded object-cover  aspect-[3/2] ${
          selected == i - 1 ? ' border border-solid border-gray-300' : ''
        }`"
        :src="imgs[i - 1]"
        alt=""
      />
      <div
        @click="selected < imgs.length-1 ? selected +=1:selected = 0 "
        class="
          hover:bg-slate-200
          rounded
          aspect-[3/2]
          flex
          items-center
          justify-center
        "
      >
        <fa class="text-gray-500 text-xs h-5 w-5" icon="chevron-down" />
      </div>
    </div>
    <div style="width: calc(100% - 64px) ;" class=" flex-1">
      <div class="relative bg-white rounded shadow-xl">
        <img
          class="rounded w-full object-cover aspect-[2/1]"
          :src="imgs[selected]"
          alt=""
        />
        <div class="absolute top-3 w-full flex justify-between">
          <div class="mr-4 flex text-white text-xs">
            <button class="rounded-r bg-neutral-900 bg-opacity-60 px-2">
              20:00
            </button>
            <button
              class="
                rounded-l
                border-r border-white border-opacity-10
                bg-neutral-900 bg-opacity-60
                px-2
              "
            >
              <i class="fa-solid fa-eye ml-0.5"></i> 3000
            </button>
          </div>
          <div class="ml-4 flex text-white gap-2 text-xs">
            <i
              class="
                fa-solid fa-flag
                cursor-pointer
                bg-neutral-800 bg-opacity-60
                w-7
                h-7
                flex
                items-center
                justify-center
                rounded-full
              "
            ></i>
            <i
              class="
                fa-regular fa-heart
                cursor-pointer
                bg-neutral-800 bg-opacity-60
                w-7
                h-7
                flex
                items-center
                justify-center
                rounded-full
              "
            ></i>
            <i
              class="
                fa-solid fa-share-nodes
                cursor-pointer
                bg-neutral-800 bg-opacity-60
                w-7
                h-7
                flex
                items-center
                justify-center
                rounded-full
              "
            ></i>
          </div>
        </div>
        <div class="md:flex items-center pt-3 px-5">
          <div class="relative w-12 h-12">
            <img
              class="shadow-md rounded-full object-cover w-full h-full"
              :src="imgs[2]"
              alt="user"
            />
            <i
              class="
                w-5
                h-5
                rounded-full
                text-slate-300
                flex
                items-center
                justify-center
                text-xs
                bg-white
                shadow-md
                absolute
                bottom-0
                left-0
                fa-solid fa-heart
              "
            ></i>
          </div>
          <div class="mr-3">
            <div class="mb-1 font-bold text-base text-purple-900">
              اسم البائع
            </div>
            <div dir="ltr" class=" text-right text-xs font-medium text-purple-900">
              +963954854715
            </div>
          </div>
          <div class="mr-2 flex gap-0.5">
            <i
              v-for="i in 4"
              :key="i"
              class="text-orange-400 fa-solid fa-star"
            ></i>
            <i
              v-for="i in 5 - 4"
              :key="i * 0.23"
              class="text-gray-300 fa-solid fa-star"
            ></i>
          </div>
        </div>
        <div class="px-5">
          <h2 class="mt-2 mb-0 text-xl font-bold text-neutral-600">
            شراء مجموعة من السيارات من موديلات1990
          </h2>
          <span class="text-neutral-400">code 123</span>
        </div>
        <div class="px-5 pt-4 pb-3 md:flex justify-between">
          <div class="flex justify-center md:justify-start gap-4">
            <button
              class="bg-pink-200 text-rose-600 py-1 px-3 rounded"
              dir="ltr"
            >
              +1000
            </button>
            <button
              class="bg-pink-200 text-rose-600 py-1 px-3 rounded"
              dir="ltr"
            >
              +1010
            </button>
            <button
              class="bg-pink-200 text-rose-600 py-1 px-3 rounded"
              dir="ltr"
            >
              +1020
            </button>
          </div>
          <div class="flex mt-2 md:mt-0 justify-center md:justify-end gap-2">
            <input
              placeholder="اكتب المبلغ"
              type="number"
              class="
                rounded
                border border-solid
                px-3
                focus:outline-none
                border-neutral-300
              "
            />
            <button
              class="
                rounded
                bg-gradient-to-tr
                from-rose-600
                to-fuchsia-900
                text-base
                font-semibold
                text-white
                px-5
              "
            >
              تأكيد
            </button>
          </div>
        </div>
      </div>
      <div class="px-5 py-4 mt-8 mb-8 bg-white rounded shadow-xl">
        <h2 class="mb-0 text-xl font-bold text-neutral-600">
          أرسل رسالة إلى البائع
        </h2>
        <p class="text-sm text-neutral-500">
          يمكنك في وقت البث المباشر إرسال رسالة إلى البائع للإستفسار
        </p>
        <div class="flex gap-2 mt-4">
          <input
            class="
              h-10
              flex-auto
              rounded-full
              border border-solid
              px-3
              focus:outline-none
              border-neutral-300
            "
            placeholder="اكتب سؤالك"
            type="text"
          />
          <button
            class="
              w-10
              h-10
              flex
              items-center
              justify-center
              rounded-full
              bg-gradient-to-tr
              from-rose-600
              to-fuchsia-900
              text-base
              font-semibold
              text-white
            "
          >
            <i
              class="rotate-[230deg] fa-solid fa-location-arrow text-white"
            ></i>
          </button>
        </div>
      </div>
      <div
        class="text-neutral-500 px-5 py-4 mt-8 mb-8 bg-white rounded shadow-xl"
      >
        <h2 class="mb-3 text-xl font-bold text-neutral-600">تفاصيل المزاد</h2>
        <div class="flex justify-between">
          <div class="font-medium text-lg">
            <div>
              <i class="text-base fa-solid fa-location-dot"></i>
              Egypt , Mansoura
            </div>
            <div class="text-neutral-500 font-normal">
              <i class="text-base fa-solid fa-dollar-sign"></i>
              البيع لأعلى سعر
            </div>
            <div class="text-fuchsia-900 font-normal">
              <i class="text-base fa-brands fa-microsoft"></i>
              منتجات متعددة
            </div>
          </div>
          <div class="font-medium text-lg text-left">
            <div>200 قطعة</div>
            <div class="text-orange-400">
              <i class="text-base fa-solid fa-microphone"></i>
              صوت
            </div>
          </div>
        </div>
        <hr class="mt-2" />
        <h2 class="mt-3 mb-2 text-xl font-bold text-neutral-600">وصف</h2>
        <p class="text-sm text-neutral-500">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت
          تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
          الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص
          العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من
          الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم
          أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص
          العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع
          الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.
        </p>
        <hr class="mt-2" />
        <h2 class="mt-3 mb-2 text-xl font-bold text-neutral-600">سياسة الاسترجاع والاستبدال</h2>
        <p class="text-sm text-neutral-500">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت
          تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
          الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص
          العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من
          الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم
          أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص
          العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع
          الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: 0,
      imgs: [
        require("@/assets/images/01.jpg"),
        require("@/assets/images/02.jpg"),
        require("@/assets/images/03.jpg"),
        require("@/assets/images/04.jpg"),
        require("@/assets/images/05.jpg"),
        require("@/assets/images/06.jpg"),
      ],
    };
  },
};
</script>
