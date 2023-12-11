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
          product design and software engineering to create practical UI.
        </p>
      </section>
      <section>
        <h2>Specialties and experience</h2>
        <ul role="presentation">
          <li>
            <h3>Design System Engineer</h3>
            <p>
              A year-plus spent on a cross-functional, enterprise design system
              team, where I independently established standards for and built
              out a multi-platform design token library and participated in a
              swarm effort to write components that consumed those tokens.
              Discovery and corrections from the implementation effort helped me
              increment the token library from alpha to beta; ultimately
              delivering a complete, documented set of tokens for web, most
              tokens for TV, and core tokens for Android SDK use.
            </p>
          </li>
          <li>
            <h3>Prototyper</h3>
            <p>
              Over two years embedded in a multidisciplinary design group
              building high-fidelity code prototypes for rapid proofs of concept
              and user testing. Heavily focused into advanced settings screens
              in user portals, I acted as a "front-end dev in the room," able to
              engage the hypotheticals and answer questions early in the
              process. I enjoy design + dev pairing sessions to work through the
              details.
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
              &nbsp; I have surfaced accessibility improvement opportunities to
              every job I've had as an engineer. I am currently working thru
              Deque University's Web Accessibility curriculum.
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
