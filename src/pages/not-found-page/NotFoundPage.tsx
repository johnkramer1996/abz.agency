import { Link } from 'react-router-dom'
import { PATH_PAGE } from 'shared/lib'

export function NotFoundPage() {
  return (
    <section className='section s-404'>
      <div className='container'>
        <div className='container'>
          <h1 className='h1'>Page not found</h1>
          <p>Sorry, we couldn’t find the page you’re looking for.</p>
          <Link to={PATH_PAGE.root} className='btn btn--accent'>
            Go back home
          </Link>
        </div>
      </div>
    </section>
  )
}
