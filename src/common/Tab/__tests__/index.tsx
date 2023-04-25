import {render} from '@testing-library/react'
import {Tab} from '../index'
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('Tab', () => {
  it('renders properly', () => {
    useRouter.mockImplementation(() => ({push: jest.fn(), query: {}}))
    render(<Tab href='/' text='test' />)
  })
})
