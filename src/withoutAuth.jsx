import { useRouter } from 'next/router'
import React from 'react'

const withOuthAuth = (Component) => { 
    const AuthenticatedComponent = () => {
      const router = useRouter()
      let ignore = true
      React.useEffect(() => {
        if (ignore) validate()
        return () => {
          ignore = false
        }
      }, [])
      const validate = async () => {
        const token = await localStorage.getItem('_q')
        console.log(token)
        if (token) {
          router.push('/')
        }
      }
      return <Component /> // Render whatever you want while the authentication occurs
  };

  return AuthenticatedComponent;
}


export default withOuthAuth