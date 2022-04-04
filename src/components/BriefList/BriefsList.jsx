import {useEffect} from "react";
import {getBriefList} from "../../services/BriefData.service";

const BriefList = (props) => {
  useEffect(() => {
    getBriefList();
  }, []);

  return <h1>Hello, {props.name}!</h1>;
}

export default BriefList;
