import {useEffect} from "react";
import {getBriefList} from "../../services/BriefData.service";

const BriefList = () => {
  useEffect(() => {
    getBriefList();
  }, []);

  return <h1>Hello!</h1>;
}

export default BriefList;
