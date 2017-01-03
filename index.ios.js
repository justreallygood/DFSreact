import React, {
  Component
} from 'react';

import {
  AppRegistry,
  Animated,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import PlayerCard from './app/components/PlayerCard';


class DFSreact extends Component {
  constructor(props){
    super(props);

  }

  render() {

      return (

        <View style={{flex: 1}}>


        <ScrollView
          scrollEventThrottle={5}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flex: 2, top: 100}}
          style={StyleSheet.absoluteFill}>

          <PlayerCard
            playerType="QB"
            playerRank={1}
            playerLocation={false}
            playerTeam="NYG"
            score={22}
            firstName="Eli"
            lastName="Manning"
            visitorTeamName="GIANTS"
            homeTeamName="REDSKINS"
            status={true}
            week={16}
            stat1={256.5}
            stat2={1.7}
            stat3={'63.0%'}
            stat4={16}
            stat5={216.98}
            stat6={39.82}
            statLabel1={'YD/G'}
            statLabel2={'TD/G'}
            statLabel3={'CMP%'}
            statLabel4={'INT'}
            statLabel5={'FP'}
            statLabel6={'NEP'}
            />

            <PlayerCard
              playerType="QB"
              playerRank={16}
              playerLocation={true}
              playerTeam="WAS"
              score={18}
              firstName="Kirk"
              lastName="Cousins"
              visitorTeamName="GIANTS"
              homeTeamName="REDSKINS"
              status={false}
              week={16}
              stat1={308.7}
              stat2={1.6}
              stat3={'67.3%'}
              stat4={10}
              stat5={289.20}
              stat6={169.60}
              statLabel1={'YD/G'}
              statLabel2={'TD/G'}
              statLabel3={'CMP%'}
              statLabel4={'INT'}
              statLabel5={'FP'}
              statLabel6={'NEP'}
              />

          <View style={{flex: 1}} />
        </ScrollView>
      </View>

      );
    }
  }

AppRegistry.registerComponent('DFSreact', () => DFSreact);
