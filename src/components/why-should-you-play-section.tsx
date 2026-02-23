const WhyShouldYouPlaySection = () => {
  return (
    <section id="why-play" className="max-lg:p-4 max-lg:items-center max-lg:py-10 max-lg:flex-col flex items-end justify-between bg-[#033330] text-white">
      <div className="">
        <img src="/public/images/quest-bg.png" alt="why-should-you-play" />
      </div>

      <div className="lg:pr-19 py-15 lg:py-50 max-w-229 lg:w-[70%]">
        <h2 className="font-medium text-[45px] pb-5.5">Why Should You Play?</h2>

        <div className="space-y-7 ">
          <p className="font-light text-[31px]">
            <strong className="font-medium text-[38px] block">
              &nbsp; &bull; Learn While You Play:
            </strong>
            Enhance your knowledge in various subjects, from history to science
            and pop culture.
          </p>
          <p className="font-light text-[31px]">
            <strong className="font-medium text-[38px] block">
              &nbsp; &bull; Compete with Friends:
            </strong>
            Invite friends to join you in Multiplayer mode and see who can
            achieve the highest score!
          </p>

          <p className="font-light text-[31px]">
            <strong className="font-medium text-[38px] block">
              &nbsp; &bull; Flexible Play Options:
            </strong>
            Whether you want to practice at your own pace or compete against
            others, LogiQuest has a mode for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyShouldYouPlaySection;
