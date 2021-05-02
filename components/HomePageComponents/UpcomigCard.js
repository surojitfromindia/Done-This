export default function UpcomigCard() {
  return (
    <div
      className={
        "px-5 py-3   rounded-md   bg-gradient-to-tr  to-emarland-400 via-lightBlue-500 from-lightBlue-600"
      }
    >
      <span className={"font-bold tracking-wider text-lg text-gray-100"}>
        UPCOMING
      </span>
      <spam
        className={"block leading-4 text-sm  font-medium text-coolGray-300 "}
      >
        view upcoming lessions in advance. topics will be coverd in next classes
      </spam>

      <div className={"block leading-5 text-sm mb-4 mt-1.5 font-medium  "}>
        <span className={"text-3xl  text-coolGray-200"}>
          12
          <span className={"text-base text-coolGray-200 ml-1.5"}>
            new excersise
          </span>
        </span>
      </div>
      <div className={"flex justify-start"}>
        <button
          className={
            "outline-none text-sm font-medium tracking-wider focus:outline-none w-16 px-3 py-1 rounded-md hover:bg-opacity-95 bg-lightBlue-300 bg-opacity-80 text-wramGray-100"
          }
        >
          view
        </button>
      </div>
    </div>
  );
}
