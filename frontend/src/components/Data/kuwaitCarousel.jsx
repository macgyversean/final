import React from "react";
import "../Carousel.css";
import { supabase } from "../../config/supabase.Config";

import { Carousel } from "react-responsive-carousel";

const KuwaitCarousel = () => {
  return (
    <Carousel
      showSlide={false}
      showlegend={true}
      swipeable={true}
      autoPlay
      interval={3000}
      infiniteLoop
      showIndicators={false}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      centerMode={true}
    >
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/69426195_443161929652143_5381957328876601344_o_443161922985477.jpg"
          alt="Picture of a tent at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/69716833_443147356320267_1731268894309482496_o_443147352986934.jpg"
          alt="Picture of the sunset at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/69851526_443154876319515_1877493413838848000_o_443154869652849.jpg"
          alt="Picture of mountains at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70063285_443152006319802_558581473465073664_o_443151999653136.jpg"
          alt="Picture of a tent at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70092367_443168219651514_3458904319300993024_o_443168212984848.jpg"
          alt="Picture of the sunset at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70212515_443171732984496_6974474117823070208_o_443171726317830.jpg"
          alt="Picture of mountains at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70244129_443169102984759_1211393142129950720_o_443169096318093.jpg"
          alt="Picture of a tent at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70244281_443144766320526_3772054237438017536_o_443144762987193.jpg"
          alt="Picture of the sunset at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70255323_443168382984831_2875439815367589888_o_443168379651498.jpg"
          alt="Picture of mountains at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70338281_443151812986488_2206596275032293376_o_443151806319822.jpg"
          alt="Picture of a tent at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70346374_443163989651937_6785790865865441280_o_443163986318604.jpg"
          alt="Picture of the sunset at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70396947_443142149654121_2544928260735631360_o_443142146320788.jpg"
          alt="Picture of mountains at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70441468_443150356319967_1024839773044342784_o_443150346319968.jpg"
          alt="Picture of a tent at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70462985_443166599651676_2010416144774594560_o_443166596318343.jpg"
          alt="Picture of the sunset at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70503236_443166499651686_2488991925227487232_o_443166492985020.jpg"
          alt="Picture of mountains at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70504686_443141976320805_5766717859510091776_o_443141972987472.jpg"
          alt="Picture of a tent at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70589016_443147626320240_6843819803929477120_o_443147619653574.jpg"
          alt="Picture of the sunset at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70597861_443162719652064_2305606992170844160_o_443162712985398.jpg"
          alt="Picture of mountains at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70616409_443142402987429_5994791789842661376_o_443142399654096.jpg"
          alt="Picture of a tent at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/kuwait/70660399_443153059653030_7987172967509393408_o_443153056319697.jpg"
          alt="Picture of the sunset at Max Patch"
        />
        <p className="legend"></p>
      </div>
    </Carousel>
  );
};

export default KuwaitCarousel;
