import BlockFormProvider from "@/contexts/block-form-context";
import BlockMaker from "./_components/block-maker";
import BlockFormIndex from "./_components/block-form-index";

export default function Page() {
  return (
    <BlockFormProvider>
      <section className="container mx-auto max-w-3xl p-4">
        <BlockMaker />
        <BlockFormIndex />
      </section>
    </BlockFormProvider>
  );
}
