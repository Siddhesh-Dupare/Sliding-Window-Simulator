import React, { useEffect, useState } from "react";
 // Make sure to keep your original styles

const TOTAL_FRAMES = 10;
const WINDOW_SIZE = 4;
const TIMEOUT = 5000;

const GoBackn = () => {

  class GoBackN {
    constructor(windowSize, totalFrames) {
      this.windowSize = windowSize;
      this.totalFrames = totalFrames;
      this.sentFrames = 0;
      this.base = 0;
      this.timer = null;
      this.timeoutDuration = 3000; // 3 seconds for timeout simulation
    }
  
    sendFrames() {
      while (this.sentFrames < this.base + this.windowSize && this.sentFrames < this.totalFrames) {
        console.log(`Sending Frame ${this.sentFrames}`);
        this.sentFrames++;
      }
  
      this.startTimer();
    }
  
    receiveAck(ack) {
      if (ack >= this.base && ack < this.sentFrames) {
        console.log(`Received ACK for Frame ${ack}`);
        this.base = ack + 1;
        if (this.base === this.sentFrames) {
          this.stopTimer();
        } else {
          this.startTimer(); // restart timer for unacknowledged frames
        }
        this.sendFrames();
      }
    }
  
    startTimer() {
      this.stopTimer(); // Stop existing timer
      this.timer = setTimeout(() => {
        console.log(`Timeout! Resending frames from ${this.base}`);
        this.sentFrames = this.base; // Reset to resend from base
        this.sendFrames();
      }, this.timeoutDuration);
    }
  
    stopTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    }
  
    simulate() {
      this.sendFrames();
  
      // Simulate random ACKs coming in
      let ackInterval = setInterval(() => {
        if (this.base >= this.totalFrames) {
          console.log("All frames sent and acknowledged!");
          this.stopTimer();
          clearInterval(ackInterval);
          return;
        }
  
        // Simulate lost ACKs randomly
        if (Math.random() < 0.2) {
          console.log(`ACK for Frame ${this.base} lost!`);
          return;
        }
  
        this.receiveAck(this.base);
      }, 1000);
    }
  }
  
  // Example: window size = 4, total frames = 10
  const gbn = new GoBackN(4, 10);
  gbn.simulate();
  

  return (
    <>
    </>
  );
};

export default GoBackn;
