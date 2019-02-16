// @flow
import React, { PureComponent } from 'react'
import { hot } from 'react-hot-loader'
import { Team, Radar, ScorePlate, PlayerPlate } from './'

// $FlowIgnore
import '../index.less'

type Props = {}

class Main extends PureComponent<Props> {
  render () {
    return (
      <div className='overlay'>
        <div className='overlay-left'>
          <Radar />
          <div className='overlay-left-dummy' />
          <Team team='CT' />
        </div>
        <div className='overlay-center'>
          <ScorePlate />
          <div className='overlay-center-dummy' />
          <PlayerPlate />
        </div>
        <div className='overlay-right'>
          <Team team='T' />
        </div>
      </div>
    )
  }
}

export default hot(module)(Main)
