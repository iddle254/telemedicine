import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
//galio
import { Block, Text, theme } from 'galio-framework';

import { articles, nowTheme } from '../constants/';
import { Card, AfyaCard } from '../../components/';

import PraCategory from "../components/PraCategory";
class Landing extends React.Component {
  renderCards = () => {
    return (
      <Block style={styles.container}>
      <Text size={16} style={styles.title}>
        How may we help you today?
      </Text>
        {/* <Card item={articles[0]} horizontal /> */}
        <Block flex row>
          <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
          <Card item={articles[2]} />
          
        </Block>
        <Text size={16} style={styles.title}>
        Family healthcare plans
      </Text>
        <Block flex row>
          {/* <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} /> */}
          {/* {/* <Card item={articles[3]} /> */} 
          <AfyaCard item={articles[3]} />
          
        </Block>
        <Block flex row>
          {/* <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} /> */}
          {/* <Card item={articles[4]} /> */}
          <AfyaCard item={articles[4]} />
          
        </Block>
        <Text size={16} style={styles.title}>
        Not sure who you want to see?
      </Text>
      <PraCategory/>
        {/* <Card item={articles[3]} horizontal />
        <Card item={articles[4]} full /> */}
      </Block>
    );
  };

  render() {
    return (
      <Block flex>
        <ScrollView showsVerticalScrollIndicator={false}>{this.renderCards()}</ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.SIZES.BASE
  },
  title: {
    fontFamily: 'montserrat-bold',
    paddingBottom: theme.SIZES.BASE,
    marginTop: 44,
    color: nowTheme.COLORS.HEADER
  }
});

export default Landing;
