

function FullBlog(props) {
  const { blog, setBlog } = props;


  const blogRay = [
    { header: "The First Week", date: "1-31-2023", asideClass: "w-25 h-50", img: "../img/contactStuff/github.svg", imgAlt: "Github Icon", first: "Week one wasn't what I expected, its been slower and not as code oriented as I would think. Although I admit, I didn't even know what a version control system was, but after git's introduction I can absolutely understand the importance of it. I would hate to have to manual revert a big chunk of code after I found out it was buggy or unusable. I also appreciate the slow intro into everything instead of jumping off on the deep end.", second: "I'm eager to learn more about coding, and just learn in general. I think learning is some of the most fun possible with the right subject, teacher, and environment. I would say that this bootcamp has all of that and more. Personally I can't wait to learn about all the different languages we're gonna use and about their ins and outs, and why some are better at certain tasks more than others.", third: "I get sporadic bursts of interests in things, like learning to solve a rubik's cube or flip a butterfly knife. But some interests don't stick so when I picked up coding as an interest and found this bootcamp, I was unsure if I would stick with it. That's why I took the Intro to Web course and did other various online courses for probably 6 months leading up to applying for the bootcamp." },
    { header: "Second Week of Onboarding", date: "2-6-2023", asideClass: "w-50 ", img: "../img/html-css-js-logos.png", imgAlt: "HTML, CSS, and Javascript Logos", first: "HTML/CSS/JS each play an important role in the whole UX process. While we could write everything in pure HTML that wouldn't be a pleasant experience and I believe the internet would be a way less interesting place if every site looked and behaved exactly the same. No one wants to go a site that looks like its been around since the dawn of computers.", second: "I understand the importance of pseudocoding, its a high level interpretation of code that anyone should be able to read and understand. Its suppose to lay out the foundation for all the coding in the rest of the project. This helps work through the logic of the problems at hand thoroughly so when we start coding, we only need to worry about the syntax which will be super easy as we work more with each language.", third: "Onboarding remotely was definitely different from a traditional classroom setting because there was no teacher directly in front of me to ask questions to, and because I was on a computer anyways I felt more inclined to google my questions before reaching out in the help channel. Even though I didn't use The help channel this week, seeing other peoples having similar problems made me feel like I wasn't totally off the path that was laid out. Also seeing other peoples projects was nice, because I could get ideas from them and take pieces from their code to fix problems in mine." },
    { header: "HTML/CSS/State", date: "2-13-23", asideClass: "w-25 h-50", img: "../img/bootstrapLogo.png", imgAlt: "Bootstrap logo", first: "Bootstrap Has way more classes than i know what to do with , but oddly still is very limiting sometimes, so figuring out when its better to use bootstrap or normal CSS will help me a lot in the future. Bootstraps 'justify-content-center' and 'justify-content-center' are the most important for aligning stuff i'd argue and yet they're the most finicky,sometimes they don't work at all or don't work on children elements and I ended up having to repeat the class name on 3 elements within each other.", second: "Definitely would like to learn more bootstrap, so I can properly use it's classes to the fullest of their abilities. For Javascript,Nothing specific, but i'd love to learn more about all its function,methods, and capabilities so I can be the most proficient in my class.", third: "I worked at walmart for 4 years and didn't want to just work retail all my life,and management definitely isn't for me. I always wanted to have a more important job and make more money and tried my hand at several things but either didn't care for them or the pay at the end of the road wasn't worth it to me. Of course I also want to provide for my family as well, and be able to take care of them. But I'd say its mostly my want to better myself." },
    { header: "VanillaJS", date: "2-20-23", asideClass: "w-25 h-50", img: "../img/js-logo.png", imgAlt: "Javascript Logo", first: "You can't have everything right when you want it ,and you can't always expect to get back the results you want. thats how APIs work,you have to program accordingly so as not to hinder the User experience by waiting on the results of an API. You must program defensively incase the API doesn't return what you expected.", second: "What does it mean to develop good code? It means to develop code that gets the job done in the most simple way without hindering performance or user experience. Without unnecessary repeating variables or functions(DRY). It also means good documentation/pseudocode to back up your code so its easier to understand it after a extended period away from it or in the case that someone else has to interact with it.", third: "What does it mean to be a good developer? Good developers should code simply but efficiently to get the job done without extra unnecessary code. Developers should also think about all possible outcomes of their functions and about user interactions that may have a negative outcome on the code/site itself if not used appropriately. Most obviously to practice good coding practices and understand the end goal thoroughly before even beginning the code.", fourth: "What is one thing that programmers hate doing? Definitely typing/repeating themselves,theres so many ways to avoid writing extra code,wether it be a re usable function,an external library/framework that pulls in its own functions/methods that wave a wand and magically return what you asking for. Not to mention the tons of built in functions/methods that are included in javascript alone." },
    { header: "Technical Article", date: "2-27-23", asideClass: "w-25 h-50", img: "../img/tip-iceberg.jpg", imgAlt: "Iceberg in Water", first: "The most basic definition of pseudocode to me, is a high level 'coding language'. A more in depth definition would be, pseudocode is every step that you want the computer to go through,broken down into the most basic logic, until you have identified everything needed for every step. Its writing out all possible functions you may need, and all variables that function may need or a variable that every function in the program needs access to. There are lots of ways to add to your pseudocode, so to help you think more in depth about everything.", second: "One of the first things we learned about was atomic design and how to identify parts of a webpage/wireframe and break them down into atoms, molecules, and organisms. We recently learned about MoSCoW which stands for 'Must Have,Should Have,Could Have, and Won't Have'. While I wouldn't say its pseudocode directly, it can help keep your direction while pseudocoding so you don't get hung up on a detail that you could have and focus more on what you must have. Theres also the 'User Journey' which describes the process the user go through when operating the app/website.", third: "Pseudocode helps programmers in the first half of the development process so you can work through the logic only without having to worry about syntax of the coding language. It also is more readable for a human so that a development team doesn't have to question each other about what they mean by some form of code. Best of all pseudocode can be translated into any programming language you want easily, given that you know that languages syntax already." },
    { header: "React Intro", date: "3-3-2023", asideClass: "w-25 h-50", img: "../img/react.png", imgAlt: "React Logo", first: "I think JavaScript Libraries at first are hard to use because they introduce new things and new ways to do things that were previously impossible. Having one week with React under my belt, I would say they aren't really hard to use. Its still Javascript, just with a some new syntax and built in functions", second: "In my self studies, I started learning about Flask, which seems very similar to React with using a single html 'boilerplate'/skeleton. I don't think we go over that in this bootcamp but I believe Django will be a better framework. I think Django is a more developed framework and Flask is meant to be more lightweight. Regardless i'm excited to learn more about React and Django when we get there.", third: "As I researched emerging Javascript tools, React seems to be the newest and most popular JavaScript tool out right now. I would like to learn about Angular as its a framework instead of library. From what i've read libraries are more in control of the workflow and Angular may get harder to debug as the project grows due to it changing the view and model based on each other. I still would think it would be fun and give me a different angle into web development." },
    { header: "CLI", date: "3-10-23", asideClass: "w-25 h-50", img: "../img/CLI.png", imgAlt: "Command line MS-DOS", first: "I've learned that CLI's are the original way people had to operate computers,before GUIs and mouses took over. I think to the uninformed they are, because you don't know what to say, what the computer can understand or what it expects from you. I would say after some time with them (learning Git commands and navigating files with just CLI), they aren't scary and they actually improve speed, because as you learn more commands and get more familiar with them, you have to take your hands away from the keyboard less. Navigating GUIs are inherently slower but more user friendly.", second: "If I were to build a CLI, it would probably just have more simple shortcuts for common things, like a shorthand that `git add .` `git commit` and `git push`. because each of those individually takes time. Or maybe add a command that starts an old text-adventure based RPG for some cognitive breaks.", third: "Creating a big website with multiple pages, like wikipedia. Having separate pages for each files also contains a ton of copy and pasted code which if 2 pages shared info retaining to would mean more hard code that would need to be found and then changed. Styling would also be way more involved without a framework like bootstrap, considering how deep CSS itself is, just trying to find something that Bootstrap doesn't make easy to use is a involved process." },
    { header: "Halfway!", date: "a", asideClass: "a", img: "a", imgAlt: "a", first: "a", second: "a", third: "a" },
    { header: "Python", date: "a", asideClass: "a", img: "a", imgAlt: "a", first: "a", second: "a", third: "a" },
    { header: "Django 1", date: "a", asideClass: "a", img: "a", imgAlt: "a", first: "a", second: "a", third: "a" },
    { header: "Django 2", date: "a", asideClass: "a", img: "a", imgAlt: "a", first: "a", second: "a", third: "a" },
    { header: "Finish Line", date: "a", asideClass: "a", img: "a", imgAlt: "a", first: "a", second: "a", third: "a" },
    { header: "Final Project 1", date: "a", asideClass: "a", img: "a", imgAlt: "a", first: "a", second: "a", third: "a" },
    { header: "Final Project 2", date: "a", asideClass: "a", img: "a", imgAlt: "a", first: "a", second: "a", third: "a" }
  ];


  function handleClick(symbol) {
    switch (symbol) {
      default:
      case "+":
        setBlog(blog + 1)
        break;

      case "-":
        setBlog(blog - 1)
        break;
    }
  }

  // function choose() {
  //   switch(blog) {
  //     default:
  //       case "0":
  //         return (
  //           <>
  //           </>
  //         )
  //   }
  // }

  return (
    <div className="d-flex justify-content-center">
      <div
        id="box"
        className="border border-light border-5 rounded container-sm bg-dark "
      >
        <h1>{blogRay[blog].header}</h1>
        <h2>{blogRay[blog].date}</h2>
        <aside className={blogRay[blog].asideClass}>
          <img src={blogRay[blog].img} alt={blogRay[blog].imgAlt} className="w-100 h-100" />
        </aside>
        <p>
          {blogRay[blog].first}
        </p>
        <p>
          {blogRay[blog].second}
        </p>
        <p>
          {blogRay[blog].third}
        </p>
        <p>
          {blogRay[blog].fourth}
        </p>
        <div className="justify-content-between d-flex mb-2">

          <button className="btn btn-secondary" onClick={() => handleClick("-")}>Last Blog</button>


          <button className="btn btn-secondary" onClick={() => handleClick("+")}>Next Blog</button>

        </div>
      </div>
    </div>

  )
}

export default FullBlog
