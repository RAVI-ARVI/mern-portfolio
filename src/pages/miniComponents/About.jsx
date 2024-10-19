const About = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          ABOUT <span className="text-tubeLight-effect font-extrabold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="text-center">
        <p className="uppercase text-xl text-slate-400">
          Allow me to introduce myself.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <img
              src="/me.jpg"
              alt="avatar"
              className="bg-white p-2 sm:p-4 rotate-[25deg] h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px]"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
            <p>
              Hello! I'm Ravi Sankar, a passionate and dedicated full-stack web
              developer with over 2.3 years of experience in crafting dynamic,
              user-friendly web applications. My journey in web development has
              equipped me with a diverse skill set, allowing me to work across
              the front-end and back-end of projects, ensuring seamless
              functionality and design.
            </p>
            <p>
              Beyond coding, I’m constantly expanding my horizons by learning
              new skills, which keeps me adaptable in the ever-evolving tech
              landscape. When I'm not writing code, you’ll likely find me
              reading books, meditating, or listening to podcasts—all of which
              help me stay focused and inspired. I also enjoy unwinding with a
              good movie after a day of creative problem-solving.
            </p>
          </div>
        </div>
        <p className="tracking-[1px] text-xl">
          In addition to my professional experience, I offer my expertise as a
          freelancer, collaborating with clients to bring their digital visions
          to life. My goal is to build impactful, efficient, and elegant
          solutions that not only meet but exceed client expectations. I’m
          always excited to tackle new challenges, explore emerging
          technologies, and continue growing both personally and professionally.
        </p>
      </div>
    </div>
  );
};

export default About;
