// import styles from "./Javi.modules.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";

const JaviGallery = () => {
  const photoArray = [
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC02919.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC02953.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC02970-Edit.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC02989-Edit.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC03007.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC03024.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC03047.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC03051.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC03054.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC03058.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC03059.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC03066.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC03068.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC03069.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC03200.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC03111.jpg",
  ];
  return (
    <>
      <div>
        <Link to="/Form4">
          <button className="ChatBTN">
            <p className="NavLink">Let's Talk</p>
          </button>
        </Link>
      </div>
      <div style={{ padding: "10px" }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="10px">
            {photoArray.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block" }}
                alt=""
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};
export default JaviGallery;
