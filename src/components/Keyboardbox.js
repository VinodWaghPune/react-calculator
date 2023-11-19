import React from 'react'
import Buttonbox from './Buttonbox'

function Keyboardbox() {
  return (
    <div className='grid grid-rows-5 grid-flow-col gap-2 m-5' >
        <Buttonbox text={'C'}/>
        <Buttonbox text={'7'}/>
        <Buttonbox text={'4'}/>
        <Buttonbox text={'1'}/>
        <Buttonbox text={'0'}/>
        <Buttonbox text={'/'}/>
        <Buttonbox text={'8'}/>
        <Buttonbox text={'5'}/>
        <Buttonbox text={'2'}/>
        <Buttonbox text={'.'}/>
        <Buttonbox text={'*'}/>
        <Buttonbox text={'9'}/>
        <Buttonbox text={'6'}/>
        <Buttonbox text={'3'}/>
        <Buttonbox text={' '}/>
        <Buttonbox text={'-'}/>
        <div className='row-span-2 bg-white'>
        <Buttonbox text={'+'}  />

        </div>
        
        
        <div className='row-span-2 bg-white'>
        <Buttonbox text={'='}/>

        </div>
       
       
        
        
    </div>
  )
}

export default Keyboardbox