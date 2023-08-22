import UserIcon from 'assets/icons/user.svg'

export const Avatar = ({ avatar }) => {
  const avatarStyle = {
    height: '100%',
    width: '100%',
    objectFit: 'cover'
  }
  return (
    <img
      src={avatar || UserIcon}
      alt="user-avatar"
      onError={(e) => (e.target.src = UserIcon)}
      style={avatarStyle}
    />
  )
}
