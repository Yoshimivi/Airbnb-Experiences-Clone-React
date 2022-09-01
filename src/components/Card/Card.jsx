import './Card.css'

export function Card(props) {

  let badgeText 
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

  return (
    <div className="card">
      {badgeText && <div className="soldOut">{badgeText}</div>}
      <img src={props.coverImg} alt="" />
      <div className="cardStats">
        <img src="/star.svg" alt="" />
        <span> {props.stats.rating}</span>
        <span className="gray"> ({props.stats.reviewCount}) •</span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}