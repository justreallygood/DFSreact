'use strict'


import React, {
  PropTypes,
  Component
} from 'react';

import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import FlipCard from 'react-native-flip-card';
import PlayerCardFront from './PlayerCardFront';
import PlayerCardBack from './PlayerCardBack';
import styles from './PlayerCardStyles';


export default class PlayerCard extends Component {
  constructor(props){
    super(props);

  }

  render(){


    return (
      <FlipCard
        style={styles.flipCard}
        friction={5}
        perspective={3500}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
        onFlipped={(isFlipped)=>{console.log('isFlipped', isFlipped)}}
      >
      <View style={styles.face}>
        <PlayerCardFront
          playerType={this.props.playerType}
          playerRank={this.props.playerRank}
          playerLocation={this.props.playerLocation}
          playerTeam={this.props.playerTeam}
          score={this.props.score}
          firstName={this.props.firstName}
          lastName={this.props.lastName}
          visitorTeamName={this.props.visitorTeamName}
          homeTeamName={this.props.homeTeamName}
          status={this.props.status}
          week={this.props.week}

          />
      </View>


      <View style={styles.back}>
        <PlayerCardBack
          playerType={this.props.playerType}
          playerRank={this.props.playerRank}
          playerLocation={this.props.playerLocation}
          playerTeam={this.props.playerTeam}
          score={this.props.score}
          firstName={this.props.firstName}
          lastName={this.props.lastName}
          visitorTeamName={this.props.visitorTeamName}
          homeTeamName={this.props.homeTeamName}
          status={this.props.status}
          week={this.props.week}
          stat1={this.props.stat1}
          stat2={this.props.stat2}
          stat3={this.props.stat3}
          stat4={this.props.stat4}
          stat5={this.props.stat5}
          stat6={this.props.stat6}
          statLabel1={this.props.statLabel1}
          statLabel2={this.props.statLabel2}
          statLabel3={this.props.statLabel3}
          statLabel4={this.props.statLabel4}
          statLabel5={this.props.statLabel5}
          statLabel6={this.props.statLabel6}
        />
      </View>
    </FlipCard>

    );
  }
}





PlayerCard.propTypes = {
  playerType: PropTypes.string, // QB, RB, WR, TE, K, DST
  playerRank: PropTypes.number,
  playerLocation: PropTypes.bool, // home=true, away=false
  playerTeam: PropTypes.string, // 2 or 3 letter team code
  score: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  visitorTeamName: PropTypes.string,
  homeTeamName: PropTypes.string,
  status: PropTypes.bool, // active=true, inactive=false
  week: PropTypes.number,

}

PlayerCard.defaultProps = {
  playerType: 'QB',
  playerRank: 1,
  playerLocation: false,
  playerTeam: "NYG",
  score: 22,
  firstName: 'Eli',
  lastName: 'Manning',
  visitorTeamName: 'GIANTS',
  homeTeamName: 'REDSKINS',
  status: false,
  week: 16,
}
