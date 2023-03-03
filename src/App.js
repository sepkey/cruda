// //libraries
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// //components
// import Layout from "./components/Layout";
// import Home from "./pages/Home";
// import Users from "./pages/Users";
// import AddUsers from "./pages/AddUsers";
// import SidebarList from "./components/SidebarList";

// const App = () => {
//   return (
//     <div>
//       <Layout left={<SidebarList />}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/users" element={<Users />} />
//           <Route path="/add" element={<AddUsers />} />
//         </Routes>
//       </Layout>
//     </div>
//   );
// };

// export default App;

//////////////////////////////
/////////////////////////////

//libraries
import React, { useState } from "react";
//components
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Users from "./pages/Users";
import AddUsers from "./pages/AddUsers";
import SidebarList from "./components/SidebarList";

const App = () => {
  const MENU_ITEMS = {
    HOME: 0,
    USERS: 1,
    ADDUSERS: 2,
  };
  const [clickedItem, setClickedItem] = useState(MENU_ITEMS.HOME);
  const handleClick = (item) => setClickedItem(item);
  return (
    <div>
      <Layout
        left={
          <SidebarList
            items={MENU_ITEMS}
            handleClick={handleClick}
            clickedItem={clickedItem}
          />
        }
      >
        {clickedItem === MENU_ITEMS.HOME && <Home />}
        {clickedItem === MENU_ITEMS.USERS && <Users />}
        {clickedItem === MENU_ITEMS.ADDUSERS && <AddUsers />}
      </Layout>
    </div>
  );
};

export default App;
