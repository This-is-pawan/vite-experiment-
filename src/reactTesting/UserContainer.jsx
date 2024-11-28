export const Container = ({ user, logout }) => {
  return (
    <div className="user-container">
      <p>
        Hello there {user}
      </p>
      <button className="btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
};
