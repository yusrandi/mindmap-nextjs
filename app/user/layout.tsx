export const metadata = {
  title: "Users | Next.js 13 Demo App",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
