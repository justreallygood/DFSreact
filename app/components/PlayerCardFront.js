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

import styles from './PlayerCardStyles';



export default class PlayerCardFront extends Component {
  constructor(props){
    super(props);


  }



  render () {

    var playerStatus = ''
    var primaryTeamColor = ''
    var secondaryTeamColor = ''
    var score = ''
    var playerTeam = this.props.playerTeam

    if (this.props.status) {
      playerStatus = 'Active'
    } else {
      playerStatus = 'Inactive'
    }

    var _validatePrimaryTeamColor = function () {
      if (playerTeam==='ARZ') {
        primaryTeamColor = '#9B2743';
        return primaryTeamColor;
      } else if (playerTeam==='ATL') {
        primaryTeamColor = '#A6192D';
        return primaryTeamColor;
      } else if (playerTeam==='BAL') {
        primaryTeamColor = '#280353';
        return primaryTeamColor;
      } else if (playerTeam==='BUF') {
        primaryTeamColor = '#00338D';
        return primaryTeamColor;
      } else if (playerTeam==='CAR') {
        primaryTeamColor = '#0088CE';
        return primaryTeamColor;
      } else if (playerTeam==='CHI') {
        primaryTeamColor = '#03202F';
        return primaryTeamColor;
      } else if (playerTeam==='CIN') {
        primaryTeamColor = '#FB4F14';
        return primaryTeamColor;
      } else if (playerTeam==='CLE') {
        primaryTeamColor = '#512F2D';
        return primaryTeamColor;
      } else if (playerTeam==='DAL') {
        primaryTeamColor = '#0D254C';
        return primaryTeamColor;
      } else if (playerTeam==='DEN') {
        primaryTeamColor = '#FB4F14';
        return primaryTeamColor;
      } else if (playerTeam==='DET') {
        primaryTeamColor = '#006DB0';
        return primaryTeamColor;
      } else if (playerTeam==='GB') {
        primaryTeamColor = '#203731';
        return primaryTeamColor;
      } else if (playerTeam==='HOU') {
        primaryTeamColor = '#02253A';
        return primaryTeamColor;
      } else if (playerTeam==='IND') {
        primaryTeamColor = '#003B7B';
        return primaryTeamColor;
      } else if (playerTeam==='JAC') {
        primaryTeamColor = '#006778';
        return primaryTeamColor;
      } else if (playerTeam==='KC') {
        primaryTeamColor = '#B20032';
        return primaryTeamColor;
      } else if (playerTeam==='LA') {
        primaryTeamColor = '#13264B';
        return primaryTeamColor;
      } else if (playerTeam==='MIA') {
        primaryTeamColor = '#008D97';
        return primaryTeamColor;
      } else if (playerTeam==='MIN') {
        primaryTeamColor = '#582C81';
        return primaryTeamColor;
      } else if (playerTeam==='NE') {
        primaryTeamColor = '#0D254C';
        return primaryTeamColor;
      } else if (playerTeam==='NO') {
        primaryTeamColor = '#D2B887';
        return primaryTeamColor;
      } else if (playerTeam==='NYG') {
        primaryTeamColor = '#192F6B';
        return primaryTeamColor;
      } else if (playerTeam==='NYJ') {
        primaryTeamColor = '#0C371D';
        return primaryTeamColor;
      } else if (playerTeam==='OAK') {
        primaryTeamColor = '#000000';
        return primaryTeamColor;
      } else if (playerTeam==='PHI') {
        primaryTeamColor = '#003B48';
        return primaryTeamColor;
      } else if (playerTeam==='PIT') {
        primaryTeamColor = '#000000';
        return primaryTeamColor;
      } else if (playerTeam==='SD') {
        primaryTeamColor = '#0072CE';
        return primaryTeamColor;
      } else if (playerTeam==='SF') {
        primaryTeamColor = '#AF1E2C';
        return primaryTeamColor;
      } else if (playerTeam==='SEA') {
        primaryTeamColor = '#002244';
        return primaryTeamColor;
      } else if (playerTeam==='TB') {
        primaryTeamColor = '#D60A0B';
        return primaryTeamColor;
      } else if (playerTeam==='TEN') {
        primaryTeamColor = '#648FCC';
        return primaryTeamColor;
      } else if (playerTeam==='WAS') {
        primaryTeamColor = '#773141';
        return primaryTeamColor;
      }
    }

    var _validateSecondaryTeamColor = function () {

      if (playerTeam==='ARZ') {
        secondaryTeamColor = '#000000';
        return secondaryTeamColor;
      } else if (playerTeam==='ATL') {
        secondaryTeamColor = '#000000';
        return secondaryTeamColor;
      } else if (playerTeam==='BAL') {
        secondaryTeamColor = '#D0B240';
        return secondaryTeamColor;
      } else if (playerTeam==='BUF') {
        secondaryTeamColor = '#C60C30';
        return secondaryTeamColor;
      } else if (playerTeam==='CAR') {
        secondaryTeamColor = '#A5ACAF';
        return secondaryTeamColor;
      } else if (playerTeam==='CHI') {
        secondaryTeamColor = '#DD4814';
        return secondaryTeamColor;
      } else if (playerTeam==='CIN') {
        secondaryTeamColor = '#000000';
        return secondaryTeamColor;
      } else if (playerTeam==='CLE') {
        secondaryTeamColor = '#FE3C00';
        return secondaryTeamColor;
      } else if (playerTeam==='DAL') {
        secondaryTeamColor = '#87909B';
        return secondaryTeamColor;
      } else if (playerTeam==='DEN') {
        secondaryTeamColor = '#002244';
        return secondaryTeamColor;
      } else if (playerTeam==='DET') {
        secondaryTeamColor = '#C5C7CF';
        return secondaryTeamColor;
      } else if (playerTeam==='GB') {
        secondaryTeamColor = '#FFB612';
        return secondaryTeamColor;
      } else if (playerTeam==='HOU') {
        secondaryTeamColor = '#B31B34';
        return secondaryTeamColor;
      } else if (playerTeam==='IND') {
        secondaryTeamColor = '#FFFFFF';
        return secondaryTeamColor;
      } else if (playerTeam==='JAC') {
        secondaryTeamColor = '#9F792C';
        return secondaryTeamColor;
      } else if (playerTeam==='KC') {
        secondaryTeamColor = '#F2C800';
        return secondaryTeamColor;
      } else if (playerTeam==='LA') {
        secondaryTeamColor = '#C9AF74';
        return secondaryTeamColor;
      } else if (playerTeam==='MIA') {
        secondaryTeamColor = '#F5811F';
        return secondaryTeamColor;
      } else if (playerTeam==='MIN') {
        secondaryTeamColor = '#F0BF00';
        return secondaryTeamColor;
      } else if (playerTeam==='NE') {
        secondaryTeamColor = '#C80815';
        return secondaryTeamColor;
      } else if (playerTeam==='NO') {
        secondaryTeamColor = '#D3A205';
        return secondaryTeamColor;
      } else if (playerTeam==='NYG') {
        secondaryTeamColor = '#CA001A';
        return secondaryTeamColor;
      } else if (playerTeam==='NYJ') {
        secondaryTeamColor = '#FFFFFF';
        return secondaryTeamColor;
      } else if (playerTeam==='OAK') {
        secondaryTeamColor = '#C4C8CB';
        return secondaryTeamColor;
      } else if (playerTeam==='PHI') {
        secondaryTeamColor = '#708090';
        return secondaryTeamColor;
      } else if (playerTeam==='PIT') {
        secondaryTeamColor = '#FFB612';
        return secondaryTeamColor;
      } else if (playerTeam==='SD') {
        secondaryTeamColor = '#FFB81C';
        return secondaryTeamColor;
      } else if (playerTeam==='SF') {
        secondaryTeamColor = '#E6BE8A';
        return secondaryTeamColor;
      } else if (playerTeam==='SEA') {
        secondaryTeamColor = '#69BE28';
        return secondaryTeamColor;
      } else if (playerTeam==='TB') {
        secondaryTeamColor = '#89765F';
        return secondaryTeamColor;
      } else if (playerTeam==='TEN') {
        secondaryTeamColor = '#0D254C';
        return secondaryTeamColor;
      } else if (playerTeam==='WAS') {
        secondaryTeamColor = '#FFB612';
        return secondaryTeamColor;
      }
    }

    var _validateScoreColor = function () {

      if (playerTeam==='IND') {
        score = '#000000';
        return score;
      } else if (playerTeam==='NYJ') {
        score = '#000000';
        return score;

      }else {
        score = '#FFFFFF';
        return score;
      }
    }


    return (

      <View style={[styles.container]}>

      <View style = {[styles.playerCard, {backgroundColor: _validatePrimaryTeamColor()}]}>

          <View style = {[styles.scoreTopEdge, {backgroundColor: _validateSecondaryTeamColor()}]}></View>
          <View style = {[styles.scoreBottomEdge, {backgroundColor: _validateSecondaryTeamColor()}]}></View>
          <View style = {[styles.scoreBox,  {backgroundColor: _validateSecondaryTeamColor()}]}>
            <Text style = {[styles.score, {color: _validateScoreColor()}]}> {this.props.score}</Text>
            <Text style = {[styles.scoreLabel, {color: _validateScoreColor()}]}>{'PTS'}</Text>
          </View>

          <View><Text style = {[styles.playerName]}>{this.props.firstName}{'\n'}{this.props.lastName}</Text></View>
          <View>
            <Text style = {[styles.visitorTeamName]}>{this.props.visitorTeamName}</Text>
            <Text style = {[styles.teamDivider]}>{ 'AT'}</Text>
            <Text style = {[styles.homeTeamName]}>{this.props.homeTeamName}</Text>
          </View>

          <View style = {[styles.statusBox]}>
            <View style={[ this.props.status ? styles.activePlayer : styles.inactivePlayer]} />
            <Text style = {[styles.status]}> {playerStatus}</Text>
            <Text style = {[styles.statusLabel]}>{'WK'} {this.props.week} {this.props.playerType} {'Rank #'}{this.props.playerRank}</Text>
          </View>
          <View style = {[styles.statusLeftEdge]}></View>
          <View style = {[styles.statusRightEdge]}></View>
        </View>
      </View>

    );
  }
}
