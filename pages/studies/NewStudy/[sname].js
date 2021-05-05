import NewStudyDetails from "../../../components/SubjectsAssemble/NewStudyDetails";
import { AllSubjectForToday } from "../../../utils/mockApi";

export default function Hmm({ subject }) {
  return (
    <div className={"px-5 py-3"}>
      {subject && <NewStudyDetails Subject={subject} />}
    </div>
  );
}

export async function getStaticProps({ params }) {
  let subnameS = params.sname;
  let subject = AllSubjectForToday.find((sub) => subnameS === sub.subName);
  return {
    props: { subject },
  };
}

export async function getStaticPaths() {
  //here get all available subjects for this day
  let subjectsForToday = AllSubjectForToday.map((sub) => sub.subName);
  let path = subjectsForToday.map((subject) => ({
    params: { sname: subject },
  }));

  return {
    paths: path,
    fallback: false,
  };
}
