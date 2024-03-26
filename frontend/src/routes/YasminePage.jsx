// import styles from "./Javi.modules.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";

const YasGallery = () => {
  const photoArray = [
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2657.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2665.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2666.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2667.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2709.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2712.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2714.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2716.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2734.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2740.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2748.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2798.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2801.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2807.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2851.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2886.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2887.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2898.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2940.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2942.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2958.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A3017.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A3017.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A3101.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A3111.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A3112.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A3122.jpg?t=2024-03-21T16%3A42%3A22.158Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A3718-2.jpg?t=2024-03-21T16%3A53%3A53.634Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A3881.jpg?t=2024-03-21T16%3A53%3A53.634Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A3882.jpg?t=2024-03-21T16%3A53%3A53.634Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A3893.jpg?t=2024-03-21T16%3A53%3A53.634Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A3904.jpg?t=2024-03-21T16%3A53%3A53.634Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A3937.jpg?t=2024-03-21T16%3A53%3A53.634Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A3951.jpg?t=2024-03-21T16%3A53%3A53.634Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A3938.jpg?t=2024-03-21T16%3A53%3A53.634Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A3955.jpg?t=2024-03-21T16%3A53%3A53.634Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A3956.jpg?t=2024-03-21T16%3A53%3A53.634Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A3959%20copy.JPG",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A3959.JPG",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A3965%20copy.JPG",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A3965.jpg?t=2024-03-21T16%3A57%3A25.123Z",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A4136.JPG",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A4159.jpg?t=2024-03-21T16%3A57%3A47.643Z",
  ];
  return (
    <>
      <Link to="/Form4">
        <button className="ChatBTN">
          <p>Let's Talk</p>
        </button>
      </Link>
      <div style={{ padding: "10px" }}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          transitionDuration={500}
          disableImagesLoaded={false}
        >
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
export default YasGallery;
