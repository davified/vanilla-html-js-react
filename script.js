const friends = ["bob", "alice", "june", "tim"];

const Title = () => <h1>Hello React!</h1>;

const FriendsList = () => {
  return friends.map(friend => <li>{friend}</li>);
};

const App = () => {
  return (
    <div>
      <Title />
      Here are my friends:
      <FriendsList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
