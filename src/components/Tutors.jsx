import "../styles/Tutors.css";

function Tutors(props) {
    return (
      <div>
        <div className="tutor-list">
          {
            props.tutorList.map((item, index) => (
              <div className="kartu-tutor" key={index}>
                <img src={item.image} alt={`Foto dari ${item.name}`} />
                <p>{item.name}</p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
  


export default Tutors

