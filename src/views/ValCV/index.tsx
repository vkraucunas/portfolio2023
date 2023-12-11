import { Link } from "react-router-dom";
function ValCV() {
  return (
    <div>
      <h1>Work Log</h1>
      <section>
        <h2>Borderless VR</h2>
        <p>
          I first worked on the Borderless proof of concept with{" "}
          <Link
            to="https://oddcommon.com/work/borderless"
            target="_blank"
            rel="noopener noreferrer"
          >
            OddCommon.
          </Link>
          There I built the frontend of a no-code VR experience building
          software, a teacher virtual field trip control application, and a
          component library. This work was done in React and Electron.
        </p>
        <p>
          This project won an Awwwards Site of the Day and a FWA Site of the
          Day.
        </p>
        <p>
          After the proof of concept was successful, we took learnings from the
          first year of operation to build an improved system. The
          experience-builder was moved to the browser, and instead of
          tightly-coupled chapters and experiences, we made it a
          SCORM-conformant system with modules that could be plugged into any
          experience.
        </p>
        <p>
          While working on the second version of the project, I contributed in a
          full stack manner. I lead frontend development on the experience
          builder and component library, but also built our authentication and
          authorization flow with AWS Cognito, as well as a command line
          interface for data migration. In addition to this, I handled our
          staging and production release processes, including Github Actions for
          testing and automated release PR creation. Finally, I established and
          maintained the linting rules for both JS and SCSS.
        </p>
      </section>
      <section>
        <h2>Kite Design System</h2>
        <p>
          I spent a year-plus on a cross-functional, enterprise design system
          team, where I independently established standards for and built out a
          multi-platform design token library using Style Dictionary. This was a
          great learning experience, as I discerned the right balance of
          codifying design decisions and allowing comopnent developers to still
          build the components using best practices for that level of the work.
        </p>
        <p>
          After delivery of the web platform tokens, I participated in a swarm
          effort to write vanilla components that consumed those tokens.
          Discovery and corrections from the implementation effort helped me
          increment the token library from zero to beta; ultimately delivering a
          complete, documented set of tokens for web, most tokens for TV, and
          core tokens for Android SDK use.
        </p>
        <p>
          While on this team, I also co-authored the design system
          intake-to-delivery process and defined consumer relation standards,
          managed releases of the design system documentation site, and
          supported non-developers in Git flow.
        </p>
      </section>
      <section>
        <h2>Spectrum Prototyping</h2>
        <p>
          I sat for over two years on a multidisciplinary design group building
          high-fidelity code prototypes for rapid proofs of concept and user
          testing. This group's work was heavily focused on advanced settings
          screens in user portals.
        </p>
        <p>
          Acting as the "front-end dev in the room," I was able to engage the
          designers' hypotheticals and answer questions early in the process,
          saving time for the business. I built prototypes for user settings,
          white-labeled wifi captive portals, phone service account management,
          and service bundle building. I enjoy design + dev pairing sessions to
          work through the details. This work was done in Vue.
        </p>
      </section>
      <section>
        <h2>MassRoots</h2>
        <p>
          Here, I worked on a team that delivered a front-end rebrand and
          rewrite of a social media application. I also participated in
          refactoring a Node + Express API after the acquisition of a second
          company.
        </p>
      </section>
      <section>
        <h2>Galvanize Web Development Immersive Resident</h2>
        <p>
          After graduating from code school, I was hired as a resident for
          another cohort of students entering the program. Working on a team of
          more senior instructors, my purpose was to teach and support the
          students. Primarily, I developed and taught 2-4 classroom-based
          lessons a week and provided one-on-one mentoring support to struggling
          students. I also administered assessments of student progress,
          established a peer code review process for the students.
        </p>
      </section>
      <section>
        <h2>Before software</h2>
        <p>
          Prior to my transition to software, I worked as an administrative
          assistant in the nonprofit and higher education spaces. It was here
          that I learned that the user experience of back office software of was
          atrocious and I was motivated to deliver something better. This work
          also built up my customer service skills.
        </p>
      </section>
      <section>
        <h2>Education</h2>
        <p>
          I attended Galvanize Full Stack code bootcamp in 2016. I learned HTML,
          CSS, JavaScript, Node, Express, PostgreSQL, AngularJS and more.
        </p>
        <p>I also hold a BA in Political Science from Creighton University.</p>
      </section>
    </div>
  );
}

export default ValCV;
