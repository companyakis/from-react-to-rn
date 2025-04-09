import { ScrollView, StyleSheet, Text } from 'react-native';
import AreaInfo from '../../components/AreaInfo';

export default function App() {


  return (
    <ScrollView >
      <AreaInfo title={"Deep RL"} areaPic={require("../../assets/drl.jpg")} info={"Deep Reinforcement Learning"} />
      <AreaInfo title={"Web3"} areaPic={require("../../assets/web3.jpg")} info={"Web3, Blockchain and FinTech"} />
      <AreaInfo title={"AI Agents"} areaPic={require("../../assets/aia.jpg")} info={"AI Agents for Your Business"} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({


});
