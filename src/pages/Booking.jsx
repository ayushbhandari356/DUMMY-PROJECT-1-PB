import React from "react";
import { FaBoxOpen } from 'react-icons/fa'; // Importing Font Awesome icon

function Booking() {
  return (
    <div>
      <div className="bg-[#f7f7f7] flex justify-between py-4 px-6 border-t-4 border-blue-500 ">
        <div className="icon-text flex items-center"> 
          <FaBoxOpen size={20} className="mr-2" />
          <p>No bookings available yet. </p>
        </div>
        <div className="button">
          <button
            style={{
              backgroundColor: "#FFA500",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              fontSize: "18px",
              cursor: "pointer",
            }}
            // onClick={() => (window.location.href = "/products")}
          >
            GO SHOP
          </button>
        </div>
      </div>
    </div>
  );
}

export default Booking;
