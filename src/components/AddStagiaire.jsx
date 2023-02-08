import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_STAGIAIRE, UPDATE_STAGIAIRE } from "../features/stagiaireSlice";
import { v4 as uuid } from "uuid";
const AddStagiaire = () => {
  const dispatch = useDispatch();
  const updating = useSelector(state => state.stagiaire?.updating);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [filier, setFilier] = useState("");
  const [age, setAge] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (nom == "" || prenom == "" || filier == "" || age == "")
      return alert("Please fill up all inputs");
    else if (!!updating) {
      const stg = {
        ...updating,
        nom,
        prenom,
        filier,
        age,
      };
      dispatch(UPDATE_STAGIAIRE(stg));
    } else {
      const stg = {
        id: uuid(),
        nom,
        prenom,
        filier,
        age,
      };
      dispatch(ADD_STAGIAIRE(stg));
    }
    setNom("");
    setPrenom("");
    setFilier("");
    setAge("");
    return e.target.reset();
  };
  useEffect(() => {
    if (!!updating) {
      setNom(updating.nom);
      setPrenom(updating.prenom);
      setFilier(updating.filier);
      setAge(updating.age);
    }
  }, [updating]);
  return (
    <div className="mb-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">
            Nom
          </label>
          <input
            type="text"
            id='nom'
            className="form-control-sm form-control"
            onChange={e => setNom(e.target.value)}
            value={nom}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="prenom" className="form-label">
            Prénom
          </label>
          <input
            type="text"
            id='prenom'
            className="form-control-sm form-control"
            onChange={e => setPrenom(e.target.value)}
            value={prenom}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="filier" className="form-label">
            Filiére
          </label>
          <input
            type="text"
            id='filier'
            className="form-control-sm form-control"
            onChange={e => setFilier(e.target.value)}
            value={filier}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            id='age'
            className="form-control-sm form-control"
            onChange={e => setAge(e.target.value)}
            value={age}
          />
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className={`btn btn-${!!updating ? "success" : "primary"}`}
          >
            {!!updating ? "edit" : "Ajouter"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStagiaire;
