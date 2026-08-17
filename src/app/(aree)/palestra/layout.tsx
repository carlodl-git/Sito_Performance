import { AreaLayout } from "@/components/layout/AreaLayout";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <AreaLayout area="palestra">{children}</AreaLayout>;
}
