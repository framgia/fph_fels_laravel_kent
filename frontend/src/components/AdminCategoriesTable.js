import { Link } from "react-router-dom";

export default function AdminCategoriesTable(props) {
  return (
    <tr>
      <td>{props.title}</td>
      <td className="text-justify adminTable font-italic">{props.description}</td>
      <td>
        <Link className="text-dark" to={props.toAddWord}>Add Word | </Link>
        <Link className="text-dark" to={props.toEdit}>Edit | </Link>
        <Link className="text-dark" to={props.toDelete}>Delete</Link>
      </td>
    </tr>
  );
};
