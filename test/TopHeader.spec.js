import { mount } from '@vue/test-utils'

import TopHeader from '@/components/static/TopHeader.vue'

describe('TopHeader', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TopHeader,
      {
        stubs: {
          NuxtLink: true,
          // Any other component that you want stubbed
        },
      })
    expect(wrapper.vm).toBeTruthy()
  })
})
