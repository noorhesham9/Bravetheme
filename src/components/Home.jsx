import NiceLanding from "./NiceLanding/NiceLanding";
import HeaderHome from "./headerHome/HeaderHome";
import MultiBage from "./multibageChild/MultiBage";
function Home() {
  return (
    <div>
      <HeaderHome />
      <NiceLanding />
      <MultiBage />
    </div>
  );
}

export default Home;
