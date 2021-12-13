import { UserCardProps } from './interface'

function UserCard({ name, avatarUrl }: UserCardProps) {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 w-10 h-10">
        <img
          className="w-full h-full rounded-full"
          src={avatarUrl}
          alt={name}
        />
      </div>
      <div className="ml-3">
        <p className="text-gray-900 whitespace-no-wrap">{name || 'Unknown'}</p>
      </div>
    </div>
  )
}

export default UserCard
