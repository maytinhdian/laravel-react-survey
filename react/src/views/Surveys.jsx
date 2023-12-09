import PageComponent from "../components/PageComponent";
import SurveyListItem from "../components/SurveyListItem";
import { useStateContext } from "../contexts/ContextProvider";

export default function Surveys() {
  const { surveys } = useStateContext();
  console.log(surveys);

  const onDeleteClick = () => {
    console.log("On delete click");
  };

  return (
    <PageComponent title="Surveys"
      // button={
      //   <TButton color="green" to="/surveys/create">
      //     <PlusCircleIcon className="h-6 w-6 mr-2 "></PlusCircleIcon>
      //     Create new
      //   </TButton>
      // }
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {surveys.map((survey) => (
          <SurveyListItem survey={survey} key={survey.id}/>
        ))}
      </div>
    </PageComponent>
  );
}
