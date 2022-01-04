import Button from "./Button";

const Actions = (props) => {
  const { work } = props;
  return (
    <div>
      <Button onClick={work}> Work </Button>
    </div>
  );
};
export default Actions;
