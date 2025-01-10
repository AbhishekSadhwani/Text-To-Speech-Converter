import { Console, Header} from './Components';

function App() {

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100'>
      <div className='container mx-auto py-8 px-4'>
        <Header />
        <Console />
      </div>
    </div>
  );
}

export default App;
