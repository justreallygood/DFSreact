import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(52,52,52,0)',
    overflow:'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreBox: {
    position: 'absolute',
    top: 0,
    left: 260,
    right: 0,
    height: 40,
    width: 75,
    alignItems: 'flex-end',
    borderRadius: 5,
    backgroundColor: '#CA001A',
  },
  scoreTopEdge: {
    position: 'absolute',
    top: 0,
    left: 260,
    right: 0,
    height: 15,
    width: 15,
    alignItems: 'flex-end',
    borderRadius: 0,
    backgroundColor: '#CA001A',
  },
  scoreBottomEdge: {
    position: 'absolute',
    top: 25,
    left: 320,
    right: 0,
    height: 15,
    width: 15,
    alignItems: 'flex-end',
    borderRadius: 0,
    backgroundColor: '#CA001A',
  },
  scoreLabel: {
    position: 'absolute',
    top: 18,
    left: 45,
    right: 0,
    height: 15,
    width: 25,
    alignItems: 'flex-end',
    color: '#FFFFFF',
    fontSize: 10,
    fontFamily: 'Arial',
  },
  score: {
    position: 'absolute',
    top: 9,
    left: 10,
    right: 0,
    height: 25,
    width: 40,
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'American Typewriter',
    fontWeight: '400'
  },
  statusBox: {
    position: 'absolute',
    top: 160,
    left: 0,
    right: 0,
    height: 40,
    width: 335,
    alignItems: 'flex-end',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  statusLeftEdge: {
    position: 'absolute',
    top: 160,
    left: 0,
    right: 0,
    height: 15,
    width: 15,
    alignItems: 'flex-end',
    borderRadius: 0,
    backgroundColor: '#FFFFFF'
  },
  statusRightEdge: {
    position: 'absolute',
    top: 160,
    left: 320,
    right: 0,
    height: 15,
    width: 15,
    alignItems: 'flex-end',
    borderRadius: 0,
    backgroundColor: '#FFFFFF'
  },
  statusLabel: {
    position: 'absolute',
    top: 15,
    left: 200,
    right: 0,
    height: 15,
    width: 115,
    alignItems: 'flex-end',
    color: '#696969',
    fontSize: 12,
    fontFamily: 'Arial',
  },
  status: {
    position: 'absolute',
    top: 15,
    left: 35,
    right: 0,
    height: 15,
    width: 100,
    alignItems: 'center',
    color: '#696969',
    fontSize: 12,
    fontFamily: 'Arial',
  },
  playerName: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 0,
    height: 100,
    width: 240,
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: 25,
    fontFamily: 'Courier New',
    fontWeight: '500'
  },
  visitorTeamName: {
    position: 'absolute',
    top: 120,
    left: 20,
    right: 0,
    height: 20,
    width: 150,
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'HelveticaNeue-CondensedBlack',
    fontWeight: '100'
  },
  teamDivider: {
    position: 'absolute',
    top: 122,
    left: 65,
    right: 0,
    height: 20,
    width: 150,
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: 10,
    fontFamily: 'HelveticaNeue-CondensedBlack',
    fontWeight: '100'
  },
  homeTeamName: {
    position: 'absolute',
    top: 120,
    left: 85,
    right: 0,
    height: 20,
    width: 150,
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'HelveticaNeue-CondensedBlack',
    fontWeight: '100'
  },
  activePlayer: {
    width: 6,
    height: 6,
    borderRadius: 16/2,
    backgroundColor: 'green',
    position: 'absolute',
    top: 19,
    left: 25,
    right: 8,
    bottom: 8,
  },
  inactivePlayer: {
    width: 6,
    height: 6,
    borderRadius: 16/2,
    backgroundColor: 'red',
    position: 'absolute',
    top: 19,
    left: 25,
    right: 8,
    bottom: 8,
  },
  button: {
    position: 'absolute',
    top: 15,
    left: 170,
  },
  playerDetails: {
    position: 'absolute',
    top: 308,
    left: 20,
    right: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  playerCard: {
    position: 'absolute',
    top: 0,
    left: 20,
    right: 20,
    height: 200,
    borderRadius: 10,
    backgroundColor: '#192F6B',
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  card: {
    width:375,
  },
  face: {
    flex:1,

  },
  back: {
    flex:1,
  },
  statsHolder: {
    position: 'absolute',
    top: 70,
    left: 20,
    right: 0,
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  stats: {
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Futura',
    textAlign: 'center',
  },
  statsLabel: {
    alignItems: 'center',
    color: '#f0ffff',
    fontSize: 10,
    fontFamily: 'Futura',
    textAlign: 'center',
  },
  flipCard: {
    flex: 1,
    borderWidth: 0
  }
});
