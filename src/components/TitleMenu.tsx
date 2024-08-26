import { VStack, Text, Box, Link } from "native-base";

interface titlesMenuProps{
    title: string,
    btn: string

}

export default function TitleMenu({
    title,
    btn
}:titlesMenuProps) : JSX.Element {
    return (
        <VStack>
            <Box mt={4} w="80%" flexDir="row" alignSelf="center" alignItems="center" justifyContent="space-between">
                <Text fontSize="2xl">{title}</Text>
                <Link  href="https://nativebase.o"><Text fontSize="md" color="#0085FF">{btn}</Text></Link>
            </Box>
        </VStack>
    )
}