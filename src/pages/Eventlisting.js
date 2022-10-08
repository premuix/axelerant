import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarPlus } from 'react-icons/fa';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import UserData from '../data/data.json';
import { NavLink } from 'react-router-dom';

const Eventlisting = () => {
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
          <SearchBar />

          <section>
            <div className="container py-5">
              <h1 className="fs-36 pb-3">
                EVENTS <span>(8)</span>
              </h1>

              <div className="flex-3col">
                {UserData.map((users, eventsData) => (
                  <div className="flex-3col__item" key={eventsData}>
                    <img
                      className="desk-img w-100"
                      src={users.image}
                      alt="title"
                    />
                    <div className="flex-3col__content">
                      <img
                        className="mob-img"
                        src="images/img-01.jpg"
                        alt="title"
                      />
                      <h3 className="title pb-3"> {users.title}</h3>
                      <div className="info pb-3">
                        <div>{users.date}</div>
                        <div className={users.cltickets}>
                          Tickets Available: <span>{users.tickets}</span>
                        </div>
                      </div>
                      <div className="d-flex">
                        <NavLink className={users.clname} to="/EventBooking">
                          <FaCalendarPlus className="d-icon" />
                          <span>{users.available}</span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      </main>
    </>
  );
};

export default Eventlisting;
