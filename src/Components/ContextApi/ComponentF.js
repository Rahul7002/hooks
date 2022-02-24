// Method 1

// import React from "react";
// import { UserContext, ChannelContext } from "../../App";

// function ComponentF() {
//   return (
//     <div>
//       <UserContext.Consumer>
//         {(user) => {
//           return (
//             <ChannelContext.Consumer>
//               {(channel) => {
//                 return (
//                   <div>
//                     User Context value {user},channel context value {channel}
//                   </div>
//                 );
//               }}
//             </ChannelContext.Consumer>
//           );
//         }}
//       </UserContext.Consumer>
//     </div>
//   );
// }

// export default ComponentF;



import React,{useContext} from 'react'
import { ChannelContext, UserContext } from '../../App'

function ComponentF() {
    const user=useContext(UserContext);
    const channel=useContext(ChannelContext);
  return (
    <div>ComponentF {user} {channel}</div>
  )
}

export default ComponentF


