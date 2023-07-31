import Layout from "../../../components/Layout/layout";
// import Card from "../components/Card/index"
import Chart from "../../../components/Chart/page";
const home = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="  sm:ml-64 ">
            <Chart className=" bg-slate-700 "></Chart>
          </div>
        </div>
        {/* <Card/> */}
      </Layout>
    </div>
  );
};

export default home;
