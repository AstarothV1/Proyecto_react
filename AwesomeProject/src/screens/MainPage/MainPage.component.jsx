import React from 'react';
import {View, Text, Pressable, TextInputComponent} from 'react-native';
import styles from './styles';
import Typography from '../../components/Typography/typography';
import {Constants} from '../../common';
import CustomButton from '../../components/CustomButton/customButton';
import CustomCard from '../../components/Card/customCard';
import Carusel from '../../components/Carusel/carusel';
import InputC from '../../components/InputC/inputC';
import Spinner from '../../components/Spinner/Spinner';

const MainPageComponent = props => {
  const {} = props;

  const handleOnPress = () => {
    console.log('Hola mundo');
  };
  return (
    <View style={styles.position}>
      <View>
        {/*<Typography
          type={Constants.component.typography.typeTypography.h1}
          text={Constants.component.typography.typographyTexts.helloWorld}
        />*/}
      </View>
      <View>
        <CustomCard />
      </View>
      {/* <View>
        <Carusel />
      </View> */}
      {/* <View>
        <InputC/>
      </View> */}
      {/* <View>
        <Spinner/>
      </View> */}
    </View>
  );
};

export default MainPageComponent;
