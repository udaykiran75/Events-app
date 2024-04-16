import './index.css'

const EventItem = props => {
  const {eventDetails, clickItem, isActive} = props
  const {id, imageUrl, name, location} = eventDetails
  const className = isActive ? 'activeStyle' : ''

  const onClickItem = () => {
    clickItem(id)
  }

  return (
    <li onClick={onClickItem}>
      <button type="button" className="btn-img">
        <img
          src={imageUrl}
          alt="event"
          className={`event-image ${className}`}
        />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}
export default EventItem
