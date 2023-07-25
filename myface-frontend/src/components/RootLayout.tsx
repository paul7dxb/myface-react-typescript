import { Outlet } from "react-router-dom";



const RootLayout = () => {
  return (
    <>
    <h1>MyFace</h1>
      <main> <Outlet/> </main>
    </>
  );
};

export default RootLayout;