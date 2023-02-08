import { useSelector, useDispatch } from "react-redux";
import { SET_TO_UPDATE, DELETE_STAGIAIRE } from "../features/stagiaireSlice";
const StagiaireList = () => {
  const dispatch = useDispatch();
  const stagiaires = useSelector(state => state.stagiaire.stagiaires);
  return (
    <div>
      <h5 className="text-center my-4">List des stagiaires</h5>
      <table className="table table-striped text-center table-hover">
        <thead>
          <tr>
            <th>nom</th>
            <th>prénom</th>
            <th>filiére</th>
            <th>age</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {stagiaires.map((stg, i) => (
            <tr key={i}>
              <td>{stg.nom}</td>
              <td>{stg.prenom}</td>
              <td>{stg.filier}</td>
              <td>{stg.age}</td>
              <td>
                <button
                  className="btn btn-sm btn-success me-2"
                  onClick={() => dispatch(SET_TO_UPDATE(stg.id))}
                >
                  edit
                </button>
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => dispatch(DELETE_STAGIAIRE(stg.id))}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StagiaireList;
