import { useState } from 'react'

function App() {
  return <RobotList />
}

const RobotList = () => {
  const [robotList, setRobotList] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const addRobot = () => {
    if (!inputValue.trim()) {
      return
    }
    if (robotList.includes(inputValue)) {
      setErrorMessage('Robot listede bulunmakta!')
    } else {
      setRobotList([...robotList, inputValue])
      setErrorMessage('')
    }
    setInputValue('')
  }

  const removeRobot = (robotName) => {
    setRobotList(robotList.filter((robot) => robot !== robotName))
  }

  return (
    <div className='flex flex-col items-center min-h-screen bg-gray-100 py-10'>
      <h1 className='text-3xl font-bold mb-6'>Robot List</h1>

      
      <div className='flex items-center space-x-2'>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Robot ismi giriniz'
          className='border border-gray-300 rounded-lg p-2 text-center'
        />
        <button
          onClick={addRobot}
          className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700'
        >
          Robot Ekle
        </button>
      </div>

      {errorMessage && <p className='text-red-500 mt-2'>{errorMessage}</p>}

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
        {robotList.map((robot, index) => (
          <div
            key={index}
            className='flex flex-col items-center m-4 cursor-pointer'
            onClick={() => removeRobot(robot)}
          >
            <img
              src={`https://robohash.org/${robot}`}
              alt={`Robot ${robot}`}
              className='w-40 h-40'
            />
            <p className='mt-2'>{robot}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
