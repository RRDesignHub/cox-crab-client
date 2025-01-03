export const SectionHeader = ({ header, subHeader }) => {
  return (
    <>
      <div className="text-center">
        <h2 className="text-4xl font-bold font-nunito">{header}</h2>
        <p className="font-heebo">{subHeader}</p>
      </div>
    </>
  );
};
