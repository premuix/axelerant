import React, { useState } from "react";

import { motion } from "framer-motion";
//import {  FaCalendarPlus } from "react-icons/fa";
import Header from "../components/Header";
import BookingForm from "../components/BookingForm";
import Popupform from "../components/Popup";



const EventBooking = () => {
  const [open, setOpen] = React.useState(false)
  const [showhide, setShowhide] = useState('');

  const handleshowhide = (event) => {
    const getuser = event.target.value;
    setShowhide(getuser);

  }

  return (
    <>


      <main className="page-wrapper">
        <motion.div
          className="box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Header />
         
      
      <Popupform setOpen={setOpen} open={open} />
    
          <section>
            <div className="container py-5">


              <h1 className="evTitle fs-36 pb-1">Event Booking <span>RGD Design Thinkers </span></h1>
              <p className="evTitle ts-24">Number of available sets: 23</p>

              <div className="grid-2col py-5">
                <div className="bookingImg">
                  <img src="../assets/images/img-2.jpg" alt="Title" className="w-100" />
                </div>

                <div className="grid-2col__bookFrom">
                <form className="myForm"
                    noValidate
                    autoComplete="off"
                  
                  >
                 
                    <BookingForm />

                    <div className="form-item"><label>Number of seats</label>
                      <select name="usertype" className="w-100" onChange={(e) => (handleshowhide(e))} >
                        <option value="">Select number of seats</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                    {
                      showhide === '1' && (
                        <div className="pb-4"><label >Name of attendee #1</label><textarea name="Attendee 1" className="w-100" placeholder="Attendee #1 ( Petter Martin )"></textarea></div>
                      )}

                    {
                      showhide === '2' && (
                        <div className="pb-4"><label>Name of attendees #2</label><textarea name="Attendees 2" className="w-100" placeholder="Attendees #2 ( Shivam Bedi, Raman Basu )"></textarea></div>
                      )}
                    {
                      showhide === '3' && (
                        <div className="pb-4"><label >Name of attendees #3</label><textarea name="Attendees 3" className="w-100" placeholder="Attendees #3 ( Shivam Bedi, Raman Basu, Ravi Chauhan )"></textarea></div>
                      )}
                    {
                      showhide === '4' && (
                        <div className="pb-4"><label >Name of attendees #4</label><textarea name="Attendees 4" className="w-100" placeholder="Attendees #4 ( Shivam Bedi, Raman Basu, Ravi Chauhan, Gurav Desai )"></textarea></div>
                      )}
                    {
                      showhide === '5' && (
                        <div className="pb-4"><label >Name of attendees #5</label><textarea name="Attendees 5" className="w-100" placeholder="Attendees #5 ( Shivam Bedi, Raman Basu, Ravi Chauhan, Gurav Desai, Preet Gill )"></textarea></div>
                      )}
                    {
                      showhide === '6' && (
                        <div className="pb-4"><label >Name of attendees #6</label><textarea name="Attendees 6" className="w-100" placeholder="Attendees #6 ( Shivam Bedi, Raman Basu, Ravi Chauhan, Gurav Desai, Preet Gill, Prem Singh )"></textarea></div>
                      )}
 
                  </form>
                  <button className="btn outline_primary " onClick={() => setOpen(true)}><span>Book Event</span></button>
                  </div>


              </div>
            </div>
          </section>
        </motion.div>
      </main>

    </>
  )
};

export default EventBooking; 