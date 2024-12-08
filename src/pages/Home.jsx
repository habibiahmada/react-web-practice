import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Tutors from "../components/Tutors"
import Partners from "../components/Partners"
import Contact from "../components/Contact"
import {homeSection} from "../data/HomeSection"
import { coursesSection } from "../data/CourseSection"
import { tutorsSection , tutorList} from "../data/TutorsSection"
import { partnersSection, partnersList } from "../data/PartnersSection"
import { contactSection } from "../data/ContactSection"
import "../styles/Home.css"

import parse from 'html-react-parser';

function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
      <section id="home">
            <img src={homeSection.image}/>
            <div className="kolom">
                {parse(homeSection.content)}
            </div>
        </section>
        <section id="courses">
            <div className="kolom">
                {parse(coursesSection.content)}
            </div>
            <img src={ coursesSection.image }/>
        </section>
        <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                    {parse(tutorsSection.content)}
                </div>
                <Tutors tutorList={tutorList}/>
            </div>
        </section>
        <section id="partners">
            <div className="tengah">
                <div className="kolom">
                    {parse(partnersSection.content)}
                </div>
                <Partners partnersList={partnersList}/>
            </div>
        </section>
      </div>
      <Contact contactSection={contactSection}/>
      <Footer />
    </>
  )
}

export default Home
