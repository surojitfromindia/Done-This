export default function Home() {
  return (
    <div className={"bg-gray-800 h-screen text-trueGray-100"}>
      <div className={"px-5 py-6 h-96 bg-lightBlue-600"}>Upcoming</div>
      <div
        name={"oldstudy"}
        id={"oldstudy"}
        className={"px-5 py-6 h-96 bg-lightBlue-700"}
      >
        Home
      </div>
      <div
        name={"newstudey"}
        id={"newstudey"}
        className={"px-5 py-6 h-96 bg-lightBlue-800 "}
      >
        Study
      </div>
    </div>
  );
}
