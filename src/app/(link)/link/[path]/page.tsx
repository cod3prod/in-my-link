import ProfileCard from "@/components/profile-card";
import BlockContainer from "../_components/block-container";

export default function Page() {
  return (
    <article className="flex flex-col gap-4">
      <ProfileCard className="bg-background" />
      <BlockContainer />
    </article>
  );
}
