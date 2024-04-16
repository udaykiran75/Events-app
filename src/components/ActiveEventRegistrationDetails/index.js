import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {eventStatus} = props

  const noActiveEventDetails = () => (
    <p className="noActive-para">
      Click on an event, to view its registration details
    </p>
  )

  const yetToRegisterEvent = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        className="reg-image"
        alt="yet to register"
      />
      <p className="reg-content">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beatiful art form.
      </p>
      <buttoN className="reg-button">Register Here</buttoN>
    </div>
  )

  const registerdEvent = () => (
    <div className="mydiv">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="tick-image"
      />
      <h1 className="tick-para">You have already registered for the event</h1>
    </div>
  )

  const closedEvent = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        className="closed-image"
        alt="registrations closed"
      />
      <h1 className="opne-headinf">Registrations Are Closed Now!</h1>
      <p className="open-para">
        Stay tuned. We will reopen the registations soon!
      </p>
    </div>
  )

  const displayEventDetailsView = () => {
    switch (eventStatus) {
      case 'YET_TO_REGISTER':
        return yetToRegisterEvent()
      case 'REGISTERED':
        return registerdEvent()
      case 'REGISTRATIONS_CLOSED':
        return closedEvent()
      default:
        return noActiveEventDetails()
    }
  }

  return <div className="event-detail-div">{displayEventDetailsView()}</div>
}
export default ActiveEventRegistrationDetails
