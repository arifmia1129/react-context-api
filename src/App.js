import './App.css';
import FirstComponent from './components/FirstComponent/FirstComponent';
import SecondComponent from './components/SecondComponent/SecondComponent';

function App() {
  return (
    <div className='px-40 py-10 bg-red-200 h-100'>
      <div className='flex justify-between items-center bg-green-300 p-20 rounded-xl'>
        <h3 className='text-4xl font-bold font-mono'>App Component</h3>
        <div className='text-xl font-bold flex gap-4'>
          <button className='bg-white px-2 rounded-[50%]' title='increase count'>+</button>
          <p>Count: </p>
          <button className='bg-white px-2 rounded-[50%]' title='decrease count'>-</button>
        </div>
      </div>
      <FirstComponent />
      <SecondComponent />
    </div>
  );
}

export default App;
