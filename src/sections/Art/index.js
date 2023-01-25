import { useEffect, useState } from "react"

function ArtsSection() {
const [artworks, setArtWorks] = useState([])


useEffect(() => {
  fetch(`https://api.artic.edu/api/v1/artworks?limit =10`)
  .then(response => response.json())
  .then((data) => {
    console.log("artwork data:", data)
    setArtWorks(data.data)
  })
},[])
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
      <ul className="art-list">
        {artworks.map((artwork,index)  => (
      <li key ={index}>
        <div className="frame">
          <img
            src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg` } alt = {artwork.title}
          />
      </div>
      <h3>{artwork.title}</h3>
      <p>Artist:{artwork.Artist_title}</p>
      <h4>Artistic Subjects:</h4>
      <ul>
      {artwork.subject_titles.map((subject, index) => (
        <li key= {index}>{subject}</li>
      ))}
           
      </ul>
      </li>
     ))}
      </ul>
      </div>
    </section>
  )
}

export default ArtsSection
