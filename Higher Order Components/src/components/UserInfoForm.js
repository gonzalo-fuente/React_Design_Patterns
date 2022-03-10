import { withEditableUser } from "../withEditableUser";

export const UserInfoForm = withEditableUser(
  ({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {};

    return user ? (
      <form className="d-grid">
        <label className="form-label">Name:</label>
        <input
          className="form-control"
          value={name}
          onChange={(e) => onChangeUser({ name: e.target.value })}
        />
        <label className="form-label">Age:</label>
        <input
          className="form-control"
          type="number"
          value={age}
          onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
        />
        <label className="form-label">Hair Color:</label>
        <input
          className="form-control"
          value={hairColor}
          onChange={(e) => onChangeUser({ hairColor: e.target.value })}
        />
        <button className="btn btn-danger mt-2" onClick={onResetUser}>
          Reset
        </button>
        <button className="btn btn-success mt-2" onClick={onSaveUser}>
          Save Changes
        </button>
      </form>
    ) : (
      <p>Loading...</p>
    );
  },
  "234"
);
