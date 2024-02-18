const App = (args)=>{
  let now = new Date()
  let b = 10
  let a = 20
  let friends=[
    {name : 'ram', age :29},
  ]
  let stringarray=['apple','orange']
  console.log(now,a+b,args)
  return(
    <>
      <p>Hello World, it is {now.toString()}</p>
     <p>{a} plus {b} is {a + b}</p> 
      <h1>hello world</h1>
      <p>
        hello {args.name} and age {args.age}
      </p>
      <p>{friends[0].name}</p>
      <p>my favourite food {stringarray}</p>
    </>
  )
}

export default App