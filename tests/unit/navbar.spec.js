import { mount } from '@vue/test-utils'
import Navbar from '@/components/Navbar'

describe('Testing Navbar.vue', () => {
  it('should show Navbar with Home and AllToDoLists', () => {
    // when
    const wrapper = mount(Navbar, {

    })
    expect(wrapper.text()).toContain('Home')
    expect(wrapper.text()).toContain('AllToDoLists')
  })
})
