import '../styles/rating.scss';

type ratingStarProps = {
  color: string;
}

export function RatingStar(props:ratingStarProps) {
  return (
    <div id="full-stars-example-two">
      <div className="rating-group">
        <input disabled checked className="rating__input rating__input--none" name="rating3" id="rating3-none" value="0" type="radio" />
        <label style={{ color: props.color }} aria-label="1 star" className="rating__label" htmlFor="rating3-1"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
        <input className="rating__input" name="rating3" id="rating3-1" value="1" type="radio" />
        <label style={{ color: props.color }} aria-label="2 stars" className="rating__label" htmlFor="rating3-2"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
        <input className="rating__input" name="rating3" id="rating3-2" value="2" type="radio" />
        <label style={{ color: props.color }} aria-label="3 stars" className="rating__label" htmlFor="rating3-3"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
        <input className="rating__input" name="rating3" id="rating3-3" value="3" type="radio" />
        <label style={{ color: props.color }} aria-label="4 stars" className="rating__label" htmlFor="rating3-4"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
        <input className="rating__input" name="rating3" id="rating3-4" value="4" type="radio" />
        <label style={{ color: props.color }} aria-label="5 stars" className="rating__label" htmlFor="rating3-5"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
        <input className="rating__input" name="rating3" id="rating3-5" value="5" type="radio" />
      </div>
    </div>
    )
}


