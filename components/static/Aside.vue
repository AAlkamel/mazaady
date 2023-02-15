<template>
  <div>
    <div class="px-3 py-3 pb-4 mb-8 bg-white rounded shadow-xl">
      <div
        class="
          text-neutral-50
          bg-neutral-700
          rounded
          px-4
          py-2
          flex
          justify-between
        "
      >
        <span>تاريخ البث</span>
        <strong>20/11/2020</strong>
      </div>
      <div class="flex gap-2 mt-3">
        <div
          class="
            relative
            w-1/2
            bg-purple-900
            text-white
            px-1
            py-6
            rounded
            text-center
          "
        >
          <div>القيمة الحالية للمزاد</div>
          <div class="flex items-center justify-center">
            <strong class="text-2xl">5000</strong> <strong>$</strong>
          </div>
          <div
            class="
              pl-3
              shadow-md
              p-0.5
              bg-white
              h-5
              inline-flex
              absolute
              rounded-full
              items-center
              bottom-0
              translate-y-1/2
              right-1/2
              translate-x-1/2
            "
          >
            <img
              class="w-4 h-4 rounded-full"
              src="@/assets/images/03.jpg"
              alt=""
            />
            <span class="text-purple-900 text-xs mr-1 font-medium"
              >أحمد الرائد</span
            >
          </div>
        </div>
        <div
          class="
            w-1/2
            text-purple-900
            bg-purple-200
            px-1
            py-4
            rounded
            text-center
          "
        >
          <div>القيمة الحالية بعد الضريبة</div>
          <div class="flex items-center justify-center">
            <strong class="text-2xl">5050</strong> <strong>$</strong>
          </div>
        </div>
      </div>
    </div>
    <div class="px-3 py-3 pb-4 mb-8 mt-8 bg-white rounded shadow-xl">
      <h2 class="mb-3 text-xl font-bold text-neutral-600">
          المتنافسون
        </h2>
        <div class="flex flex-col gap-5">
          <div v-for="i in 5 " :key="i *.0120" class="flex justify-between items-center">
            <div class="flex gap-1 items-center">
              <img class=" w-11 h-11 rounded-full object-cover" src="@/assets/images/03.jpg" alt="">
              <div>
                <strong class=" text-neutral-700">اسم المزايد</strong>
                <br>
                <small class=" text-neutral-500">01:12:55</small>
              </div>
            </div>
            <div class=" text-amber-500 text-2xl font-bold pl-5" dir="ltr">
              +20
            </div>
          </div>

        </div>
    </div>
    <div class="px-3 py-3  mb-8 mt-8 bg-white rounded shadow-xl flex flex-col gap-3">
      <div class="rounded flex justify-between items-center py-2 px-4 bg-neutral-900 bg-opacity-10 text-neutral-600 ">
        <span>القيمة الابتدائية</span>
        <strong class="text-xl">5000</strong>
      </div>
      <div class="rounded flex justify-between items-center py-2 px-4 bg-neutral-900 bg-opacity-10 text-neutral-600 ">
        <span>القيمة التقريبية</span>
        <strong class="text-xl">5000</strong>
      </div>
      <div class="rounded flex justify-between items-center py-2 px-4 bg-neutral-900 bg-opacity-10 text-neutral-600 ">
        <span>العربون</span>
        <strong class="text-xl">5000</strong>
      </div>
      <div class="rounded flex justify-between items-center py-2 px-4 bg-neutral-900 bg-opacity-10 text-neutral-600 ">
        <span>سعر الشراء الفورى</span>
        <strong class="text-xl">5000</strong>
      </div>
      <div class="rounded flex justify-between items-center py-2 px-4 bg-neutral-900 bg-opacity-10 text-neutral-600 ">
        <span>قيمة ذيادة المزاد</span>
        <strong class="text-xl">5000</strong>
      </div>
    </div>
    <div class="px-3 py-3 pb-4 mb-8 mt-8 bg-white rounded shadow-xl">
      <h2 class="mb-3 text-xl font-bold text-neutral-600">
        المزادات الممفضلة
        </h2>
        <div class="flex flex-col gap-5">
          <div v-for="i in 3" :key="i *.09854" class=" flex gap-3">
            <div class=" w-32 h-24 relative">
              <img class=" relative z-10 w-full h-full object-cover rounded-md " src="@/assets/images/04.jpg" alt="">
              <span class=" rotate-45 w-2 h-2 absolute bg-amber-600 -right-1 bottom-2"></span>
              <div class=" z-20 absolute bg-amber-500 -right-1.5 bottom-3 text-white font-medium te px-2 py-0.5 text-xs">
                مزاد عام
              </div>
              <div class=" z-20 absolute bg-neutral-900 bg-opacity-40 left-0 top-2 text-white font-medium te px-2 py-0.5 text-xs">
                live now <i class=" text-xs text-green-600  fa-regular fa-circle-play"></i>
              </div>
              <i class="pr-0.5 z-20 absolute top-1.5 right-1.5 inline-flex justify-center items-center w-7 h-7 rounded-full bg-opacity-90 bg-white text-rose-600 text-base fa-solid fa-heart"></i>

            </div>
            <div class=" flex-1">
              <p class=" font-medium text-neutral-600 text-sm">سيارة سريعة بى ام دابليو تصنيع  2021 حالته جديدة سيارة سريعة بى ام دابليو تصنيع  2021 حالته جديدة</p>
              <div class="flex justify-between items-center pl-4 pt-4">
                <div>
                  <i class=" text-neutral-400 text-xs fa-solid fa-coins"></i>
                  <span class="text-sm font-medium text-neutral-600">أعلى سعر</span>
                </div>
                <strong class=" text-purple-900">500 $</strong>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
