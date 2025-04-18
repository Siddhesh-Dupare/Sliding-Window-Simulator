import React, { useState } from 'react';

import '../styles/gobackn.css';

const totalPackets = 20;

const GoBackN = () => {
  return (
    <>
      <div className="wrapper">
        <div className="btns">
          <button className="btn send-new-btn">Send New</button>
          <button className="btn pause-btn">Pause</button>
          <button className="btn kill-btn">Kill Packet/Ack</button>
          <button className="btn reset-btn">Reset</button>
        </div>

        <div className="simulator-wrapper">
          <div className="wrap sender-wrapper">
            <div className="packets sender-packets">
              {[...Array(totalPackets)].map((_, i) => (
                <div 
                  key={i}
                  className="packet"
                  >
                    {i}
                </div>
              ))}
            </div>

            <div className="details">
              <p><b>Sender</b></p>
            </div>
          </div>

          <div className="wrap receiver-wrapper">
            <div className="packets receiver-packets">
              {[...Array(totalPackets)].map((_, i) => (
                <div
                  key={i}
                  className="packet"
                  >
                    {i}
                </div>
              ))}
            </div>

            <div className="details">
              <p><b>Receiver</b></p>
            </div>
          </div>
        </div>

        <div className="legend-wrapper">
          <Legend color="bg-cyan-300" label="Packet" />
          <Legend color="bg-red-500" label="Received" />
          <Legend color="bg-yellow-300" label="Ack" />
          <Legend color="bg-blue-400" label="Ack Received" />
          <Legend color="bg-green-400" label="Selected" />
        </div>
      </div>
    </>
  );
}

function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-4 h-4 rounded-full ${color}`} />
      <span className="text-sm">{label}</span>
    </div>
  );
}

export default GoBackN;
