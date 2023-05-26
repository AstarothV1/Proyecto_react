import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, Button } from 'react-native';

const Spinner = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [buttonVisible, setButtonVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            setButtonVisible(true);
        }, 3000);
        return () => clearTimeout(timer)
    });

    const handleButton = () => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
            setButtonVisible(true);
        }, 3000);
        return () => clearTimeout(timer) 
    };


    return (
        <View>
            {isLoading ? (
                <ActivityIndicator size="small" color="pink" />
            ) : (
                <Button title="Spin" onPress={handleButton} />
            )}
        </View>

    );
};

export default Spinner;