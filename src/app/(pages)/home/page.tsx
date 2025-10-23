import Image from "next/image";

export default function HomePage() {

  return (
    <div className="flex flex-col items-start justify-start h-full md:p-8 max-w-2xl md:m-auto">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl md:text-5xl md:mb-4 font-bold mb-2">
          Hi, I am Arun
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-gray-400">
          Senior Frontend Developer.
        </p>
      </div>
      <div className="space-y-4 flex flex-col gap-3 text-gray-300 text-lg md:text-xl leading-10">
        <p>
          I build things for the web that are{" "}
          <b>fast, scalable, and user-first</b>. I specialize in turning complex
          ideas into functional, high-quality products
        </p>
        <p>
          As a Senior Frontend Engineer at &nbsp;
          <a
            href="https://impress.ai/"
            className="inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={100}
              height={24}
              src="https://impress.ai/wp-content/themes/impress/img/logo.svg"
              alt="Impress AI"
              className=""
            />
          </a>
          &nbsp;, I&apos;ve spent the past few years{" "}
          <b>leading frontend initiatives, mentoring</b> high-performing teams,
          and <b>simplifying complex workflows</b> with clean, maintainable
          code.
        </p>
        <p>
          Beyond development, I have a strong interest in{" "}
          <b>UI/Design Systems, process automation</b>, and how technology
          connects with <b>product strategy</b>.
        </p>

        <p>
          Want to see how I translate ideas into code?{" "}
          <b>Check out my featured projects below</b> or{" "}
          <b>say hello on LinkedIn</b>.
        </p>
      </div>
    </div>
  );
}
