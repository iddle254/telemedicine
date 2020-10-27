import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Animated
  
} from 'react-native';

// Galio components
import { Block, theme } from 'galio-framework';

// Now UI themed components
import { nowTheme, articles } from '../constants';

import { Card } from '../../components';

const { width } = Dimensions.get('screen'); 

function PraCategory() {
    cards = [articles[5], articles[6], articles[7], articles[8], articles[9]]
    return (
        <Block flex style={styles.group}>
            <ScrollView
          horizontal={true}
          style={styles.contentContainer}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: this.scrollX } } },
          ])}
          contentContainerStyle={{
            width: width * 2
          }}>
          {cards.map((item, index) => {
            return <Card key={index} item={item} full titleStyle={styles.productTitle} imageStyle={ { height: 200, width: '100%', resizeMode: 'contain' } }/>
          })}
        </ScrollView>
        </Block>
    )
}


const styles = StyleSheet.create({
    group: {
        paddingTop: theme.SIZES.BASE * 2
      },
      productTitle: {
        color: nowTheme.COLORS.PRIMARY,
        textAlign: 'center',
        fontFamily: 'montserrat-bold',
        fontSize: 18
      }
  });

export default PraCategory
