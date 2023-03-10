import { mount } from '@vue/test-utils'
import Links from '@/components/Links.vue'

describe('Links', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Links,
      {
        stubs: {
          NuxtLink: true,
          // Any other component that you want stubbed
        },
      }
      )
    expect(wrapper.vm).toBeTruthy()
  })
})
