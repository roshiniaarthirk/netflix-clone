import { useState } from "react"
import "./Home.css"

function Home() {
  const [myList, setMyList] = useState([])

  const data = {
    trending: [
      { title: "Doctor Strange", img: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg" },
      { title: "The Dark Knight", img: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
      { title: "Joker", img: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
      { title: "Avengers", img: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg" },
      { title: "Spider-Man", img: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg" }
    ],

    cartoons: [
      { title: "Toy Story", img: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg" },
      { title: "Tangled", img: "https://image.tmdb.org/t/p/w500/ym7Kst6a4uodryxqbGOxmewF235.jpg" },
      { title: "Frozen", img: "https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg" },
      { title: "Coco", img: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg" },
      { title: "Zootopia", img: "https://image.tmdb.org/t/p/w500/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg" }
    ],

    action: [
      { title: "Thor Ragnarok", img: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg" },
      { title: "Mad Max", img: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg" },
      { title: "John Wick", img: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg" },
      { title: "Gladiator", img: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg" },
      { title: "Extraction", img: "https://image.tmdb.org/t/p/w500/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg" }
    ],

    scifi: [
      { title: "Interstellar", img: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" },
      { title: "Avatar", img: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg" },
      { title: "Dune", img: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" },
      { title: "Tenet", img: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg" },
      { title: "Blade Runner 2049", img: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg" }
    ]
  }

  const titles = {
    trending: "Trending Now",
    cartoons: "Popular on Netflix",
    action: "Action Movies",
    scifi: "Sci-Fi & Fantasy"
  }

  const addToList = (movie) => {
    if (!myList.find((m) => m.title === movie.title)) {
      setMyList([...myList, movie])
    }
  }

  return (
    <div className="netflix">

      {/* HEADER */}
      <div className="header">
        <h1 className="logo">NETFLIX</h1>
      </div>

      {/* HERO */}
      <div className="hero">
        <div className="hero-content">
          <h1>INTERSTELLAR</h1>
          <p>Explore beyond time and space.</p>
          <div className="hero-buttons">
            <button className="play">▶ Play</button>
            <button className="info">ℹ More Info</button>
          </div>
        </div>
      </div>

      {/* ROWS */}
      {Object.entries(data).map(([category, movies]) => (
        <div className="row" key={category}>
          <h2>{titles[category]}</h2>

          <div className="row-posters">
            {movies.map((movie, i) => (
              <div className="card" key={i}>
                <img src={movie.img} alt={movie.title} />

                <div className="overlay">
                  <p>{movie.title}</p>
                  <button onClick={() => addToList(movie)}>
                    + My List
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      ))}

      {/* MY LIST */}
      {myList.length > 0 && (
        <div className="row">
          <h2>My List</h2>
          <div className="row-posters">
            {myList.map((movie, i) => (
              <img key={i} src={movie.img} />
            ))}
          </div>
        </div>
      )}

    </div>
  )
}

export default Home