
import React from "react";

import Box from '../components/home/Box'

import '../styles/home.css'

const Home = () => {
    return (
        <>
            <div className="box-container">
                <Box 
                    title="Sliding Window Simulation"
                    description="A sliding window protocol is a feature of packet-based data transmission protocols. Sliding window protocols are used where reliable in-order delivery of packets is required, such as in the data link layer (OSI layer 2) as well as in the Transmission Control Protocol (TCP)
                        In this project we have shown following Simulation for the same."
                    link1="Go Back N"
                    link2="Selective Repeat"
                    redirect="/concept"
                    link="Concept" />

                <Box 
                    title="Go Back N"
                    description="Go-Back-N ARQ is a specific instance of the automatic repeat request (ARQ) protocol, in which the sending process continues to send a number of frames specified by a window size even without receiving an acknowledgement (ACK) packet from the receiver. It is a special case of the general sliding window protocol with the transmit window size of N and receive window size of 1. It can transmit N frames to the peer before requiring an ACK."
                    flag="none"
                    redirect="/go-back-n"
                    link="Simulation" />

                <Box 
                    title="Selective Repeat"
                    description="Selective repeat protocol, also called Selective Repeat ARQ (Automatic Repeat reQuest), is a data link layer protocol that uses sliding window method for reliable delivery of data frames. Here, only the erroneous or lost frames are retransmitted, while the good frames are received and buffered."
                    flag="none"
                    redirect="selective-repeat"
                    link="Simulation" />
            </div>
        </>
    );
}

export default Home;