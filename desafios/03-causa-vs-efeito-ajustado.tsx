import { useEffect, useState } from "react"

interface User {
  name: string;
  github: string;
}

function fetchUserData() {
  return {
    data: {
      user: {
        name: 'Joseph Oliveira',
        github: 'https://github.com/josepholiveira'
      }
    }
  }
}

export function UserProfile() {
  const [isLoadingUserData, setIsLoadingUserData] = useState(true)
  const [userData, setUserData] = useState<User | undefined>()

  useEffect(() => {
    async function loadUserData() {
      setIsLoadingUserData(true)

      const fetchUserResponse = fetchUserData()

      setUserData(fetchUserResponse.data.user)
      
      setIsLoadingUserData(false)
    }

    loadUserData()
  }, [])

  if (isLoadingUserData) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <img src={`${userData?.github}.png`} alt="" />
      <a href={userData?.github}>{userData?.name}</a>
    </div>
  )
}
