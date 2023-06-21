import React, { useState,useEffect} from 'react'
import { Modal, ModalBody, Row } from "reactstrap"
import heroImg from '../../assets/dinsha.jpg'
import './Dinsha.css'

const Hero = ({state}) => {
    const [modal, setModal] = useState(false);
    const [cid,setCid]=useState("");
    useEffect(()=>{
        const {contract}=state;
        const cidOfImage=async()=>{
          const cid = await contract.methods.imageLink().call();
          setCid(cid);
        }
        contract && cidOfImage();
      },[state])
    return (
        <section className="hero">
        <div className="container">
            <div className="hero-text">
                <p><span>Dinsha Jaiswal </span>
                    I am a coding enthusiast</p>
                <h1>I develop full stack web applications</h1>
                <h3>Currently pursuing B.Tech in Electronics and Communication Engineering at NIT Raipur.</h3>
                {/*  =========popup bootstrap==========  */}

                <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalBody>
                            <Row className="text-align">
                                <label htmlFor="" toggle={() => setModal(!modal)}>
                                    Mail Id - dinsha.jaiswal123@gmail.com
                                </label>

                            </Row>
                    </ModalBody>
                </Modal>

                <button className="msg-btn" onClick={() => setModal(true)}>Get in Touch</button>
                {/*  =========popup bootstrap end==========  */}

            </div>
            <div className="hero-img">

                <div className="img-container">
                    <img src={`https://gateway.pinata.cloud/ipfs/${cid}`} alt="profilePhoto" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero