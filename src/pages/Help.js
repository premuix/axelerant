import { motion } from "framer-motion";
import Header from "../components/Header";
const Help = () => {
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
           <section>
            <div className="container py-5">
                <h1 className="fs-36 pb-3">HELP </h1>
            </div>
           </section>
        </motion.div>
      </main>
    </>
  )
};

export default Help; 