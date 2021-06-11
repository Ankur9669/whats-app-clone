import './App.css';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';

function App() {
  return (
    <div className="app">
      
      {/* SidebarLeft component */}
      <SidebarLeft/>
      
      {/* SidebarRight component */}
      <SidebarRight/>
    </div>
  );
}

export default App;
