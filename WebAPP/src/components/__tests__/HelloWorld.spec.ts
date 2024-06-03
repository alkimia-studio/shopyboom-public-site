import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import home from '@/components/pages/home.vue'

describe('home', () => {
  it('renders properly', () => {
    const wrapper = mount(home, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
