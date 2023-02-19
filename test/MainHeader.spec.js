import { mount } from '@vue/test-utils'
import MainHeader from '@/components/static/MainHeader.vue'

describe('MainHeader', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(MainHeader)
    expect(wrapper.vm).toBeTruthy()
  })
})
