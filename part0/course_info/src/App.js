
function Header(props){
  return(
  <>
  <h1>{props.course['name']}</h1>
  </>
  )
}

function Part(props){
  return(
    <>
      <p>{props.part}&nbsp;:&nbsp;{props.exercise}</p>
    </>
  )
}

function Content(props){
  return(
    <>
  <div>
  <Part part={props.course['parts'][0]['name']} exercise={props.course['parts'][0]['exercises']}/>
  <Part part={props.course['parts'][1]['name']} exercise={props.course['parts'][1]['exercises']}/>
  <Part part={props.course['parts'][2]['name']} exercise={props.course['parts'][2]['exercises']}/>
  </div>
  </>
  )
}

function Total(props){
  return(
    <>
    <p>
    Total number of exercises:{props.course['parts'][0]['exercises']+props.course['parts'][1]['exercises']+props.course['parts'][2]['exercises']}
    </p>
    </>
  )
}


function App() {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course}/>
    </div>
  );
}

export default App;
