import { VStack, Text, Box, Image, Link } from "native-base";


import { ImageSourcePropType } from "react-native";

interface imgBrandsProps {
    source: ImageSourcePropType;
    alt: string;
}

export default function Brands ({
    source,
    alt,
}: imgBrandsProps ) : JSX.Element {
    return (
        <VStack flex={1} justifyContent="space-between" w="100%">
            <Link href="https://nativebase.o">
                <Box 
                w="69"
                h="69"
                borderRadius = "80" 
                overflow = "hidden"
                borderWidth = "2"
                justifyContent="center"
                alignItems="center"
                backgroundColor="#E9E8E8"
                borderColor = "#E9E8E8" 
                >
                
                    <Image source={source} alt={alt} />
                    
                </Box>
            </Link>
        </VStack>
    )
}