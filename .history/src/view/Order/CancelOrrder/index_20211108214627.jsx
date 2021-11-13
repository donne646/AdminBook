import React from 'react'

export default function CancelOrder() {
    
    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
        
    const handleShow = () => setShow(true);
    return (
        <>
          <Button variant="primary" onClick={handleShow}>
            Chi tiết sản phẩm
          </Button>
          <Modal show={show} onHide={handleClose} animation={false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
              <Modal.Title>Sửa thể loại</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                      
            </Modal.Body>
            
          </Modal>
        </>
      );
}
