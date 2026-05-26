function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
       
      }}
    >
      <h1>Welcome To My Webpage</h1>
      <h2>Hello</h2>
      <p>AIML-2</p>

      <img
        src="https://cdna.artstation.com/p/marketplace/presentation_assets/003/430/266/large/file.jpg?1706950306"
        alt="image"
        width="300"
      />
       

       <audio  width="300"  controls>
        <source
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          type="audio/mp3"
        />
      </audio>
<hr />
       
            <video width="300" controls>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>


      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
        title="YouTube video"
        frameBorder="0"
        allowFullScreen
      ></iframe>

    </div>
  );
}

export default App;