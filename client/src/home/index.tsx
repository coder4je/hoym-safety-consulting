import Navbar from "../components/Navbar";
import video from "../videos/video.mp4";

function Home() {
  console.log(video);
  return (
    <>
      <Navbar />
      <video
        autoPlay
        loop
        muted
        src={video}
        width="750"
        height="500"
        controls></video>
    </>
  );
}

export default Home;
