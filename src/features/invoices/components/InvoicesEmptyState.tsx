import illustrImg from "@/assets/images/illustration-empty.svg";

const InvoicesEmptyState = () => {
  return (
    <div className="w-[clamp(206px,25vw,241px)] flex flex-col justify-center items-center gap-10.5 self-center">
      <img
        className="w-[clamp(193px,25vw,240px)] "
        src={illustrImg}
        alt="Illustration of a woman with a megaphone coming out of an envelope"
      />
      <div className="flex flex-col items-center gap-5.75">
        <h2 className="text-text-primary text-[24px] font-bold tracking-[-0.75px]">
          There is nothing here
        </h2>
        <p className="pl-[14.5px] pr-[15.5px] text-text-subtle text-body dark:text-muted text-center">
          Create an invoice by clicking the <b>New</b> button and getstarted
        </p>
      </div>
    </div>
  );
};

export default InvoicesEmptyState;
