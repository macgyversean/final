// import styles from "./Javi.modules.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";

const MaxPatchGallery = () => {
  const photoArray = [
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7743.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_8466.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7744.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7745.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7749.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7750.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_8375.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_8382.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_8463.jpg",
  ];
  return (
    <>
      <Link to="/Form">
        <button className="ChatBTN">
          <p>Let's Talk</p>
        </button>
      </Link>
      <div style={{ padding: "10px" }}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          breakpoints={{ 350: 2, 750: 3, 900: 4 }}
        >
          <Masonry
            gutter="10px"
            columnWidth="200px"
            transitionDuration={500}
            disableImagesLoaded={false}
          >
            {photoArray.map((image, i) => (
              <img
                key={i}
                src={image}
                //   style={{ width: "100%", display: "block" }}
                alt=""
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};
export default MaxPatchGallery;
