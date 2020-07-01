import { render } from '@redwoodjs/testing'

import SigninPage from './SigninPage'

describe('SigninPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SigninPage />)
    }).not.toThrow()
  })
})
