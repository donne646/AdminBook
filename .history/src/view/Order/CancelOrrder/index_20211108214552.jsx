import React from 'react'

export default function CancelOrder() {
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
