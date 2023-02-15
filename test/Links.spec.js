import { mount } from '@vue/test-utils'
import Links from '@/components/Links.vue'

describe('Links', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Links)
    expect(wrapper.vm).toBeTruthy()
  })
})
