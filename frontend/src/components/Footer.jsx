import React from 'react'
import { FaDev } from 'react-icons/fa'
import { Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div style={{height:"70vh"}}>
        <Link as={RouterLink}  position={"fixed"} bottom={10} left={0}   to={'/developers'}>
			<FaDev size={40} />
	</Link>
    </div>
  )
}

export default Footer
