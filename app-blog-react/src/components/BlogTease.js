import BlogTeaseCard from "./BlogTeaseCard"

function BlogTease(props) {
  const { setView, setBlog, blog } = props;

  const blogs = [
    { title: "Week 1 Onboarding", body: "Week one wasn't what I expected, its been slower and not as code oriented as I would think. Although I admit, I didn't even know what a version control system was...", link: 0 }
    , { title: "Week 2 Onboarding", body: "HTML/CSS/JS each play an important role in the whole UX process. While we could write everything in pure HTML that wouldn't be a pleasant experience and I believe...", link: 1 }
    , { title: "HTML/CSS/JS/State", body: "Bootstrap Has way more classes than i know what to do with , but oddly still is very limiting sometimes, so figuring out when its better to use bootstrap or normal CSS will help me a lot in the future...", link: 2 }
    , { title: "VanillaJS", body: "You can't have everything right when you want it ,and you can't always expect to get back the results you want. thats how APIs work,you have to program accordingly so as not to hinder the User experience by...", link: 3 }
    , { title: "Technical Article", body: "The most basic definition of pseudocode to me, is a high level 'coding language'. A more in depth definition would be, pseudocode is...", link: 4 }
    , { title: "React Intro", body: "I think JavaScript Libraries at first are hard to use because they introduce new things and new ways to do things that were previously impossible. Having one week...", link: 5 }
    , { title: "CLI", body: "Coming Soon to a blog near you!", link: 6 }
    , { title: "Halfway!", body: "Coming Soon to a blog near you!", link: 7 }
    , { title: "Python", body: "Coming Soon to a blog near you!", link: 8 }
    , { title: "Django 1", body: "Coming Soon to a blog near you!", link: 9 }
    , { title: "Django 2", body: "Coming Soon to a blog near you!", link: 10 }
    , { title: "Finish line", body: "Coming Soon to a blog near you!", link: 11 }
    , { title: "Final Project 1", body: "Coming Soon to a blog near you!", link: 12 }
    , { title: "Final Project 2", body: "Coming Soon to a blog near you!", link: 13 }
  ]

  return (
    <div className="d-flex justify-content-center h-100" >
      <div className=" container-sm">
        <div className="row">

          {blogs.map((aBlog, index) => <BlogTeaseCard setBlog={setBlog} setView={setView} blog={blog} key={index}
            title={blogs[index].title} body={blogs[index].body} link={blogs[index].link}
          />
          )
          }

        </div>
      </div>
    </div >
  )
}

export default BlogTease