import { useState, useRef } from 'react'
import styles from '@/styles/components/profile\MyCreation.module.sass'

// My Components
import CreationCard from '@/components/atoms/profile/CreationCard'
import { CreationInfo, creationList } from '@/components/atoms/profile/creations'

// MaterialUI
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

const MyCreation = () => {

  return (
    <>
      {
        creationList.map((el: CreationInfo, index: number) => (
          <CreationCard
            key={index}
            creation={el}
            placement={(index % 2) ? 'right' : 'left'}
          />
        ))
      }
    </>
  )
}
export default MyCreation