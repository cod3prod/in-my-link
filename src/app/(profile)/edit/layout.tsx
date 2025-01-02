import { Metadata } from "next";

export const metadata: Metadata = {
    title: "유저 수정 | IN MY LINK",
    description: "BOOMCO co.",
  };

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <main className="flex-1 mx-auto max-w-screen-md">{children}</main>
    </div>
  );
};

export default Layout;
