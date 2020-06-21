# Full-Stack Ground Curriculum

## About

This is a fork of [coding-boot-camp/fullstack-ground](https://github.com/coding-boot-camp/fullstack-ground).

## Class changes

Changes to the class can be found in [bonus.md](./meta/bonus-features/bonus.md). This was originally made by one of my TAs (Dane) and I (Spencer) updated and added to it.

## Changes in this fork

- Activities removed, added and rewritten

  - I (Spencer) found thousands of errors and bugs which are now fixed

  - Some activites did not seem useful and detracted from the learnings so I removed a few of them. For example, the CSS `float` property was removed.

  - There were some holes and gaps that I did not think were covered so I added more activites. Notable additions:

    - `flexbox`: a basic and fundamental tool in CSS which was not covered

    - Unit `22-computer-science`: I did not feel there was nearly enough attention placed on this unit to ensure students can successfully pass an interview. I rewrote this to extend across four classes (instead of the original half a day deck) and added numerous bonus lectures (after class continued teaching) and preclass drills to account for what couldn't fit in those four days.

- Preclass drills added

- Lesson plans updated

  - Most lesson plans were simplified and adjusted to include additional topics, remove topics that seemed distracting, add analogies to help explain areas, etc. These were not written with the intent of being shared so some of them are rough.

## Directory Structure

### class-content

You will find unit overviews, all activitiy files, and homework instructions and solutions in [class-content](class-content).

Use these materials to build your class repository.

### lesson-plans

You will find grading rubrics, links to slide decks and time trackers, and lesson plans organized by program in [lesson-plans](lesson-plans).

These materials are _not_ to be shared with students.

### meta

Anything about the course itself

#### bonus-features

- `bonus.md`: A list of the extra additions made to the class

- `template.md`: Pre-written homework responses to expedite the grading process

#### data-analytics

- `*.json`: Saved API calls from BootcampSpot used to power various Tableau workbooks (`*.twb`)

- `bootcampspot.twb`: Workbook to easily see average grades, how many assignments have not been submitted, attendance trends, etc.

- `survey-data.twbx`: Trends from the weekly survey feedback. This was removed because the format of the weekly surveys was changed.

- `technologies.twbx`: A visualization of the technologies taught in the bootcamp. This was used at the beginning of the course to show how much will be learned, at the end to celebrate all that was learned and shared with students for them to highlight in their portfolios.

#### extra-teaching

Topics or lectures that could be used outside of the class, typically in bonus lectures, to teach more information that did not fit in the core of the class.

#### grading

- `hw-groups.md`: The class was divided into two groups and the TAs alternated grading groups every week to ensure everyone gets insight from both TAs and there would be no preference

- `template.md`: A collection of common responses and tools to expedite the grading process.

#### interview-questions

Questions asked in mock interviews with students. These are not shared before-hand (like a normal interview.)

#### projects

Information about the projects that cannot be shared with the class.

#### week-template

A template to create a new week for the class. It includes each day's general structure (drills, homework, etc.) as well as the module setup with inclusions like linting.

`.eslintrc.json`: This was modified slightly for each unit based on what we had learned. For example, prior to learning ES6 I could use the linter to verify no ES6 code was introduced and after ES6 I could ensure that all relevant ES6 was included. This also enabled catching and fixing literally thousands of bugs and errors in the given code.

---

## Need Help?

For information regarding onboarding and training, consult the [Instructor Onboarding Guide](https://coding-bootcamp-instructor-onboarding-prework.readthedocs-hosted.com/en/latest/).

Have a suggestion or feedback? Please submit it through our [FullStack-Ground Feedback & Suggestions Survey](https://forms.gle/pRduJubbPK9fu22R7)

Found a bug? [Log an Issue](https://github.com/coding-boot-camp/FullStack-Ground/issues).

For emergencies, message the Full Stack Program Support Manager, `@Xander Rapstine`, in [#05-web-dev-course](https://trilogyed-instruction.slack.com/messages/C1073F9N0/).
