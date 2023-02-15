import { mount } from '@vue/test-utils'
import DataRow from '@/components/DataRow.vue'

describe('DataRow', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(DataRow)
    expect(wrapper.vm).toBeTruthy()
  })
})
