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
import { Button } from "@superui/styles";
import { ButtonProps } from "@superui/styles/dist/types/Button/button.types";

export const MDXComponents = {
  a: (props: LinkProps) => (
    <Link textDecoration="underline" isExternal={true} {...props} />
  ),
  hr: (props: TextProps) => <Divider {...props} />,
  h1: (props: HeadingProps) => (
    <Heading as="h1" mt={8} mb={3} size="3xl" fontWeight="light" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <Heading as="h2" mt={6} mb={16} size="2xl" fontWeight="bold" {...props} />
  ),
  h3: (props: HeadingProps) => (
    <Heading as="h3" mt={8} mb={3} size="lg" fontWeight="light" {...props} />
  ),
  h4: (props: HeadingProps) => (
    <Heading
      as="h4"
      mt={8}
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
    <Table variant="striped" colorScheme="orange" {...props} />
  ),
  thead: (props: TableBodyProps) => <Thead {...props} />,
  tbody: (props: TableBodyProps) => <Tbody {...props} />,
  th: (props: TableColumnHeaderProps) => <Th {...props} />,
  tr: (props: TableRowProps) => <Tr {...props} />,
  td: (props: TableColumnHeaderProps) => <Td {...props} />,
  ul: (props: ListProps) => <UnorderedList styleType="none" {...props} />,
  ol: (props: ListProps) => <OrderedList styleType="none" {...props} />,
  li: (props: ListItemProps) => <ListItem {...props} />,
  Button: (props: ButtonProps) => <Button {...props} />,
};
