import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback, { myErrorHandler } from '../../error/error-fallback'
import { routes } from '../../../routes'
import DefaultLayout from '../../layouts/default-layout'

export function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
      <BrowserRouter>
        <Routes>
          {routes?.map((route, index) => {
            const Component = route.component
            return (
              <Route
                key={index}
                element={<DefaultLayout>{Component}</DefaultLayout>}
                {...route}
              />
            )
          })}
          <Route
            path="*"
            element={
              <main className="my-8 text-center text-black title">
                <p>Page not found!</p>
                <div className="my-4">
                  <NavLink to="/" className="button">
                    Go to homepage
                  </NavLink>
                </div>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
