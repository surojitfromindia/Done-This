import { Topic } from "../OneStudy/OneStudyExp";

export default function NewStudyDetails({ topics }) {
  return <div>{topics && <Topic />}</div>;
}
