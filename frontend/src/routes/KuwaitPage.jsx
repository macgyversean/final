// import styles from "./Javi.modules.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";

const KuwaitGallery = () => {
  const photoArray = [
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/69851526_443154876319515_1877493413838848000_o_443154869652849.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70063285_443152006319802_558581473465073664_o_443151999653136.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70092367_443168219651514_3458904319300993024_o_443168212984848.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70212515_443171732984496_6974474117823070208_o_443171726317830.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70244129_443169102984759_1211393142129950720_o_443169096318093.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70244281_443144766320526_3772054237438017536_o_443144762987193.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70255323_443168382984831_2875439815367589888_o_443168379651498.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70338281_443151812986488_2206596275032293376_o_443151806319822.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70346374_443163989651937_6785790865865441280_o_443163986318604.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70396947_443142149654121_2544928260735631360_o_443142146320788.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70441468_443150356319967_1024839773044342784_o_443150346319968.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70462985_443166599651676_2010416144774594560_o_443166596318343.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70503236_443166499651686_2488991925227487232_o_443166492985020.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70660399_443153059653030_7987172967509393408_o_443153056319697.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70504686_443141976320805_5766717859510091776_o_443141972987472.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70589016_443147626320240_6843819803929477120_o_443147619653574.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70597861_443162719652064_2305606992170844160_o_443162712985398.jpg",
    "https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70616409_443142402987429_5994791789842661376_o_443142399654096.jpg",
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
export default KuwaitGallery;
