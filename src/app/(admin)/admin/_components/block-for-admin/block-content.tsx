// import ContentForCalendar from "./content-for-calendar";
// import ContentForEvent from "./content-for-event";
import ContentForAnother from "./content-for-another";


export default function BlockContent() {
  return (
    <div className="px-2 flex-1">
      {/* <ContentForCalendar /> */}
      {/* <ContentForEvent /> */}
      {true && <ContentForAnother />}
    </div>
  );
}
