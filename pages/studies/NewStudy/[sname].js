import NewStudyDetails from "../../../components/SubjectsAssemble/NewStudyDetails";
import { useState } from "react";
import axios from "axios";

export default function Hmm({ data }) {
  const [subjectProp, _] = useState(data);
  const handle = (updatedTopic) => {
    let sname = data.subName;
    axios
      .post(`https://doneback.herokuapp.com/all/${sname}`, updatedTopic)
      .then((res) => {
        // alert(res.data);
      });
  };
  return (
    <div className={"px-5 py-3 flex justify-center items-center"}>
      <NewStudyDetails Subject={subjectProp} onTopicComplete={handle} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  let sname = params.sname;
  const { data } = await axios.get(`https://doneback.herokuapp.com/all/${sname}`);
  return {
    props: { data },
    revalidate: 25,
  };
}

export async function getStaticPaths() {
  //here get all available subjects for this day
  const { data } = await axios.get("https://doneback.herokuapp.com/sub");
  let path = data.map((subject) => ({
    params: { sname: subject },
  }));

  return {
    paths: path,
    fallback: false,
  };
}
