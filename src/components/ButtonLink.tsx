import { ReactNode } from "react";
import { Button, ButtonProps, Tooltip } from "@chakra-ui/react";
import { Link } from "./Link";

export interface LinkButtonProps extends ButtonProps {
  href: string;
  messageInfo?: string;
  isExternal?: boolean;
}

export function ButtonLink({ display, href, children, messageInfo, isExternal = false, ...rest }: LinkButtonProps) {
  return (
    <>
      <Link href={href} display={display} isExternal={isExternal}>
        <Tooltip hasArrow label={messageInfo} isDisabled={!messageInfo}>
          <Button
            cursor="pointer"
            rounded="full"
            {...rest}
          >
            {children}
          </Button>
        </Tooltip>
      </Link>
    </>
  )
}