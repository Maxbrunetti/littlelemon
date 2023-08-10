import React from 'react';

function ConfirmedBooking() {
  return (
    <section className="bg-green" style={{ height: '80vh' }}>
      <div className="w60 ">
        <h1>Order Confirmed</h1>
        <p className={'white'}>
          Thank you for choosing Little Lemon for your dining experience. Your
          table is reserved. We look forward to serving you a memorable meal
          filled with delightful flavors and warm ambiance. See you soon
        </p>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
