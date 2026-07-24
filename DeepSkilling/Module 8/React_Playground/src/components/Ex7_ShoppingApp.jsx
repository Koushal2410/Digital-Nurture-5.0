import React from 'react';

// Cart class component that represents a shopping item
class Cart extends React.Component {
  render() {
    const { Itemname, Price } = this.props;
    return (
      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <td style={{ padding: '12px' }}>🛒 {Itemname}</td>
        <td style={{ padding: '12px', textAlign: 'right', fontWeight: 'bold', color: '#4ade80' }}>
          ${Price.toFixed(2)}
        </td>
      </tr>
    );
  }
}

// OnlineShopping class component containing cart items
class OnlineShopping extends React.Component {
  render() {
    // Array of cart items (initialized with 5 items as requested)
    const cartItems = [
      { id: 1, Itemname: 'Wireless Mouse', Price: 29.99 },
      { id: 2, Itemname: 'Mechanical Keyboard', Price: 89.99 },
      { id: 3, Itemname: '27-inch 4K Monitor', Price: 349.99 },
      { id: 4, Itemname: 'Noise-Cancelling Headphones', Price: 199.99 },
      { id: 5, Itemname: 'USB-C Docking Station', Price: 69.99 }
    ];

    const totalPrice = cartItems.reduce((acc, item) => acc + item.Price, 0);

    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '15px' }}>
        <h3 style={{ color: '#61dafb', marginBottom: '15px', borderBottom: '1px solid #61dafb', paddingBottom: '8px' }}>
          Online Shopping Items (OnlineShopping)
        </h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'rgba(255,255,255,0.02)' }}>
          <thead>
            <tr style={{ backgroundColor: 'rgba(255,255,255,0.05)', textAlign: 'left' }}>
              <th style={{ padding: '12px' }}>Product Name</th>
              <th style={{ padding: '12px', textAlign: 'right' }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <Cart key={item.id} Itemname={item.Itemname} Price={item.Price} />
            ))}
          </tbody>
          <tfoot>
            <tr style={{ borderTop: '2px solid rgba(255,255,255,0.2)', fontWeight: 'bold' }}>
              <td style={{ padding: '12px' }}>Total Price</td>
              <td style={{ padding: '12px', textAlign: 'right', color: '#4ade80', fontSize: '1.2rem' }}>
                ${totalPrice.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const Ex7_ShoppingApp = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ borderBottom: '2px solid #61dafb', paddingBottom: '10px', marginBottom: '20px' }}>
        Shopping Application (Props Loop)
      </h2>
      <p style={{ color: '#aaa', marginBottom: '20px' }}>
        This page renders items inside a nested class component loop:
      </p>
      <OnlineShopping />
    </div>
  );
};

export default Ex7_ShoppingApp;
export { OnlineShopping, Cart };
