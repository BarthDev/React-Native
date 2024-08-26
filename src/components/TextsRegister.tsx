import { Box, Text } from "native-base";

interface TitlesProps {
  title: string;
  subtitle: string;
}

export default function TextsRegister ({
  title,
  subtitle
} : TitlesProps ) : JSX.Element {
    return (
        <Box alignSelf="center" w="80%">
            <Text textAlign="center" fontSize="3xl" bold color="#0085FF" mb={4}>
              {title}
            </Text>
            <Text textAlign="center" fontSize="sm" color="#797878" mb={4}>
              {subtitle}
            </Text>
          </Box>
    )
}