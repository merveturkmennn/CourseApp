import Angular from "./images/angular.png";
import Bootstrap from "./images/bootstrap.jpeg";
import CSharp from "./images/csharp.jpeg";
import Kompleweb from "./images/kompleweb.jpeg";
import './Course.css';
const courseMap ={
    Angular,
    Bootstrap,
    Kompleweb,
    CSharp
}

function Course({courseName}) {
  console.log(courseName);
  console.log(Angular);
  console.log(courseMap[courseName]);
    return ( 

    <div className="courseDiv">
   
    <img   className="course"src={courseMap[courseName]} />
    
   
    
    </div> );
}

export default Course ;