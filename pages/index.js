import {
  UpcomigCard,
  NewStudyCard,
  OldStudyCard,
  Greet,
} from "../components/HomePageComponents/HomeExport";

export default function Home() {
  return (
    <div className={"py-3 px-5 mb-36 mt-10 grid auto-rows-min gap-5"}>
      <Greet />

      <div
        className={
          "mt-5 mb-20  grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        }
      >
        <div name={"upcoming"} id={"upcoming"}>
          <UpcomigCard />
        </div>
        <div name={"oldstudy"} id={"oldstudy"}>
          <NewStudyCard />
        </div>
        <div name={"newstudy"} id={"newstudey"}>
          <OldStudyCard />
        </div>
        <div name={"newstudy"} id={"newstudey"}>
          <OldStudyCard />
        </div>
        <div name={"upcoming"} id={"upcoming"}>
          <UpcomigCard />
        </div>
      </div>
    </div>
  );
}
