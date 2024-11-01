import React from 'react'
import { useNavigate } from 'react-router-dom';

const SetNewTargetBtn = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
    navigate('/NewInspection')
  }

  return (
    <button onClick={handleLogin} className="bg-orange-500 py-2 px-8 text-white font-bold text-base">
        + Set New Target
    </button>
  )
}

export default SetNewTargetBtn