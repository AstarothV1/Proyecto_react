import React from "react";
import { View, Text, Image} from 'react-native';
import {styles} from './style';
import Swiper from "react-native-swiper";

const CarouselComponent = (props) => {
    const images = [
        { id: 1, source: require('../../Images/belico.jpg') },
        { id: 2, source: require('../../Images/otaku.jpg') },
        { id: 3, source: require('../../Images/perritoBocina.jpg') },
        
] 
 
return (
    <View styles={styles.container}>
        <Swiper showsButtons={true}>
            {images.map(images => (
                <View key={images.id}>
                    <Image styles={styles.image} source={images.source} />
                </View>
            ))}
        </Swiper>
     </View>
);
};

export default  CarouselComponent