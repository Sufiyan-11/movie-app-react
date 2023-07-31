import React,{useState} from 'react';
import { Card,Button,Modal } from 'react-bootstrap';

const Moviedata = ({title,image,overview,date,vote}) => {
    const[showmodal, setShowmodal]=useState(false);

    const showdata=()=>setShowmodal(true)
    
  return (
    <div>
        
      <Card className='cardh mb-5' style={{ width: '18rem' }}>
      <Card.Img className='img'variant="top" src={image}/>
      <Card.Body>
        
        <Button onClick={()=>showdata()} variant="primary">View More</Button>
      </Card.Body>
      <Modal 
      show={showmodal}
      onHide={()=>setShowmodal(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className='modalimg' src={image} alt='movie'/>
        <h2>{title}</h2>
        <h3>Release Date :{date}</h3>
        <h4>IMBD Rating : {vote}</h4>
        <p>
        {overview}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>setShowmodal(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
    </Card>
    </div>
  )
}

export default Moviedata
