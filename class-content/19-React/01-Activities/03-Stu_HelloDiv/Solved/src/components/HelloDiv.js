import React from 'react';

class HelloDiv extends React.Component {
  render() {
    return (
        <div>
          <h1>Hey guys! I'm a header!</h1>
          <h2>Things I like!</h2>
          <ul>
            <li>Peas</li>
            <li>Carrots</li>
          <li>Love</li>
        </ul>
      </div>
    );
  }
}

// functional component
// function HelloDiv() {
//   return (
//     <div>
//       <h1>Hey guys! I'm a header!</h1>
//       <h2>Things I like!</h2>
//       <ul>
//         <li>Peas</li>
//         <li>Carrots</li>
//         <li>Love</li>
//       </ul>
//     </div>
//   );
// }

export default HelloDiv;
