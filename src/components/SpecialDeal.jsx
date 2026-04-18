import Clock from "../assets/clock.svg";
import Close from "../assets/close.svg";
import "../styles/SpecialDeal.css"


function SpecialDeal() {

    return (
        <>
        <button><img src={Close} /></button>
        <p><img src={Clock} /> Special Deal!</p>
        <p>Register now to unlock exclusive offers and discounts</p>
        <div className="timer">
        <p>Offer expires in:</p>
        <p>0:59:59</p>
        </div>
        </>
    )
}

export default SpecialDeal