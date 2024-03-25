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
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7751.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7752.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7770.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7772.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7774.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7775.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7776.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7777.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7784.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7789.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7825.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7826.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7832.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7833.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7837.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7838.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7839.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_8468.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7840.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7841.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7842.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7843.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7844.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7847.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7848.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7849.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7850.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7860.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_7869.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_8014.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_8023.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_8216.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_8254.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/MaxPatch/IMG_8361.jpg",
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
