import Header from "@/components/header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="grid w-full px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl lg:gap-8">{props.children}</div>
    </>
  );
};

export default Layout;
