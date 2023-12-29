import Footer from "./Components/Footer";
import NavbarComponenet from "./Components/NavbarComponenet";
import { Image } from "react-bootstrap";
import "./Bio.css";
const Bio = () => {
  return (
    <>
      <NavbarComponenet />
      <div className="hello d-flex m-5 align-items-center justify-content-center text-black">
        <div className="biotext w-50 fs-1">
          <div className="border-bottom m-3 border-black border-3 text-black">
            Bio
          </div>
          <p className="biotext-black fs-6">
            With a passion for capturing moments and creating memories, I'm
            dedicated to providing top-notch photography services in the DMV
            metropolitan area. Whether it's a special event, a family portrait,
            or a corporate photoshoot, I strive to deliver exceptional
            photography that surpasses expectations. I'm skilled in capturing
            the essence of each individual, event, or product through my unique
            perspective and creative vision. I believe that every photograph
            tells a story, and I'm here to help you tell yours. I understand the
            importance of making your images stand out. From editing and
            retouching to color grading and composition, I'll always go the
            extra mile to ensure that each photograph is of the highest quality.
          </p>
        </div>
        <div className="d-flex w-50 h-100 justify-content-center">
          <Image className="bio-pic " width={300} src="/images/kay.jpeg"></Image>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Bio;
