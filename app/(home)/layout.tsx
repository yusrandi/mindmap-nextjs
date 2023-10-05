export const metadata = {
  title: "Dashboard | Next.js 13 Demo App",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
