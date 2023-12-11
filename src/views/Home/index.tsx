import "./styles.scss";
import headshot from "../../assets/valerie.jpg";

function Home() {
  return (
    <>
      <section className="row">
        <div>
          <h1>Hi there!</h1>
          <p className="tagline">
            I'm Valerie, a senior user experience engineer living in Denver, CO
          </p>
        </div>
        <img
          className="portrait"
          src={headshot}
          alt="Valerie Kraucunas artsy headshot, she smiles and has lavender, aqua and blue hair and glasses. Around her are drawn-in elements of a tea kettle and tea cups, leafy plant, and a crescent moon and stars"
        />
      </section>

      <section>
        <h2>Approach</h2>
        <p>
          I am passionate about design systems, accessibility, and
          problem-solving on the DOM. I enjoy sitting at the intersection of
          product design and software engineering to create practical UI for
          positive user experiences.
        </p>
      </section>
      <section>
        <h2>Specialties & Skills</h2>
        <ul role="presentation" className="skilllist">
          <li>
            <h3>Design Engineering</h3>
            <p>
              From requirements gathering and empathizing with the user to AB
              testing, I like to be involved early in the process of making
              software. While I do not tend to generate UI, I have the problem
              solving skills of a designer and enjoy collaborating closely with
              them. I get a kick out of interpretting working UI from design
              deliverables. This position in the process allows me to consider
              and speak up for end users and feature engineers. It also
              positions me close to design systems and component libraries,
              which are favorites of mine.
            </p>
          </li>
          <li>
            <h3>Prototyping</h3>
            <p>
              These skills are the embodiment of "show, don't tell." I'm
              comfortable with rapid code delivery, even live coding, to help
              settle "this or that?" debates. High-fidelity, coded prototypes
              are the premier way to user test. I adore bringing ideas to life
              to see which is best.
            </p>
          </li>
          <li>
            <h3>Accessibility Advocate</h3>
            <p>
              User-focused development is my work.&nbsp;
              <a
                href="https://www.cdc.gov/ncbddd/disabilityandhealth/infographic-disability-impacts-all.html"
                target="_blank"
              >
                One in four adults in the US live with a disability.
              </a>
              &nbsp; From color contrast to tap target sizing, I have surfaced
              accessibility improvement opportunities to every job I've had as
              an engineer. I'm an enthusiastic proponent of designing from the
              margins, or considering how people with different disabilty types
              would interact with a UI.
            </p>
          </li>
          <li>
            <h3>Mentor</h3>
            <p>
              After graduating code school, I participated in a residency
              program and taught a cohort of students making the career change
              like myself. While there I learned how to teach, strengthened my
              technical speaking and translating muscles, and became comfortable
              with live coding.
            </p>
            <p>
              More recently, I maintain multiple mentees. I enjoy using code
              review, professional coaching including resume review, and some
              emotional support to build their confidence as they join the
              industry and find their way. I have been a moderator of the Denver
              Devs online community since 2018, and take the role modeling and
              empathy aspects of leadership seriously.
            </p>
            <p>
              I am a firm believer that companies that won't hire and support
              junior engineers are doing active harm to the diversity and
              sustainability of the industry.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Home;
