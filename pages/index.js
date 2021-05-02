import UpcomigCard from "../components/HomePageComponents/UpcomigCard";

export default function Home() {
  return (
    <div className={"bg-gray-800 h-screen text-sweat-100"}>
      <div className={"px-5 py-3"}>
        <UpcomigCard />
      </div>
      <div name={"oldstudy"} id={"oldstudy"} className={"px-5 py-3"}>
        <UpcomigCard />
      </div>
      <div name={"newstudey"} id={"newstudey"} className={"px-5 py-3 "}>
        <UpcomigCard />
      </div>
    </div>
  );
}
