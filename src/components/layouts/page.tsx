
import Header from "../header/page";
import Sidebar from "../sidebar/page";

export default function Layouts() {
  return (
    <main>
      <div className="">
        <Sidebar />
          <Header />
      </div>
    </main>
  );
}
