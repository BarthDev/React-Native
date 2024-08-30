import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Box, Icon, Text, VStack, HStack } from "native-base";

interface BtnConfigProps {
    icon: string,
    text: string,
    orientation?: "vertical" | "horizontal",
    alignLeft?: boolean,
}

export default function BtnConfig({
    icon,
    text,
    orientation = "vertical",
    alignLeft = false,
}: BtnConfigProps): JSX.Element {
    return (
        <Box flex={1} backgroundColor="#EDEDED" h="24" borderRadius="lg" m={1}>
            {orientation === "vertical" ? (
                <VStack
                    alignItems={alignLeft ? "flex-start" : "center"}
                    justifyContent="center"
                    h="100%"
                    ml={alignLeft ? 2 : 0}
                >
                    <Icon as={MaterialCommunityIcons} name={icon} size={8} color="#767676" mb={2} />
                    <Text fontSize="xs" color="#7D7D7D">{text}</Text>
                </VStack>
            ) : (
                <HStack
                    alignItems="center"
                    justifyContent={alignLeft ? "flex-start" : "center"}
                    h="100%"
                    space={2}
                    ml={alignLeft ? 4 : 0}
                >
                    <Icon as={MaterialCommunityIcons} name={icon} size={8} color="#767676" />
                    <Text fontSize="xs" color="#7D7D7D">{text}</Text>
                </HStack>
            )}
        </Box>
    )
}
