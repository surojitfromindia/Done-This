export default function NewStudyCard() {
  return (
    <div
      className={
        "px-5 py-3 rounded-md   bg-gradient-to-tr  to-orange-400 via-orange-600 from-red-500"
      }
    >
      <span className={"font-medium tracking-wider text-lg text-gray-100"}>
        NEW
      </span>
      <spam className={"block leading-4 text-sm   text-red-200 "}>
        view upcoming lessions in advance. topics will be coverd in next classes
      </spam>

      <div className={"block leading-5 text-sm mb-4 mt-1.5"}>
        <span className={"text-xl  text-coolGray-200 font-medium"}>13</span>
        <span className={"text-sm text-coolGray-200 ml-1"}>new excersise</span>
      </div>
      <div className={"flex justify-start"}>
        <button
          className={
            "outline-none text-sm font-medium tracking-wider focus:outline-none w-16 px-3 py-1 rounded-md hover:bg-opacity-95 bg-orange-500 bg-opacity-80 text-warmGray-100"
          }
        >
          Start
        </button>
      </div>
    </div>
  );
}
