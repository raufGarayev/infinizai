import React from 'react'
import './Breadcrumb.sass'
import {AiOutlineHome} from 'react-icons/ai'

const Breadcrumb = ({bc}) => {
  return (
    <section className='breadcrumb'>
        <p>{bc}</p>
        <div className="breadcrumb-dir">
            <AiOutlineHome className='bc-icon' /> <span>Home /</span> <span className='dir'>{bc}</span>
        </div>
    </section>
  )
}

export default Breadcrumb