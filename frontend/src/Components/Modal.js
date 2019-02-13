import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import {connect} from 'react-redux';



class ModalSign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  toggleModalForm = () =>{
    if(this.props.PropsModalIsOpen.ModalSignIn.boolean){
      this.props.ModalIsOpen();
    }
  }

  render() {

    return (
      <Container>
        <Modal isOpen={this.props.PropsModalIsOpen.ModalSignIn.boolean} centered>
          <ModalBody id="ModalForm">
            <div className="Flex-row Justify-content-end">
              <span className="Font-color-black Font-bold Close" onClick={() => this.toggleModalForm()}>X</span>
            </div>
            <TabForm />
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return {
    ModalIsOpen: function() {
        dispatch( {type: 'CloseModalSignIn', boolean: false} )
    }
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalSign);
