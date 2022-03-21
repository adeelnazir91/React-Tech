import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
 import FunctionClick from './components/FunctionClick'
 import ClassClick from './components/ClassClick'
 import ParentComponent from './components/ParentComponent'
 import UserGreeting from './components/UserGreeting'
 import Testtabs from './components/Testtabs'
 import ArticleListing from './components/ArticleListing'
 import ShowArticles from './components/ShowArticles'
 import ToptenBooks from './components/ToptenBooks'
 import ShowtoptenRecords from './components/showtoptenRecords'
 
 
function App() {

  return (
    <div className="App">

      <ToptenBooks/>

       {/* <ShowArticles/> */}

      {/* <ArticleListing/> */}

      {/* <Testtabs/> */}

       {/* <UserGreeting/> */}
         
        {/* <ParentComponent/> */}
      
          {/* <FunctionClick/>
          <ClassClick/> */}
       {/* <Greet name="Software enginner" heroName="Batman">
            this is my function children props 
       </Greet>
       <Welcome name="This is my 1st component through props">
         This is my clsss children props 
       </Welcome>
       <Message/> */}
   
      
 
    </div>
  );
}

export default App;
