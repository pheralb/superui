import ButtonDemo, { ButtonWithIcon, CustomButton } from "@/demo/button";
import { BasicInput, InForm, InputWithLabel } from "@/demo/input";
import NextLink from "next/link";
import {
  Divider,
  Heading,
  ListItem,
  OrderedList,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
  Link,
  TableColumnHeaderProps,
  ListProps,
  TableProps,
  TextProps,
  TableRowProps,
  TableBodyProps,
  HeadingProps,
  LinkProps,
  ListItemProps,
} from "@chakra-ui/react";

import Pre from "./pre";
import { AvatarDemo, AvatarGroupDemo } from "@/demo/avatar";
import CheckboxDemo from "@/demo/checkbox";
import { PinCodeDemo } from "@/demo/pinCode";
import ButtonGroup from "@/demo/buttonGroup";
import { LinearProgressDemo, CircularProgressDemo } from "@/demo/progress";

const CustomHeading = ({ as, id, ...props }: HeadingProps) => {
  if (id) {
    return (
      <NextLink href={`#${id}`}>
        <Link>
          <Heading
            as={as}
            display="inline"
            mb={4}
            id={id}
            {...props}
            _hover={{
              underline: "none",
              _before: {
                content: '"#"',
                position: "relative",
                marginLeft: "-1.2ch",
                paddingRight: "0.2ch",
                color: "gray.500",
              },
            }}
          />
        </Link>
      </NextLink>
    );
  }
  return <Heading as={as} {...props} />;
};

const H2 = (props: HeadingProps) => <CustomHeading as="h2" {...props} />;

export const MDXComponents = {
  a: (props: LinkProps) => (
    <Link
      textDecoration="underline"
      isExternal={props.href?.startsWith("#") ? false : true}
      {...props}
    />
  ),
  hr: (props: TextProps) => <Divider {...props} />,
  h1: (props: HeadingProps) => (
    <Heading as="h1" mt={8} mb={3} size="3xl" fontWeight="light" {...props} />
  ),
  h2: (props: HeadingProps) => <CustomHeading as="h2" {...props} />,
  h3: (props: HeadingProps) => (
    <Heading
      as="h3"
      mt={12}
      mb={2}
      fontSize="24px"
      fontWeight="bold"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => (
    <Heading
      as="h4"
      mt={3}
      mb={3}
      fontSize="24px"
      fontWeight="light"
      {...props}
    />
  ),
  h5: (props: HeadingProps) => (
    <Heading as="h5" mt={8} mb={3} size="md" fontWeight="light" {...props} />
  ),
  h6: (props: HeadingProps) => (
    <Heading as="h6" mt={8} mb={3} size="sm" fontWeight="light" {...props} />
  ),
  p: (props: TextProps) => <Text fontSize="lg" mb={3} {...props} />,
  table: (props: TableProps) => (
    <div className="flex flex-col w-full max-w-screen-sm overflow-x-auto md:max-w-screen-lg my-5">
      <Table
        variant="simple"
        width={"100%"}
        overflowX={"auto"}
        maxW={"100%"}
        {...props}
      />
    </div>
  ),
  thead: (props: TableBodyProps) => <Thead {...props} />,
  tbody: (props: TableBodyProps) => <Tbody {...props} />,
  th: (props: TableColumnHeaderProps) => <Th {...props} />,
  tr: (props: TableRowProps) => <Tr {...props} />,
  td: (props: TableColumnHeaderProps) => <Td {...props} />,
  ul: (props: ListProps) => <UnorderedList styleType="none" {...props} />,
  ol: (props: ListProps) => <OrderedList styleType="none" {...props} />,
  li: (props: ListItemProps) => <ListItem {...props} />,
  sub: (props: TextProps) => <Text as="sub" {...props} />,
  Button: () => <ButtonDemo />,
  ButtonWithIcon: () => <ButtonWithIcon />,
  CustomButton: () => <CustomButton />,
  BasicInput: () => <BasicInput />,
  InputWithLabel: () => <InputWithLabel />,
  InForm: () => <InForm />,
  AvatarDemo: () => <AvatarDemo />,
  AvatarGroupDemo: () => <AvatarGroupDemo />,
  CheckboxDemo: () => <CheckboxDemo />,
  PinCodeDemo: () => <PinCodeDemo />,
  ButtonGroupDemo: () => <ButtonGroup />,
  LinearProgressDemo: () => <LinearProgressDemo />,
  CircularProgressDemo: () => <CircularProgressDemo />,
  pre: Pre,
};
