import Video from "../components/Video";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Petite_maison() {
  return (
    <>
      <Video />
      <Link to="/home">
        <Button content="TRASH" />
      </Link>
    </>
  );
}
