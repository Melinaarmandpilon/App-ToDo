import React from 'react'

import Active from '../Filters/Acitve'
import All from '../Filters/All'
import Completed from '../Filters/Completed'
import Clearcompleted from '../Filters/Clearcompleted'
import Count from '../Count/Count'

export default function Footer() {

    return (
        <div className="footer">
            <div className="footer_btn">
            <Count/>
            <All/>
            <Completed/>
            <Active/>
            <Clearcompleted/>
            </div>
        </div>
    )
}
