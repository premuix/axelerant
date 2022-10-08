import React from "react";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import { FaTimes } from "react-icons/fa";



class Popupform extends React.Component {

  render() {
    return(
      <Popup open={this.props.open} modal>
        {() => ( 
          <>
            <div className="bookingDone py-5" >
                <div className="bookingDone__detail">You have booked <span>3</span> tickets for</div>
                <div className="bookingDone__title "><h3 className="ts-24">RGD Design Thinkers</h3><p>21 Sep, 2020</p></div>
                <div className="bookingDone__payment "><button className="btn orange_secondary ">Make Payment</button> <button className="btn outline_primary ">Back to Booking</button></div>
            </div>
            <button className="btn-close" onClick={() => this.props.setOpen(false)}>
            <FaTimes  />
            </button>
          
          </>
        )}
      </Popup>
    )
  }
};

export default Popupform;
