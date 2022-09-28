import React, { useRef, useState } from 'react';
import { View, Text, Animated, TouchableOpacity, Dimensions } from 'react-native';
import { styles } from './styles';



  
export function Carousel() {
    // const animationController = useRef(new Animated.Value(0))
    // const [current, setCurrent] = useState(0)

    // function handleCarouselAnimated() {
    //     let newCurrent = current + 1

    //     if (newCurrent >= props.data.length) {
    //         newCurrent = 0
    //     }

    //     Animated.spring(animationController.current, {
    //         toValue: -(Dimensions.get('screen').width * newCurrent),
    //         useNativeDriver: true
    //     }).start()

    //     setCurrent(newCurrent)
    // }

    return (
        <>
            <View style={styles.container}>
                {/* <Animated.View style={[styles.carousel, { transform: [{ translateX: animationController.current }] }]}>

                    {/* {
                        data.map((item, index) => <Text key={index} style={styles.text}>{item}</Text>)
                    } */}

                {/* </Animated.View> */}
                {/* <TouchableOpacity onPress={handleCarouselAnimated} style={styles.button}>
                    <Text style={{ color: '#fff' }}>Scroll</Text>
                </TouchableOpacity> */}
            </View>
        </>
    );
}
