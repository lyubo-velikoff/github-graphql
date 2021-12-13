import { NavLink, useNavigate } from 'react-router-dom'

function Breadcrumbs({ value }: BreadCrumbProps) {
  const navigate = useNavigate()

  return (
    <nav className="w-full mb-4 rounded">
      <ol className="flex list-reset text-grey-dark">
        <li>
          <button
            onClick={() => navigate(-1)}
            className="font-bold hover:opacity-75"
          >
            Go Back
          </button>
        </li>
        <li>
          <span className="mx-2">/</span>
        </li>
        <li>{value}</li>
      </ol>
    </nav>
  )
}

export default Breadcrumbs
