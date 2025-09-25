import { useParams } from "react-router-dom";

export default function ReportsDetail() {
  const { id } = useParams();
  return <h3>리포트 상세 페이지 - ID: {id}</h3>;
}
