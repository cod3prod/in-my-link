// import AddButton from "./_components/add-button";
import BlockContainer from "./_components/block-container";
import ProfileCard from "./_components/profile-card";

export default function Page() {
  return (
    <article className="flex-1 flex flex-col gap-4 relative mx-auto">
      <ProfileCard />
      <BlockContainer />
      {/* <AddButton /> */}
    </article>
  );
}
