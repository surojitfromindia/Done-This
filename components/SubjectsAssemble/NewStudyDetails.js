import { Questions, Topic } from "../OneStudy/OneStudyExp";

export default function NewStudyDetails({ Subject }) {
  return (
    <div className={"flex w-full mt-5 space-y-5  flex-col md:container mx-auto"}>
      <span className={"text-3xl font-semibold text-opacity-80 text-teal-400 "}>
        {Subject.subName}
       
      </span>

      <div>{Subject.topic && <Topic topics={Subject.topic} />}</div>
      <div className={""}>
        {Subject.question.length > 0 && (
          <Questions questions={Subject.question} />
        )}
      </div>
    </div>
  );
}
