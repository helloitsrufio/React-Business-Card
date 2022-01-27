import logo from './logo.svg';
import './App.css';
import ProfileImage from './profile.png'
import Content from "./components/Content"

function App() {
  return (
    <section className='parent_container'>
        <section className='profileImage_container'>
          <img src={ProfileImage} className='profileImage'/>
        </section>
        <Content />
    </section>
  );
}

export default App;
