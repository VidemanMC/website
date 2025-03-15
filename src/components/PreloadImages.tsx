import { Helmet } from "react-helmet-async";

const images = [
  "/img/donations/man0.png",
  "/img/donations/back1.png",
  "/img/donations/back2.jpg",
  "/img/donations/back3.png",
  "/img/pages/mainpage/gif-background1-slow.gif",
  "/img/pages/mainpage/oneblock.png",
  "/img/pages/mainpage/mods.png",
  "/img/pages/mainpage/bosses.png",
];

function PreloadImages() {
  return (
    <Helmet>
      {images.map((src, index) => (
        <link key={index} rel="preload" as="image" href={src} />
      ))}
    </Helmet>
  );
}

export default PreloadImages;
