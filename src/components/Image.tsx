import { Box, chakra, BoxProps } from "@chakra-ui/react";
import NextImage, { ImageProps as NextImageProps, ImageLoaderProps } from "next/image";

const ChakraNextUnwrappedImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "layout",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
      "priority",
      "loader ",
    ].includes(prop),
});

const myLoader = (resolverProps: ImageLoaderProps): string => {
  return `${resolverProps.src}?w=${resolverProps.width}&q=${resolverProps.quality}`;
};

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);


export type ChakraNextImageProps = NextImageProps & BoxProps

export const Image = ({ src, alt, width, quality, height, layout, placeholder, priority, ...rest }: ChakraNextImageProps) => {
  return (
    <Box w="100%" overflow="hidden" align="center" justify="center" className="group" pos="relative" {...rest} >
      <ChakraNextUnwrappedImage
        w="100%"
        h="100%"
        loader={myLoader}
        width={width}
        quality={quality}
        height={height}
        placeholder={placeholder}
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(700, 475),
        )}`}
        layout={layout}
        src={src}
        alt={alt}
        transition="all 0.2s"
        position={rest.position}
        objectFit={rest.objectFit}
        priority={priority}
        css={{
          width: '100%',
        }}
      />
    </Box>
  );
};