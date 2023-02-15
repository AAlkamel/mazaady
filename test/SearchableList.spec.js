import { mount } from '@vue/test-utils'
import SearchableList from '@/components/SearchableList.vue'

describe('SearchableList', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SearchableList)
    expect(wrapper.vm).toBeTruthy()
  })
})
