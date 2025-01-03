export const SectionHeader = ({ header, subHeader }) => {
  return (
    <>
      <div className="text-center mb-4 border-b-2">
        <h2 className="text-4xl font-bold font-nunito text-[rgba(0,18,26)] ">{header}</h2>
        <p className="font-heebo text-[rgba(0,18,26,0.7)]">{subHeader}</p>
      </div>
    </>
  );
};
