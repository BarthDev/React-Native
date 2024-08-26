import { Ionicons } from "@expo/vector-icons";
import { Button, Icon } from "native-base";

interface IconProps {
    icon: string;
    onPress?: () => void; 
}

export default function BtnIconsCarDetails({
    icon,
    onPress,
    ...rest
}: IconProps): JSX.Element {
    return (
        <Button
            w={"1"}
            borderRadius="full"
            size="lg"
            backgroundColor="#fff"
            h={"1"}
            alignItems="center"
            justifyContent="center"
            onPress={onPress} 
            {...rest}
        >
            <Icon as={Ionicons} name={icon} alignSelf="center" size={3} color="#000" />
        </Button>
    );
}
