import logo from './logo.svg';
import './App.css';

function App() {

  const paths = ["app/src/App.tsx","app/data/featuredWidgets.js","app/data/discountinuedWidgets.js","app/style.css","app/data/clearanceWidgets.js","app/src/WidgetList/Widget.tsx","app/src/WidgetList/WidgetList.tsx","app/index.html"];

  let result = [];
  let level = {result};

  paths.forEach((path) => {
    path.split("/").reduce((acc, name) => {
      if (!acc[name]) {
        acc[name] = {result: []};
        acc.result.push({name, children: acc[name].result});
      }

      return acc[name]
    }, level)
  });

  
console.log(result)
  return (
    <div className="App">
      <header className="">
        {result.map(r => {

          return r.name
        })}
      </header>
    </div>
  );
}

export default App;
