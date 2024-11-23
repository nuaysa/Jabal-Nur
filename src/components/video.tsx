export default function Video() {
  return (
    <div>
    <div className="brightness-70 duration-400 bg-orange-500 pt-16">
      <video className="z-10 w-screen" autoPlay muted loop>
        <source src="/outbond.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
  );
}
