import AddButton from "./_components/add-button";
import BlockContainer from "./_components/block-container";
import ProfileCard from "./_components/profile-card";

export default function Page() {
  return (
    <section className="flex-1 relative container mx-auto max-w-3xl p-4 space-y-4">
      <ProfileCard />
      <BlockContainer />
      <AddButton />
    </section>
  );
}
