import Profile from './Profile/Profile';

const Home = (props) => {
  return (
    <div>
      <div className="container mt-2">
        <Profile theme={props.theme}></Profile>
      </div>
    </div>
  );
};

export default Home;
