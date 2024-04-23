import { Flex, Image, keyframes, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { AniImage } from "../animated/Image";

type Props = {
  step: ReactNode,
  isNextStep?: boolean,
  concluded: boolean,
}

const animationKeyframes = keyframes`
  0% { transform: scale(1)  }
  25% { transform: scale(1.05)  }
  50% {  }
  75% {  }
  100% { transform: scale(1) }
`;

const animationImageKeyframes = keyframes`
  0% { transform: translate(0, 0)  }
  25% { transform: translate(0, -5px)  }
  50% {  }
  75% {  }
  100% { transform: translate(0, 0) }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`
const animationImage = `${animationImageKeyframes} 2s ease infinite`

export function StepCard({ isNextStep = false, step, concluded }: Props) {
  return (
    <Flex
      as={motion.div}
      animation={isNextStep && animation}
      h="52"

      justify="center"
      align="center"
      rounded="3xl"

      borderColor={concluded ? "none" : "white"}
      borderWidth={concluded ? "0px" : "8px"}
      bgColor={concluded ? "white" : "none"}
      position="relative"
    >
      {concluded && <AniImage
        animation={animationImage}

        src="/assets/icons/success-icon.webp"
        alt="ícone de sucesso"
        w="28"

        top="25%"
        left="-2"
        position="absolute"

      />
      }

      <Text
        color={concluded ? "brand.green" : "white"}
        fontFamily="heading"
        fontWeight="black"
        textTransform="uppercase"
        fontSize="2xl"
        textAlign="center"

        pt={concluded ? "10" : "0"}
        pl={concluded ? "10" : "0"}
      >
        {step}
      </Text>
    </Flex>
  )
}