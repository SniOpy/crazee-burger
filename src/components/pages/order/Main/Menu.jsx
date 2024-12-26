import React, { useState } from 'react'
import { fakeMenu2 } from '../../../../fakeData/fakeMenu'
import Card from './Card'
import { formatPrice } from "../../../../utils/maths";

export default function Menu() {

    const [menu, setMenu] = useState(fakeMenu2)
  return (
    <div className="menu">
          {menu.map(({id,title, imageSource,price}) => {
            return (
              <Card
              imageSource={imageSource} title={title} leftDescription={formatPrice(price)} key={id}/>
            )
          })}
        </div>
  )
}
