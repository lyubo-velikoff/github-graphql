import { render } from '@testing-library/react'
import ErrorFallback from './error-fallback'

describe('ErrorFallback', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ErrorFallback
        error={{ message: 'Some dummy text message' }}
        resetErrorBoundary={() => alert('Reloading page')}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
