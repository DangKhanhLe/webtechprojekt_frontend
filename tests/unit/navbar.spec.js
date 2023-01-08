import { mount } from '@vue/test-utils'
import Navbar from '@/components/Navbar'

describe('Testing Navbar.vue', () => {
  it('should show Navbar with Home and AllToDoLists', () => {
    // when
    const wrapper = mount(Navbar)
    const home = wrapper.get('[data-test="texthome"')
    const todo = wrapper.get('[data-test="texttodo"')
    expect(home.text()).toBe('Home')
    expect(todo.text()).toBe('AllToDoLists')
  })
})
